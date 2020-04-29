import { API, graphqlOperation } from "./aws-amplify";
import dayjs from "dayjs";

import {
  asEnumeration,
  replacePropEmptyString,
  includeObjectProps,
} from "../../helpers/utilities";

import {
  handleCreatePeriod,
  handleDeletePeriod,
  handleUpdatePeriod,
} from "./period";

import {
  createInsuranceExpense,
  deleteInsuranceExpense,
  updateInsuranceExpense,
  createBeneficiary,
  deleteBeneficiary,
  updateBeneficiary,
} from "../../../graphql/mutations";
import {
  getInsuranceExpense,
  listInsuranceExpenses,
  getBeneficiary,
  listBeneficiarys,
} from "../../../graphql/queries";

export const handleStructureBeneficiary = (data) => {
  try {
    const beneficiary = {
      name: data.name,
      lastName: data.lastName,
      beneficiaryAddressId: null,
      beneficiaryInsuranceId: null,
    };

    return beneficiary;
  } catch (error) {
    console.error("handle structure beneficiary", error);
  }
};

export const handleFormatBeneficiary = (data, beneficiary = null) => {
  try {
    const beneficiaryStructured = handleStructureBeneficiary(data);

    const newBeneficiaryFormated = replacePropEmptyString(
      beneficiaryStructured
    );

    if (beneficiary) {
      const beneficiaryAddressId = beneficiary.address
        ? beneficiary.address.id
        : null;
      const beneficiaryUpdatedFormated = {
        ...includeObjectProps(beneficiary, ["id", "name", "lastName"]),
        ...newBeneficiaryFormated,
        beneficiaryAddressId,
      };

      return beneficiaryUpdatedFormated;
    }
    return newBeneficiaryFormated;
  } catch (error) {
    console.error("handle format beneficiary", error);
  }
};
