import { API, graphqlOperation } from "aws-amplify";
import dayjs from "dayjs";

import {
  includeObjectProps,
  omitObjectProps,
  replacePropEmptyString,
} from "../../helpers/utilities";

import {
  createPetExpense,
  deletePetExpense,
  updatePetExpense,
} from "../../../graphql/mutations";

import { getPetExpense, listPetExpenses } from "../../../graphql/queries";

export const handleFormatPet = (data, expense, clientId = null) => {
  try {
    // must add tags fields by AI
    // expense should have an id
    // some fields are not included in the array cause
    // need special treatment or it's  name in the form not match
    // the the name on the entity

    const petStructure = {
      kind: "PERSONAL",
      amount: data.amount ? Number(data.amount) : null,
      dueDate: data.dueDate
        ? dayjs(data.dueDate).format("YYYY-MM-DDTHH:mmZ")
        : null,
      category: data.personal ? data.personal : null,
      ...includeObjectProps(data, ["nature", "title", "notes"]),
    };

    const newPet = {
      ...replacePropEmptyString(petStructure),
      petExpenseClientId: clientId,
    };

    if (expense) {
      const updatedPet = {
        ...includeObjectProps(expense, [
          "id",
          "amount",
          "dueDate",
          "category",
          "nature",
          "title",
          "notes",
        ]),
        ...omitObjectProps(newPet, ["petExpenseClientId"]),
      };

      return updatedPet;
    }

    return newPet;
  } catch (error) {
    console.error("handle format pet expense", error);
  }
};

export const handleCreatePet = async (data, clientId) => {
  try {
    const petFormatted = handleFormatPet(data, null, clientId);

    const result = await API.graphql(
      graphqlOperation(createPetExpense, { input: { ...petFormatted } })
    );

    return result.data.createPetExpense;
  } catch (error) {
    console.error("handle create pet", error);
  }
};

export const handleUpdatePet = async (data, expense) => {
  try {
    const petFormatted = handleFormatPet(data, expense, null);

    const result = await API.graphql(
      graphqlOperation(updatePetExpense, { input: { ...petFormatted } })
    );

    return result.data.updatePetExpense;
  } catch (error) {
    console.error("handle update pet", error);
  }
};

export const handleDeletePet = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(deletePetExpense, { input: { id } })
    );
    return result.data.deletePetExpense;
  } catch (error) {
    console.error("handle delete pet", error);
  }
};

export const handleListPet = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listPetExpenses, { input: {} })
    );
    return result.data.listPetExpenses.items;
  } catch (error) {
    console.error("handle list pet", error);
  }
};

export const handleGetPet = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getPetExpense, { input: { id } })
    );
    return result.data.getPetExpense;
  } catch (error) {
    console.error("handle get pet", error);
  }
};
