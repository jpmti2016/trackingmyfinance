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
    //"academicFeePeriodId"
    idName: (nature) =>
      nature === "COLLEGE"
        ? "academicFeeCollegeId"
        : "academicFeeCommunityCollegeId",
    initializeForm: "TODO",
    format: "TODO",
    create: "TODO",
    delete: "TODO",
    update: "TODO",
    list: "TODO",
    get: "TODO",
  },
  INSTRUCTOR: {
    idName: "instructorTeachOnId",
    initializeForm: "TODO",
    format: "TODO",
    create: "TODO",
    delete: "TODO",
    update: "TODO",
    list: "TODO",
    get: "TODO",
  },
});
