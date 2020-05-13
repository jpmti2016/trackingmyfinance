import { asEnumeration } from "../../helpers/utilities";

import {
  handleCreateHousing,
  handleDeleteHousing,
  handleUpdateHousing,
  handleGetHousing,
  handleListHousing,
} from "./housing";

import {
  handleCreatePhoneExpense,
  handleDeletePhoneExpense,
  handleUpdatePhoneExpense,
  handleGetPhoneExpense,
  handleListPhoneExpense,
} from "./phone";

import {
  handleCreateLegal,
  handleDeleteLegal,
  handleUpdateLegal,
  handleGetLegal,
  handleListLegal,
} from "./legal";

import {
  handleCreateInsurance,
  handleUpdateInsurance,
  handleDeleteInsurance,
  handleFormatInsurance,
  handleGetInsurance,
  handleListInsurance,
} from "./insurance";
import {
  handleFormatFood,
  handleCreateFood,
  handleUpdateFood,
  handleDeleteFood,
  handleListFood,
  handleGetFood,
} from "./food";

import {
  handleFormatCommute,
  handleCreateCommute,
  handleUpdateCommute,
  handleDeleteCommute,
  handleGetCommute,
  handleListCommute,
} from "./commute";

import {
  handleFormatEducation,
  handleCreateEducation,
  handleUpdateEducation,
  handleDeleteEducation,
  handleListEducation,
  handleGetEducation,
} from "./education";

export const categoryEnum = Object.freeze({
  housing: "HOUSING",
  phone: "PHONE",
  insurance: "INSURANCE",
  legal: "LEGAL",
  food: "FOOD",
  commute: "COMMUTE",
  education: "EDUCATION",
  personalcare: "PERSONALCARE",
  pet: "PET",
  entertainment: "ENTERTAINMENT",
  loan: "LOAN",
  taxes: "TAXES",
  investement: "INVESTMENT",
});

const formatPhone = (expense) => {
  return expense;
};

const initializeHousing = (expense) => {
  return expense;
};

const initializePhone = (expense) => {
  return expense;
};

const formatLegal = (expense) => {
  return expense;
};

const formatPersonalCare = (expense) => {
  return expense;
};

const formatEntertainment = (expense) => {
  return expense;
};

const formatLoan = (expense) => {
  return expense;
};

const formatPet = (expense) => {
  return expense;
};

const formatTaxes = (expense) => {
  return expense;
};

const formatInvestment = (expense) => {
  return expense;
};

export const categoryAsEnum = asEnumeration({
  HOUSING: {
    idName: "housingExpenseClientId",
    initializeForm: initializeHousing,
    create: handleCreateHousing,
    delete: handleDeleteHousing,
    update: handleUpdateHousing,
    list: handleListHousing,
    get: handleGetHousing,
  },
  PHONE: {
    idName: "phoneExpenseClientId",
    format: formatPhone,
    initializeForm: initializePhone,
    create: handleCreatePhoneExpense,
    delete: handleDeletePhoneExpense,
    update: handleUpdatePhoneExpense,
    list: handleListPhoneExpense,
    get: handleGetPhoneExpense,
  },
  INSURANCE: {
    idName: "insuranceExpenseClientId",
    format: handleFormatInsurance,
    create: handleCreateInsurance,
    update: handleUpdateInsurance,
    delete: handleDeleteInsurance,
    list: handleListInsurance,
    get: handleGetInsurance,
  },
  LEGAL: {
    idName: "legalExpenseClientId",
    format: formatLegal,
    create: handleCreateLegal,
    delete: handleDeleteLegal,
    update: handleUpdateLegal,
    list: handleListLegal,
    get: handleGetLegal,
  },
  FOOD: {
    idName: "legalExpenseClientId",
    format: handleFormatFood,
    create: handleCreateFood,
    update: handleUpdateFood,
    delete: handleDeleteFood,
    list: handleListFood,
    get: handleGetFood,
  },
  COMMUTE: {
    idName: "commuteExpenseClientId",
    format: handleFormatCommute,
    create: handleCreateCommute,
    update: handleUpdateCommute,
    delete: handleDeleteCommute,
    list: handleListCommute,
    get: handleGetCommute,
  },
  EDUCATION: {
    idName: "educationExpenseClientId",
    format: handleFormatEducation,
    create: handleCreateEducation,
    update: handleUpdateEducation,
    delete: handleDeleteEducation,
    list: handleListEducation,
    get: handleGetEducation,
  },
  PERSONALCARE: {
    idName: "personalCareExpenseClientId",
    format: formatPersonalCare,
  },
  PET: {
    idName: "petExpenseClientId",
    format: formatPet,
  },
  ENTERTAINMENT: {
    idName: "entertainmentExpenseClientId",
    format: formatEntertainment,
  },
  LOAN: {
    idName: "loanExpenseClientId",
    format: formatLoan,
  },
  TAXES: {
    idName: "taxExpenseClientId",
    format: formatTaxes,
  },
  INVESTMENT: {
    idName: "investmentExpenseClientId",
    format: formatInvestment,
  },
});

// const format = categoryAsEnum
//   .fromValue(categoryEnum.housing)
//   .format("formating");

// console.log("format", format);
