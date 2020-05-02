import { API, graphqlOperation } from "aws-amplify";
import dayjs from "dayjs";

import { asEnumeration } from "../../helpers/utilities";

import {
  createLegalExpense,
  deleteLegalExpense,
  updateLegalExpense,
} from "../../../graphql/mutations";
import { getLegalExpense, listLegalExpenses } from "../../../graphql/queries";

export const handleCreateLegal = async (data, clientId = null) => {
  //expense cames from state, data comes from form

  try {
    //have to add tags but it should be IA agregated, lambda function ??
    const newLegal = {
      kind: "PERSONAL",
      amount: data.amount ? Number(data.amount) : null,
      category: data.personal ? data.personal : null,
      dueDate: data.dueDate ? dayjs(data.dueDate).format("YYYY-MM-DD") : null,
      nature: data.nature ? data.nature : null,
      title: data.title ? data.title : null,
      notes: data.notes ? data.notes : null,
      legalExpenseClientId: clientId,
    };

    const result = await API.graphql(
      graphqlOperation(createLegalExpense, { input: { ...newLegal } })
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
    const { id } = expense;

    const expenseToUpdate = {
      id,
      category: data.personal ? data.personal : null,
      nature: data.nature ? data.nature : null,
      dueDate: data.dueDate ? dayjs(data.dueDate).format("YYYY-MM-DD") : null,
      amount: data.amount ? Number(data.amount) : null,
      title: data.title ? data.title : null,
      notes: data.notes ? data.notes : null,
    };

    const result = await API.graphql(
      graphqlOperation(updateLegalExpense, { input: { ...expenseToUpdate } })
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
