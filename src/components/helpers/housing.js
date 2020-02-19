import { API, graphqlOperation } from "aws-amplify";
import dayjs from "dayjs";

import { asEnumeration, categoryAsEnum } from "./noswitch";

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
  createHousingExpense,
  updateHousingExpense,
  deleteHousingExpense
} from "../../graphql/mutations";
import {
  getRepair,
  listRepairs,
  getHome,
  listHomes
} from "../../graphql/queries";

import {
  handleCreatePeriod,
  handleUpdatePeriod,
  handleDeletePeriod
} from "./period";

import {
  handleCreateAddress,
  handleDeleteAddress,
  handleUpdateAddress
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

export const handleCreateRepair = async data => {
  try {
    const repairFormated = housingAsEnum.fromValue("REPAIR").format(data);

    const result = await API.graphql(
      graphqlOperation(createRepair, { input: { ...repairFormated } })
    );
    return result.data.createRepair.id;
  } catch (error) {
    console.log("handle create repair", error);
  }
};

export const handleDeleteRepair = async id => {
  try {
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

//housing home
export const handleCreateHome = async home => {
  try {
    const result = await API.graphql(
      graphqlOperation(createHome, { input: { ...home } })
    );
    return result.data.createHome.id;
  } catch (error) {
    console.log("handle create repair", error);
  }
};

export const handleDeleteHome = async id => {};

export const handleUpdateHome = async home => {
  //Home should contains the Home id from expense state --expense.Home.id
  try {
    const result = await API.grapql(
      graphqlOperation(updateHome, { input: { ...home } })
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

//housing utility
export const handleCreateUtility = async data => {
  try {
    let utilityPeriodId = null;
    if (data.housingBillingStart !== "" && data.housingBillingEnd !== "") {
      utilityPeriodId = await handleCreatePeriod({
        billingStart: dayjs(data.housingBillingStart).format("YYYY-MM-DD"),
        billingEnd: dayjs(data.housingBillingEnd).format("YYYY-MM-DD")
      });
    }
    //TODO check if I should pass {} or null
    const utilityPreFormated = housingAsEnum.fromValue("UTILITY").format(data);
    const formatedUtility = { ...utilityPreFormated, utilityPeriodId };

    const result = await API.graphql(
      graphqlOperation(createUtility, { input: { ...formatedUtility } })
    );

    console.log("handle create utility result", result);

    return result.data.createUtility.id;
  } catch (error) {
    console.error("handle create utility", error);
  }
};

//Deleted compounded intances return all of it prts ids
export const handleDeleteUtility = async (id, periodId = null) => {
  try {
    if (periodId) {
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
          billingEnd: dayjs(data.housingBillingEnd).format("YYYY-MM-DD")
        });
      } else {
        utilityPeriodId = await handleCreatePeriod({
          billingStart: dayjs(data.housingBillingStart).format("YYYY-MM-DD"),
          billingEnd: dayjs(data.housingBillingEnd).format("YYYY-MM-DD")
        });
      }
    }

    const utilityFormated = { ...utilityPreFormated, utilityPeriodId };

    const result = await API.graphql(
      graphqlOperation(updateUtility, { input: { ...utilityFormated } })
    );

    console.log("utility updated", result.data.updateUtility);

    return result.data.updateUtility.id;
  } catch (error) {
    console.error("handle update utility", error);
  }
};

//housing supply
export const handleCreateSupply = async (data, supply = null) => {};

export const handleDeleteSupply = async id => {};

export const handleUpdateSupply = async (data, supply = null) => {};

//housing other
export const handleCreateOther = async otherHousing => {};

export const handleDeleteOther = async id => {};

export const handleUpdateOther = async (data, otherHousing) => {};

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
    reading: data.housingReading ? Number(data.housingReading) : null
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
      utilityPeriodId
    };

    console.log("handle format utility", updatedUtility);
    return updatedUtility;
  }

  return newUtility;
};

export const handleFormatHome = (data, home = null) => {
  try {
    const newHome = {
      mortgage: data.mortgage ? data.mortgage : null,
      title: data.housingTitle ? data.housingTitle : null,
      notes: data.housingNotes ? data.housingNotes : null,
      homeAddressId: null
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
        homeAddressId
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
      notes: data.housingNotes ? data.housingNotes : null
    };

    if (repair) {
      const { id, title, notes } = repair;
      const updatedRepair = {
        id,
        title,
        notes,
        ...newRepair
      };

      return updatedRepair;
    }
    return newRepair;
  } catch (error) {
    console.log("handle format repair", error);
  }
};
export const handleFormatSupply = (data, supply = null) => {
  try {
    const newSupply = {
      supplyFor: data.supplyFor ? data.supplyFor : null,
      title: data.housingTitle ? data.housingTitle : null,
      notes: data.housingNotes ? data.housingNotes : null,
      brand: data.brand ? data.brand : null,
      model: data.model ? data.model : null
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
        ...newSupply
      };

      return updatedSupply;
    }
    return newSupply;
  } catch (error) {
    console.log("handle format supply", error);
  }
};

export const handleFormatOther = (data, otherHousing = null) => {
  try {
    const newOtherHousing = {
      title: data.housingTitle ? data.housingTitle : null,
      notes: data.housingNotes ? data.housingNotes : null
    };

    if (otherHousing) {
      const { id, title, notes } = otherHousing;
      const updatedotherHousing = {
        id,
        title,
        notes,
        ...newOtherHousing
      };

      return updatedotherHousing;
    }
    return newOtherHousing;
  } catch (error) {
    console.log("handle format otherHousing", error);
  }
};

const housingAsEnum = asEnumeration({
  UTILITY: {
    name: "utility",
    idName: "housingExpenseUtilityId",
    format: handleFormatUtility,
    create: handleCreateUtility,
    delete: handleDeleteUtility,
    update: handleUpdateUtility
  },
  SUPPLY: {
    name: "supply",
    idName: "housingExpenseSupplyId",
    format: handleFormatSupply,
    create: handleCreateSupply,
    delete: handleDeleteSupply,
    update: handleUpdateSupply
  },
  REPAIR: {
    name: "repair",
    idName: "housingExpenseRepairId",
    create: handleCreateRepair,
    delete: handleDeleteRepair,
    update: handleUpdateRepair,
    list: handleListRepair,
    format: handleFormatRepair
  },
  HOME: {
    name: "home",
    idName: "housingExpenseHomeId",
    format: handleFormatHome,
    create: handleCreateHome,
    delete: handleDeleteHome,
    update: handleUpdateHome
  },
  OTHER: {
    name: "otherHousing",
    idName: "housingExpenseOtherHousingId",
    format: handleFormatOther,
    create: handleCreateOther,
    delete: handleDeleteOther,
    update: handleUpdateOther
  }
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
      housingExpenseClientId: clientId
    };

    const result = await API.graphql(
      graphqlOperation(createHousingExpense, { input: { ...newHousing } })
    );

    return result.data.createHousingExpense;
  } catch (error) {
    console.error("handle create housing", error);
  }
};

export const handleDeleteHousing = id => {
  try {
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
    const { id } = expense;

    const expenseToUpdate = {
      id,
      amount: data.amount ? Number(data.amount) : null,
      category: data.personal ? data.personal : null,
      dueDate: data.dueDate ? dayjs(data.dueDate).format("YYYY-MM-DD") : null,
      nature: data.nature ? data.nature : null
    };

    const result = await API.graphql(
      graphqlOperation(updateHousingExpense, {
        input: { ...expenseToUpdate }
      })
    );

    console.log("expense updated", result.data.updateHousingExpense);

    return result.data.updateHousingExpense;
  } catch (error) {
    console.error("handle update housing", error);
  }
};
