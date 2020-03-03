import { asEnumeration } from "../../helpers/utilities";

import {
  handleCreateHousing,
  handleDeleteHousing,
  handleUpdateHousing,
  handleGetHousing,
  handleListHousing
} from "./housing";

import {
  handleCreatePhoneExpense,
  handleDeletePhoneExpense,
  handleUpdatePhoneExpense,
  handleGetPhoneExpense,
  handleListPhoneExpense
} from "./phone";

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
  investement: "INVESTMENT"
});

const formatPhone = expense => {
  return expense;
};

const formatInsurance = expense => {
  return expense;
};

const initializeHousing = expense => {
  return expense;
};

const initializePhone = expense => {
  return expense;
};

const formatLegal = expense => {
  return expense;
};
const formatFood = expense => {
  return expense;
};

const formatCommute = expense => {
  return expense;
};

const formatEducation = expense => {
  return expense;
};

const formatPersonalCare = expense => {
  return expense;
};

const formatEntertainment = expense => {
  return expense;
};

const formatLoan = expense => {
  return expense;
};

const formatPet = expense => {
  return expense;
};

const formatTaxes = expense => {
  return expense;
};

const formatInvestment = expense => {
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
    get: handleGetHousing
  },
  PHONE: {
    idName: "phoneExpenseClientId",
    format: formatPhone,
    initializeForm: initializePhone,
    create: handleCreatePhoneExpense,
    delete: handleDeletePhoneExpense,
    update: handleUpdatePhoneExpense,
    list: handleListPhoneExpense,
    get: handleGetPhoneExpense
  },
  INSURANCE: {
    idName: "insuranceExpenseClientId",
    format: formatInsurance
  },
  LEGAL: {
    idName: "legalExpenseClientId",
    format: formatLegal
  },
  FOOD: {
    idName: "legalExpenseClientId",
    format: formatFood
  },
  COMMUTE: {
    idName: "commuteExpenseClientId",
    format: formatCommute
  },
  EDUCATION: {
    idName: "educationExpenseClientId",
    format: formatEducation
  },
  PERSONALCARE: {
    idName: "personalCareExpenseClientId",
    format: formatPersonalCare
  },
  PET: {
    idName: "petExpenseClientId",
    format: formatPet
  },
  ENTERTAINMENT: {
    idName: "entertainmentExpenseClientId",
    format: formatEntertainment
  },
  LOAN: {
    idName: "loanExpenseClientId",
    format: formatLoan
  },
  TAXES: {
    idName: "taxExpenseClientId",
    format: formatTaxes
  },
  INVESTMENT: {
    idName: "investmentExpenseClientId",
    format: formatInvestment
  }
});

// const format = categoryAsEnum
//   .fromValue(categoryEnum.housing)
//   .format("formating");

// console.log("format", format);
