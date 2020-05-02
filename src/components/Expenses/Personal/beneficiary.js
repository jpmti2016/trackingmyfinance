import { API, graphqlOperation } from "aws-amplify";

import {
  includeObjectProps,
  replacePropEmptyString,
} from "../../helpers/utilities";

import {
  createBeneficiary,
  updateBeneficiary,
  deleteBeneficiary,
} from "../../../graphql/mutations";

import { getBeneficiary, listBeneficiarys } from "../../../graphql/queries";
import {
  handleDeleteAddress,
  handleFormatAddress,
  handleCreateAddress,
  handleUpdateAddress,
} from "./address";

export const handleCreateBeneficiary = async (data, expensePart) => {
  try {
    // const beneficiaryInsuranceId = expensePart.expenseId;
    let beneficiaryAddressId = null;
    const addressFormated = handleFormatAddress(data);
    const addressFormatedValues = Object.values(addressFormated);
    const notNull = (x) => x; //null should return as false

    //At least one field has value, all empty don't atempt to create the address
    if (addressFormatedValues.some(notNull)) {
      beneficiaryAddressId = await handleCreateAddress(addressFormated);
    }

    const beneficiaryPreFormated = handleFormatBeneficiary(data, expensePart);

    const beneficiaryFormated = {
      ...beneficiaryPreFormated,
      beneficiaryAddressId,
    };

    const result = await API.graphql(
      graphqlOperation(createBeneficiary, { input: { ...beneficiaryFormated } })
    );

    return result.data.createBeneficiary;
  } catch (error) {
    console.error("handle create beneficiary", error);
  }
};

export const handleDeleteBeneficiary = async (expensePart) => {
  try {
    const { id } = expensePart;

    if (expensePart.address) {
      await handleDeleteAddress(expensePart.address.id);
    }

    const result = await API.graphql(
      graphqlOperation(deleteBeneficiary, { input: { id } })
    );

    return result.data.deleteBeneficiary.id;
  } catch (error) {
    console.error("handle delete beneficiary", error);
  }
};

export const handleUpdateBeneficiary = async (data, expensePart) => {
  try {
    const beneficiaryPreFormated = handleFormatBeneficiary(data, expensePart);
    let { beneficiaryAddressId } = beneficiaryPreFormated;

    const addressFormated = handleFormatAddress(data);
    const addressFormatedValues = Object.values(addressFormated);
    const notNull = (x) => x; //null should return as false

    if (addressFormatedValues.some(notNull)) {
      if (beneficiaryAddressId) {
        await handleUpdateAddress({
          ...addressFormated,
          id: beneficiaryAddressId,
        });
      } else {
        beneficiaryAddressId = await handleCreateAddress({
          ...addressFormated,
        });
      }
    }

    const beneficiaryFormated = {
      ...beneficiaryPreFormated,
      beneficiaryAddressId,
    };

    const result = await API.graphql(
      graphqlOperation(updateBeneficiary, { input: { ...beneficiaryFormated } })
    );

    return result.data.updateBeneficiary;
  } catch (error) {
    console.error("handle update beneficiary", error);
  }
};

export const handleFormatBeneficiary = (data, expensePart) => {
  try {
    const beneficiaryStructure = {
      ...includeObjectProps(data, ["name", "lastName"]),
    };

    const newBeneficiary = {
      ...replacePropEmptyString(beneficiaryStructure),
      beneficiaryAddressId: null,
      beneficiaryInsuranceId: expensePart ? expensePart.expenseId : null,
    };

    if (expensePart) {
      const beneficiaryAddressId = expensePart.address
        ? expensePart.address.id
        : null;

      const updatedBeneficiary = {
        ...includeObjectProps(expensePart, ["id", "name", "lastName"]),
        ...newBeneficiary,
        beneficiaryAddressId,
      };

      return updatedBeneficiary;
    }

    return newBeneficiary;
  } catch (error) {
    console.error("handle format beneficiary", error);
  }
};

export const handleListBeneficiary = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(listBeneficiarys, { input: {} })
    );

    return result.data.listBeneficiarys.items;
  } catch (error) {
    console.error("handle list beneficiary", error);
  }
};

export const handleGetBeneficiary = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getBeneficiary, { input: { id } })
    );

    return result.data.getBeneficiary;
  } catch (error) {
    console.error("handle get beneficiary", error);
  }
};
