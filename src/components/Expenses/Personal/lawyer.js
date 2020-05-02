import { API, graphqlOperation } from "aws-amplify";
import dayjs from "dayjs";

import {
  includeObjectProps,
  replacePropEmptyString,
} from "../../helpers/utilities";

import {
  createLawyer,
  updateLawyer,
  deleteLawyer,
} from "../../../graphql/mutations";

import { getLawyer, listLawyers } from "../../../graphql/queries";

import {
  handleCreateAddress,
  handleDeleteAddress,
  handleUpdateAddress,
  handleFormatAddress,
} from "./address";

//lawyer CRUD

export const handleCreateLawyer = async (data, expensePart) => {
  try {
    const lawyerLegalId = expensePart.expenseId;
    let lawyerAddressId = null;
    const addressFormated = handleFormatAddress(data);
    const addressFormatedValues = Object.values(addressFormated);
    const notNull = (x) => x; //null should return as false

    //At leat one field has value, all empty don't intend create the address
    if (addressFormatedValues.some(notNull)) {
      lawyerAddressId = await handleCreateAddress(addressFormated);
    }

    const lawyerPreFormated = handleFormatLawyer(data, expensePart);

    const lawyerFormated = {
      ...lawyerPreFormated,
      lawyerAddressId,
      lawyerLegalId,
    };

    const result = await API.graphql(
      graphqlOperation(createLawyer, { input: { ...lawyerFormated } })
    );

    return result.data.createLawyer;
  } catch (error) {
    console.error("handle create lawyer", error);
  }
};

export const handleDeleteLawyer = async (expensePart) => {
  try {
    const { id } = expensePart;

    if (expensePart.address) {
      await handleDeleteAddress(expensePart.address.id);
    }

    const result = await API.graphql(
      graphqlOperation(deleteLawyer, { input: { id } })
    );
    console.log("deleted lawyer", result.data.deleteLawyer.id);
    return result.data.deleteLawyer.id;
  } catch (error) {
    console.error("handle delete lawyer", error);
  }
};

export const handleUpdateLawyer = async (data, expensePart) => {
  try {
    const lawyerPreFormated = handleFormatLawyer(data, expensePart);
    let { lawyerAddressId } = lawyerPreFormated;

    const addressFormated = handleFormatAddress(data);

    const addressFormatedValues = Object.values(addressFormated);
    const notNull = (x) => x;

    if (addressFormatedValues.some(notNull)) {
      if (lawyerAddressId) {
        await handleUpdateAddress({ ...addressFormated, id: lawyerAddressId });
      } else {
        lawyerAddressId = await handleCreateAddress(addressFormated);
      }
    }

    const lawyerFormated = { ...lawyerPreFormated, lawyerAddressId };

    const result = await API.graphql(
      graphqlOperation(updateLawyer, { input: { ...lawyerFormated } })
    );

    console.log("updated lawyer", result.data.updateLawyer);

    return result.data.updateLawyer;
  } catch (error) {
    console.error("handle update lawyer", error);
  }
};

export const handleFormatLawyer = (data, expensePart) => {
  try {
    const lawyerStructure = {
      ...includeObjectProps(data, [
        "id",
        "fee",
        "name",
        "lastName",
        "phone",
        "email",
        "firm",
      ]),
    };

    console.log(" lawyer");

    const newLawyer = {
      ...replacePropEmptyString(lawyerStructure),
      lawyerAddressId: null,
      lawyerLegalId: expensePart ? expensePart.expenseId : null,
      id: expensePart.id,
    };

    if (expensePart) {
      const lawyerAddressId = expensePart.address
        ? expensePart.address.id
        : null;

      const updatedLawyer = {
        ...includeObjectProps(expensePart, [
          "id",
          "fee",
          "name",
          "lastName",
          "phone",
          "email",
          "firm",
        ]),
        ...newLawyer,
        lawyerAddressId,
      };

      return updatedLawyer;
    }

    return newLawyer;
  } catch (error) {
    console.error("handle format lawyer", error);
  }
};

export const handleListLawyer = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listLawyers, { input: {} })
    );

    return result.data.listLawyers.items;
  } catch (error) {
    console.error("handle list lawyer", error);
  }
};

export const handleGetLawyer = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getLawyer, { input: { id } })
    );

    return result.data.getLawyer;
  } catch (error) {
    console.error("handle get lawyer", error);
  }
};
