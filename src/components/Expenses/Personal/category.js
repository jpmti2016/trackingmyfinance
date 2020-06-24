import { asEnumeration } from "../../helpers/utilities";

import {
  handleCreateHousing,
  handleDeleteHousing,
  handleUpdateHousing,
  handleGetHousing,
  handleListHousing,
} from "./housing";

import {
  handleFormatPhoneExpense,
  handleCreatePhoneExpense,
  handleDeletePhoneExpense,
  handleUpdatePhoneExpense,
  handleGetPhoneExpense,
  handleListPhoneExpense,
} from "./phone";

import {
  handleFormatLegal,
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

import {
  handleFormatPersonalCare,
  handleCreatePersonalCare,
  handleDeletePersonalCare,
  handleUpdatePersonalCare,
  handleGetPersonalCare,
  handleListPersonalCare,
} from "./personalCare";

import {
  handleFormatPet,
  handleCreatePet,
  handleUpdatePet,
  handleDeletePet,
  handleGetPet,
  handleListPet,
} from "./pet";

import {
  handleFormatEntertainment,
  handleCreateEntertainment,
  handleUpdateEntertainment,
  handleDeleteEntertainment,
  handleListEntertainment,
  handleGetEntertainment,
} from "./entertainment";

import {
  handleFormatLoan,
  handleCreateLoan,
  handleUpdateLoan,
  handleDeleteLoan,
  handleGetLoan,
  handleListLoan,
} from "./loan";

import {
  handleFormatTax,
  handleCreateTax,
  handleUpdateTax,
  handleDeleteTax,
  handleListTax,
  handleGetTax,
} from "./tax";

import {
  handleFormatInvestmentExpense,
  handleCreateInvestmentExpense,
  handleUpdateInvestmentExpense,
  handleDeleteInvestmentExpense,
  handleGetInvestmentExpense,
  handleListInvestmentExpense,
} from "./investment";

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

const initializeHousing = (expense) => {
  return expense;
};

const initializePhone = (expense) => {
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
    format: handleFormatPhoneExpense,
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
    format: handleFormatLegal,
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
    format: handleFormatPersonalCare,
    create: handleCreatePersonalCare,
    update: handleUpdatePersonalCare,
    delete: handleDeletePersonalCare,
    list: handleListPersonalCare,
    get: handleGetPersonalCare,
  },
  PET: {
    idName: "petExpenseClientId",
    format: handleFormatPet,
    create: handleCreatePet,
    update: handleUpdatePet,
    delete: handleDeletePet,
    list: handleListPet,
    get: handleGetPet,
  },
  ENTERTAINMENT: {
    idName: "entertainmentExpenseClientId",
    format: handleFormatEntertainment,
    create: handleCreateEntertainment,
    update: handleUpdateEntertainment,
    delete: handleDeleteEntertainment,
    list: handleListEntertainment,
    get: handleGetEntertainment,
  },
  LOAN: {
    idName: "loanExpenseClientId",
    format: handleFormatLoan,
    create: handleCreateLoan,
    update: handleUpdateLoan,
    delete: handleDeleteLoan,
    list: handleListLoan,
    get: handleGetLoan,
  },
  TAXES: {
    idName: "taxExpenseClientId",
    format: handleFormatTax,
    create: handleCreateTax,
    update: handleUpdateTax,
    delete: handleDeleteTax,
    list: handleListTax,
    get: handleGetTax,
  },
  INVESTMENT: {
    idName: "investmentExpenseClientId",
    format: handleFormatInvestmentExpense,
    create: handleCreateInvestmentExpense,
    update: handleUpdateInvestmentExpense,
    delete: handleDeleteInvestmentExpense,
    list: handleListInvestmentExpense,
    get: handleGetInvestmentExpense,
  },
});
