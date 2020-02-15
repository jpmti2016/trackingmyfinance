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

export const handleCreateRepair = async repair => {
  try {
    const result = await API.graphql(
      graphqlOperation(createRepair, { input: { ...repair } })
    );
    return result.data.createRepair.id;
  } catch (error) {
    console.log("handle create repair", error);
  }
};

export const handleDeleteRepair = async id => {};

export const handleUpdateRepair = async repair => {
  //repair should contains the repair id from expense state --expense.repair.id
  try {
    const result = await API.grapql(
      graphqlOperation(updateRepair, { input: { ...repair } })
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
    let periodDeletedId = null;
    if (periodId) {
      periodDeletedId = await handleDeletePeriod(periodId);
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

    return result.data.updateUtility.id;
  } catch (error) {
    console.error("handle update utility", error);
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
    notes: data.housingNotes ? data.housingTitle : null,
    utilityPeriodId: null,
    reading: data.housingReading ? Number(data.housingReading) : null
  };

  if (utility) {
    const utilityPeriodId = utility.period ? utility.period.id : null;
    const { selection, company, title, notes, reading } = utility;
    const updatedUtility = {
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

export const handleFormatRepair = () => {};

const housingAsEnum = asEnumeration({
  UTILITY: {
    idName: "housingExpenseUtilityId",
    format: handleFormatUtility,
    create: handleCreateUtility,
    delete: handleDeleteUtility,
    update: handleUpdateUtility
  },
  SUPPLY: {
    idName: "housingExpenseSupplyId"
  },
  REPAIR: {
    idName: "housingExpenseRepairId",
    create: handleCreateRepair,
    delete: handleDeleteRepair,
    update: handleUpdateRepair,
    list: handleListRepair,
    format: handleFormatRepair
  },
  HOME: {
    idName: "housingExpenseHomeId"
  },
  OTHER: {
    idName: "housingExpenseOtherHousingId"
  }
});

export const handleCreateHousing = async (data, clientId = null) => {
  //expense cames from state, data comes from form

  try {
    const id = await housingAsEnum.fromValue(data.nature).create(data);
    console.log("utility id", id);
    console.log("utility name", housingAsEnum.fromValue(data.nature).idName);
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

    console.log("handle create housing result", result);
    return result.data.createHousingExpense.id;
  } catch (error) {
    console.error("handle create housing", error);
  }
};

export const handleDeleteHousing = id => {
  return `deleted ${id}`;
};

export const handleUpdateHousing = expense => {
  return `updated ${expense}`;
};
