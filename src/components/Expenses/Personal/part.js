// Allow gruop the functionalities for manage expensePart and access to it
import { asEnumeration } from "../../helpers/utilities";
import {
  handleCreateLawyer,
  handleDeleteLawyer,
  handleUpdateLawyer,
  handleListLawyer,
  handleGetLawyer,
  handleFormatLawyer,
} from "./lawyer";

import {
  handleCreateProduct,
  handleDeleteProduct,
  handleUpdateProduct,
  handleListProduct,
  handleGetProduct,
  handleFormatProduct,
} from "./product";

import {
  handleCreateBeneficiary,
  handleDeleteBeneficiary,
  handleUpdateBeneficiary,
  handleFormatBeneficiary,
  handleGetBeneficiary,
  handleListBeneficiary,
} from "./beneficiary";

import {
  handleCreateInstructor,
  handleDeleteInstructor,
  handleUpdateInstructor,
  handleFormatInstructor,
  handleGetInstructor,
  handleListInstructor,
} from "./instructor";

import {
  handleCreateAcademicFee,
  handleDeleteAcademicFee,
  handleUpdateAcademicFee,
  handleFormatAcademicFee,
  handleGetAcademicFee,
  handleListAcademicFee,
} from "./academicFee";

export const partAsEnum = asEnumeration({
  LAWYER: {
    //"lawyerAddressId"
    idName: "lawyerLegalId",
    initializeForm: "TODO",
    format: handleFormatLawyer,
    create: handleCreateLawyer,
    delete: handleDeleteLawyer,
    update: handleUpdateLawyer,
    list: handleListLawyer,
    get: handleGetLawyer,
  },
  BENEFICIARY: {
    //"beneficiaryAddressId"
    idName: "beneficiaryInsuranceId",
    initializeForm: "TODO",
    format: handleFormatBeneficiary,
    create: handleCreateBeneficiary,
    delete: handleDeleteBeneficiary,
    update: handleUpdateBeneficiary,
    list: handleListBeneficiary,
    get: handleGetBeneficiary,
  },
  PRODUCT: {
    idName: "productGroceryId",
    initializeForm: "TODO",
    format: handleFormatProduct,
    create: handleCreateProduct,
    delete: handleDeleteProduct,
    update: handleUpdateProduct,
    list: handleListProduct,
    get: handleGetProduct,
  },
  ACADEMICFEE: {
    // "academicFeePeriodId"
    // I made an enum for handle the idName of COLLEGE and COMMUNITYCOLLEGE
    // idName: "handleIdNameNature"
    initializeForm: "TODO",
    format: handleFormatAcademicFee,
    create: handleCreateAcademicFee,
    delete: handleDeleteAcademicFee,
    update: handleUpdateAcademicFee,
    list: handleListAcademicFee,
    get: handleGetAcademicFee,
  },
  INSTRUCTOR: {
    idName: "instructorTeachOnId",
    initializeForm: "TODO",
    format: handleFormatInstructor,
    create: handleCreateInstructor,
    delete: handleDeleteInstructor,
    update: handleUpdateInstructor,
    list: handleListInstructor,
    get: handleGetInstructor,
  },
});
