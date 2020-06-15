import { API, graphqlOperation } from "aws-amplify";
import dayjs from "dayjs";

import {
  includeObjectProps,
  omitObjectProps,
  replacePropEmptyString,
} from "../../helpers/utilities";

import {
  createLegalExpense,
  deleteLegalExpense,
  updateLegalExpense,
} from "../../../graphql/mutations";
import { getLegalExpense, listLegalExpenses } from "../../../graphql/queries";

export const handleFormatLegal = (data, expense, clientId) => {
  try {
    const legalStructure = {
      kind: "PERSONAL",
      amount: data.amount ? Number(data.amount) : null,
      category: data.personal ? data.personal : null,
      dueDate: data.dueDate
        ? dayjs(data.dueDate).format("YYYY-MM-DDThh:mmZ")
        : null,
      ...includeObjectProps(data, ["nature", "title", "notes"]),
    };
    const newLegal = {
      ...replacePropEmptyString(legalStructure),
      legalExpenseClientId: clientId,
    };

    if (expense) {
      const updatedLegal = {
        ...includeObjectProps(expense, [
          "id",
          "kind",
          "amount",
          "category",
          "dueDate",
          "nature",
          "title",
          "notes",
        ]),
        ...omitObjectProps(newLegal, ["legalExpenseClientId"]),
      };

      return updatedLegal;
    }

    return newLegal;
  } catch (error) {
    console.error("handle format legal", error);
  }
};

export const handleCreateLegal = async (data, clientId = null) => {
  //expense cames from state, data comes from form

  try {
    //have to add tags but it should be IA agregated, lambda function ??
    const legalFormatted = handleFormatLegal(data, null, clientId);
    const result = await API.graphql(
      graphqlOperation(createLegalExpense, { input: { ...legalFormatted } })
    );

    return result.data.createLegalExpense;
  } catch (error) {
    console.error("handle create legal", error);
  }
};

export const handleUpdateLegal = async (data, expense) => {
  //must add tags fields by AI
  //expense should have an id
  try {
    const legalFormatted = handleFormatLegal(data, expense, null);

    const result = await API.graphql(
      graphqlOperation(updateLegalExpense, { input: { ...legalFormatted } })
    );

    return result.data.updateLegalExpense;
  } catch (error) {
    console.error("handle update legal", error);
  }
};

export const handleDeleteLegal = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(deleteLegalExpense, { input: { id } })
    );

    return result.data.deleteLegalExpense;
  } catch (error) {
    console.error("handle delete legal", error);
  }
};

export const handleGetLegal = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getLegalExpense, { input: { id } })
    );

    return result.data.getLegalExpense;
  } catch (error) {
    console.error("handle get legal expense", error);
  }
};

export const handleListLegal = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listLegalExpenses, { input: {} })
    );

    return result.data.listLegalExpenses.items;
  } catch (error) {
    console.error("handle list legal", error);
  }
};
