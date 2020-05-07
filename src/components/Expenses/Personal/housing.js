import { API, graphqlOperation } from "aws-amplify";
import dayjs from "dayjs";

import { asEnumeration } from "../../helpers/utilities";

import {
  createRepair,
  updateRepair,
  deleteRepair,
  createHome,
  updateHome,
  deleteHome,
  createUtility,
  deleteUtility,
  updateUtility,
  createSupply,
  updateSupply,
  deleteSupply,
  createHousingExpense,
  updateHousingExpense,
  deleteHousingExpense,
  createOtherHousing,
  deleteOtherHousing,
  updateOtherHousing,
} from "../../../graphql/mutations";
import {
  getRepair,
  listRepairs,
  getUtility,
  listUtilitys,
  getSupply,
  listSupplys,
  getHome,
  listHomes,
  listOtherHousings,
  getOtherHousing,
  listHousingExpenses,
  getHousingExpense,
} from "../../../graphql/queries";

import {
  handleCreatePeriod,
  handleUpdatePeriod,
  handleDeletePeriod,
} from "./period";

import {
  handleCreateAddress,
  handleDeleteAddress,
  handleUpdateAddress,
  handleFormatAddress,
} from "./address";

// Is AppSync cost separated from DynamoDB cost (read, write) when your graphqQL api use a DynamoDB database?

// I am trying to decide if I should check for an object (read) or directly update it (re-write) calling the API. Maybe I could mitigate that if the app have some state on the client side and make some check here.

// I found that AppSync charge:
//     $4.00 per million Query and Data Modification Operations*
//     $0.09 per GB data transfer
// And DynamoDB charge:
//     $1.25 per million write request units
//     $0.25 per million read request units
//   Data Transfer IN
//     $0.00 per GB for all data transfer in
//   Data Transfer OUT
//      $0.00 per GB Up to 1 GB / Month
//      $0.09 per GB Next 9.999 TB / Month
//      $0.085 per GB Next 40 TB / Month
//      $0.07 per GB Next 100 TB / Month
//      $0.05 per GB Greater than 150 TB / Month

//housing repair

export const handleCreateRepair = async (data) => {
  try {
    const repairFormated = housingAsEnum.fromValue("REPAIR").format(data);

    const result = await API.graphql(
      graphqlOperation(createRepair, { input: { ...repairFormated } })
    );
    return result.data.createRepair.id;
  } catch (error) {
    console.error("handle create repair", error);
  }
};

export const handleDeleteRepair = async (repair) => {
  try {
    const { id } = repair;

    const result = await API.graphql(
      graphqlOperation(deleteRepair, { input: { id } })
    );
    return result.data.deleteRepair.id;
  } catch (error) {
    console.error("handle delete repair", error);
  }
};

export const handleUpdateRepair = async (data, repair) => {
  //repair should contains the repair id from expense state --expense.repair.id
  try {
    const repairFormated = housingAsEnum
      .fromValue("REPAIR")
      .format(data, repair);

    const result = await API.graphql(
      graphqlOperation(updateRepair, { input: { ...repairFormated } })
    );

    return result.data.updateRepair.id;
  } catch (error) {
    console.error("handle update repair", error);
  }
};

export const handleListRepair = async () => {
  try {
    const listResult = await API.graphql(
      graphqlOperation(listRepairs, { input: {} })
    );
    return listResult.data.listRepair.items;
  } catch (error) {
    console.error("handle list repair", error);
  }
};

export const handleGetRepair = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getRepair, { input: { id } })
    );
    return result.data.getRepair;
  } catch (error) {
    console.error("handle get repair", error);
  }
};

//housing home
export const handleCreateHome = async (data) => {
  try {
    let homeAddressId = null;

    const homePreFormated = housingAsEnum.fromValue("HOME").format(data);

    const addressFormated = handleFormatAddress(data);

    const addressFormatedValues = Object.values(addressFormated);
    const notNull = (x) => x; // null should return as false

    if (addressFormatedValues.some(notNull)) {
      homeAddressId = await handleCreateAddress(addressFormated);
    }

    const formatedHome = { ...homePreFormated, homeAddressId };

    const result = await API.graphql(
      graphqlOperation(createHome, {
        input: { ...formatedHome },
      })
    );

    return result.data.createHome.id;
  } catch (error) {
    console.error("handle create repair", error);
  }
};

export const handleDeleteHome = async (home) => {
  try {
    const { id } = home;

    if (home.address) {
      const addressId = home.address.id;
      await handleDeleteAddress(addressId);
    }

    const result = await API.graphql(
      graphqlOperation(deleteHome, { input: { id } })
    );

    return result.data.deleteHome.id;
  } catch (error) {
    console.error("handle delete home", error);
  }
};

export const handleUpdateHome = async (data, home) => {
  //Home should contains the Home id from expense state --expense.Home.id
  try {
    const homePreformated = housingAsEnum.fromValue("HOME").format(data, home);
    let { homeAddressId } = homePreformated;

    const addressFormated = handleFormatAddress(data);

    const addressFormatedValues = Object.values(addressFormated);
    const notNull = (x) => x; // null should return as false

    //TODO check if make sense that someone could change
    // all address's fields to empty
    if (addressFormatedValues.some(notNull)) {
      if (homeAddressId) {
        await handleUpdateAddress({
          id: homeAddressId,
          ...addressFormated,
        });
      } else {
        homeAddressId = await handleCreateAddress(addressFormated);
      }
    }

    const formatedHome = { ...homePreformated, homeAddressId };

    const result = await API.graphql(
      graphqlOperation(updateHome, { input: { ...formatedHome } })
    );

    return result.data.updateHome.id;
  } catch (error) {
    console.error("handle update Home", error);
  }
};

export const handleListHome = async () => {
  try {
    const listResult = await API.graphql(
      graphqlOperation(listHomes, { input: {} })
    );
    return listResult.data.listHome.items;
  } catch (error) {
    console.error("handle list Home", error);
  }
};

export const handleGetHome = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getHome, { input: { id } })
    );
    return result.data.getHome;
  } catch (error) {
    console.error("handle get home", error);
  }
};

//housing utility
export const handleCreateUtility = async (data) => {
  try {
    let utilityPeriodId = null;
    if (data.housingBillingStart !== "" && data.housingBillingEnd !== "") {
      utilityPeriodId = await handleCreatePeriod({
        billingStart: dayjs(data.housingBillingStart).format("YYYY-MM-DD"),
        billingEnd: dayjs(data.housingBillingEnd).format("YYYY-MM-DD"),
      });
    }
    //TODO check if I should pass {} or null
    const utilityPreFormated = housingAsEnum.fromValue("UTILITY").format(data);
    const formatedUtility = { ...utilityPreFormated, utilityPeriodId };

    const result = await API.graphql(
      graphqlOperation(createUtility, { input: { ...formatedUtility } })
    );

    return result.data.createUtility.id;
  } catch (error) {
    console.error("handle create utility", error);
  }
};

//Deleted compounded instances return all of it parts ids
export const handleDeleteUtility = async (utility) => {
  try {
    const { id } = utility;

    if (utility.preriod) {
      const periodId = utility.period.id;
      await handleDeletePeriod(periodId);
    }

    const result = await API.graphql(
      graphqlOperation(deleteUtility, { input: { id: id } })
    );

    return result.data.deleteUtility.id;
  } catch (error) {
    console.error("handle delete utility", error);
  }
};

export const handleUpdateUtility = async (data, utility) => {
  try {
    const utilityPreFormated = housingAsEnum
      .fromValue("UTILITY")
      .format(data, utility);

    let { utilityPeriodId } = utilityPreFormated;

    if (data.housingBillingStart !== "" && data.housingBillingEnd !== "") {
      if (utilityPeriodId) {
        await handleUpdatePeriod({
          id: utilityPeriodId,
          billingStart: dayjs(data.housingBillingStart).format("YYYY-MM-DD"),
          billingEnd: dayjs(data.housingBillingEnd).format("YYYY-MM-DD"),
        });
      } else {
        utilityPeriodId = await handleCreatePeriod({
          billingStart: dayjs(data.housingBillingStart).format("YYYY-MM-DD"),
          billingEnd: dayjs(data.housingBillingEnd).format("YYYY-MM-DD"),
        });
      }
    }

    const utilityFormated = { ...utilityPreFormated, utilityPeriodId };

    const result = await API.graphql(
      graphqlOperation(updateUtility, { input: { ...utilityFormated } })
    );

    return result.data.updateUtility.id;
  } catch (error) {
    console.error("handle update utility", error);
  }
};

export const handleGetUtility = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getUtility, { input: { id } })
    );
    return result.data.getUtility;
  } catch (error) {
    console.error("handle get utility", error);
  }
};

export const handleListUtility = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listUtilitys, { input: {} })
    );
    return result.data.listUtilitys.items;
  } catch (error) {
    console.error("handle list utility", error);
  }
};

//housing supply
export const handleCreateSupply = async (data) => {
  try {
    const supplyFormated = housingAsEnum.fromValue("SUPPLY").format(data);

    const result = await API.graphql(
      graphqlOperation(createSupply, { input: { ...supplyFormated } })
    );

    return result.data.createSupply.id;
  } catch (error) {
    console.error("handle create supply", error);
  }
};

export const handleDeleteSupply = async (supply) => {
  try {
    const { id } = supply;
    const result = await API.graphql(
      graphqlOperation(deleteSupply, { input: { id } })
    );

    return result.data.deleteSupply.id;
  } catch (error) {
    console.error("handle delete supply", error);
  }
};

export const handleUpdateSupply = async (data, supply = null) => {
  try {
    const formatedSupply = housingAsEnum
      .fromValue("SUPPLY")
      .format(data, supply);

    const result = await API.graphql(
      graphqlOperation(updateSupply, { input: { ...formatedSupply } })
    );

    return result.data.updateSupply.id;
  } catch (error) {
    console.error("handle update supply", error);
  }
};

export const handleGetSupply = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getSupply, { input: { id } })
    );
    return result.data.getSupply;
  } catch (error) {
    console.error("handle get supply", error);
  }
};

export const handleListSupply = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listSupplys, { input: {} })
    );
    return result.data.listSupplys.items;
  } catch (error) {
    console.error("handle list supply", error);
  }
};

//housing other
export const handleCreateOtherHousings = async (data) => {
  try {
    const formatedOtherHousings = housingAsEnum.fromValue("OTHER").format(data);

    const result = await API.graphql(
      graphqlOperation(createOtherHousing, {
        input: { ...formatedOtherHousings },
      })
    );

    return result.data.createOtherHousing.id;
  } catch (error) {
    console.error("handle create other housing", error);
  }
};

export const handleDeleteOtherHousings = async (otherHousing) => {
  try {
    const { id } = otherHousing;
    const result = await API.graphql(
      graphqlOperation(deleteOtherHousing, { input: { id } })
    );

    return result.data.deleteOtherHousing.id;
  } catch (error) {
    console.error("handle delete other housing", error);
  }
};

export const handleUpdateOtherHousings = async (data, otherHousing) => {
  try {
    const formatedOtherHousing = housingAsEnum
      .fromValue("OTHER")
      .format(data, otherHousing);

    const result = await API.graphql(
      graphqlOperation(updateOtherHousing, {
        input: { ...formatedOtherHousing },
      })
    );

    return result.data.updateOtherHousing.id;
  } catch (error) {
    console.error("handle update other housing", error);
  }
};

export const handleListOtherHousings = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listOtherHousings, { input: {} })
    );

    return result.data.listOtherHousings.items;
  } catch (error) {
    console.error("handle list other housing", error);
  }
};

export const handleGetOtherHousings = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getOtherHousing, { input: { id } })
    );

    return result.data.getOtherHousing;
  } catch (error) {
    console.error("handle get other housing", error);
  }
};

//housingExpenseUtilityId

// housing ** format
export const handleFormatUtility = (data, utility = null) => {
  //utilityPeriod must be added after the period is created
  const newUtility = {
    selection: data.utility ? data.utility : null,
    company: data.housingCompany ? data.housingCompany : null,
    title: data.housingTitle ? data.housingTitle : null,
    notes: data.housingNotes ? data.housingNotes : null,
    utilityPeriodId: null,
    reading: data.housingReading ? Number(data.housingReading) : null,
  };

  if (utility) {
    const utilityPeriodId = utility.period ? utility.period.id : null;
    const { id, selection, company, title, notes, reading } = utility;
    const updatedUtility = {
      id,
      selection,
      company,
      title,
      notes,
      reading,
      ...newUtility,
      utilityPeriodId,
    };

    return updatedUtility;
  }

  return newUtility;
};

export const handleFormatHome = (data, home = null) => {
  try {
    const newHome = {
      mortgage: data.payType ? data.payType : null,
      title: data.housingTitle ? data.housingTitle : null,
      notes: data.housingNotes ? data.housingNotes : null,
      homeAddressId: null,
    };

    if (home) {
      const homeAddressId = home.address ? home.address.id : null;
      const { id, mortgage, title, notes } = home;
      const updatedHome = {
        id,
        mortgage,
        title,
        notes,
        ...newHome,
        homeAddressId,
      };

      return updatedHome;
    }

    return newHome;
  } catch (error) {
    console.error("handle format home", error);
  }
};
export const handleFormatRepair = (data, repair = null) => {
  try {
    const newRepair = {
      title: data.housingTitle ? data.housingTitle : null,
      notes: data.housingNotes ? data.housingNotes : null,
    };

    if (repair) {
      const { id, title, notes } = repair;
      const updatedRepair = {
        id,
        title,
        notes,
        ...newRepair,
      };

      return updatedRepair;
    }
    return newRepair;
  } catch (error) {
    console.error("handle format repair", error);
  }
};
export const handleFormatSupply = (data, supply = null) => {
  try {
    const newSupply = {
      supplyFor: data.supplyFor ? data.supplyFor : null,
      title: data.housingTitle ? data.housingTitle : null,
      notes: data.housingNotes ? data.housingNotes : null,
      brand: data.brand ? data.brand : null,
      model: data.model ? data.model : null,
    };

    if (supply) {
      const { id, supplyFor, title, notes, brand, model } = supply;
      const updatedSupply = {
        id,
        supplyFor,
        title,
        notes,
        brand,
        model,
        ...newSupply,
      };

      return updatedSupply;
    }
    return newSupply;
  } catch (error) {
    console.error("handle format supply", error);
  }
};

export const handleFormatOtherHousings = (data, otherHousing = null) => {
  try {
    const newOtherHousing = {
      title: data.housingTitle ? data.housingTitle : null,
      notes: data.housingNotes ? data.housingNotes : null,
    };

    if (otherHousing) {
      const { id, title, notes } = otherHousing;
      const updatedotherHousing = {
        id,
        title,
        notes,
        ...newOtherHousing,
      };

      return updatedotherHousing;
    }
    return newOtherHousing;
  } catch (error) {
    console.error("handle format otherHousing", error);
  }
};

const housingAsEnum = asEnumeration({
  UTILITY: {
    name: "utility",
    idName: "housingExpenseUtilityId",
    format: handleFormatUtility,
    create: handleCreateUtility,
    delete: handleDeleteUtility,
    update: handleUpdateUtility,
    list: handleListUtility,
    get: handleGetUtility,
  },
  SUPPLY: {
    name: "supply",
    idName: "housingExpenseSupplyId",
    format: handleFormatSupply,
    create: handleCreateSupply,
    delete: handleDeleteSupply,
    update: handleUpdateSupply,
    list: handleListSupply,
    get: handleGetSupply,
  },
  REPAIR: {
    name: "repair",
    idName: "housingExpenseRepairId",
    format: handleFormatRepair,
    create: handleCreateRepair,
    delete: handleDeleteRepair,
    update: handleUpdateRepair,
    list: handleListRepair,
    get: handleGetRepair,
  },
  HOME: {
    name: "home",
    idName: "housingExpenseHomeId",
    format: handleFormatHome,
    create: handleCreateHome,
    delete: handleDeleteHome,
    update: handleUpdateHome,
    list: handleListHome,
    get: handleGetHome,
  },
  OTHER: {
    name: "otherHousing",
    idName: "housingExpenseOtherHousingId",
    format: handleFormatOtherHousings,
    create: handleCreateOtherHousings,
    delete: handleDeleteOtherHousings,
    update: handleUpdateOtherHousings,
    list: handleListOtherHousings,
    get: handleGetOtherHousings,
  },
});

export const handleCreateHousing = async (data, clientId = null) => {
  //expense cames from state, data comes from form

  try {
    const id = await housingAsEnum.fromValue(data.nature).create(data);

    //have to add tags but it should be IA agregated, lambda function ??
    const newHousing = {
      kind: "PERSONAL",
      amount: data.amount ? Number(data.amount) : null,
      category: data.personal ? data.personal : null,
      dueDate: data.dueDate ? dayjs(data.dueDate).format("YYYY-MM-DD") : null,
      nature: data.nature ? data.nature : null,
      [housingAsEnum.fromValue(data.nature).idName]: id,
      housingExpenseClientId: clientId,
    };

    const result = await API.graphql(
      graphqlOperation(createHousingExpense, { input: { ...newHousing } })
    );

    return result.data.createHousingExpense;
  } catch (error) {
    console.error("handle create housing", error);
  }
};

export const handleDeleteHousing = async (expense) => {
  try {
    const { id } = expense;

    //TODO check the function call must pass an expense
    await housingAsEnum
      .fromValue(expense.nature)
      .delete(expense[housingAsEnum.fromValue(expense.nature).name]);

    const result = API.graphql(
      graphqlOperation(deleteHousingExpense, { input: { id } })
    );
    return result.data.deleteHousingExpense;
  } catch (error) {
    console.error("handle delete housing expense", error);
  }
};

export const handleUpdateHousing = async (data, expense) => {
  try {
    //Asumes that allwys the part will exist expense[housingAsEnum.fromValue(data.nature).name] === true
    //and the expense has a [housingAsEnum.fromValue(data.nature).idName] and a clientId
    //must add tags fields by AI
    //expense should have an id
    await housingAsEnum
      .fromValue(data.nature)
      .update(data, expense[housingAsEnum.fromValue(data.nature).name]);

    //kind should be added?? Also amount, category, dueDate, nature; think that they will be already
    //in the form

    //Decide what fields should not be allowed to update, disabled..
    const { id } = expense;

    const expenseToUpdate = {
      id,
      amount: data.amount ? Number(data.amount) : null,
      category: data.personal ? data.personal : null,
      dueDate: data.dueDate ? dayjs(data.dueDate).format("YYYY-MM-DD") : null,
      nature: data.nature ? data.nature : null,
    };

    const result = await API.graphql(
      graphqlOperation(updateHousingExpense, {
        input: { ...expenseToUpdate },
      })
    );

    return result.data.updateHousingExpense;
  } catch (error) {
    console.error("handle update housing", error);
  }
};

export const handleGetHousing = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getHousingExpense, { input: { id } })
    );
    return result.data.getHousingExpense;
  } catch (error) {
    console.error("handle get housing expense", error);
  }
};

export const handleListHousing = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listHousingExpenses, { input: {} })
    );
    return result.data.listHousingExpenses.items;
  } catch (error) {
    console.error("handle list housing expense", error);
  }
};
