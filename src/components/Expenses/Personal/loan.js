import { API, graphqlOperation } from "aws-amplify";
import dayjs from "dayjs";

import {
  includeObjectProps,
  omitObjectProps,
  replacePropEmptyString,
} from "../../helpers/utilities";

import {
  createLoanExpense,
  updateLoanExpense,
  deleteLoanExpense,
} from "../../../graphql/mutations";

import { listLoanExpenses, getLoanExpense } from "../../../graphql/queries";

export const handleFormatLoan = (data, expense, clientId) => {
  try {
    // must add tags fields by AI
    // expense should have an id
    // some fields are not included in the array cause
    // need special treatment or it's  name in the form not match
    // the the name on the entity

    const loanCareStructure = {
      kind: "PERSONAL",
      amount: data.amount ? Number(data.amount) : null,
      dueDate: data.dueDate ? dayjs(data.dueDate).format("YYYY-MM-DD") : null,
      category: data.personal ? data.personal : null,
      ...includeObjectProps(data, ["nature", "title", "notes"]),
    };

    const newLoan = {
      ...replacePropEmptyString(loanCareStructure),
      loanExpenseClientId: clientId,
    };

    if (expense) {
      const updatedLoan = {
        ...includeObjectProps(expense, [
          "id",
          "amount",
          "dueDate",
          "category",
          "nature",
          "title",
          "notes",
        ]),
        ...omitObjectProps(newLoan, ["loanExpenseClientId"]),
      };

      return updatedLoan;
    }
    return newLoan;
  } catch (error) {
    console.error("handle format loan", error);
  }
};

export const handleCreateLoan = async (data, clientId) => {
  try {
    const loanFormatted = handleFormatLoan(data, null, clientId);
    const result = await API.graphql(
      graphqlOperation(createLoanExpense, { input: { ...loanFormatted } })
    );

    return result.data.createLoanExpense;
  } catch (error) {
    console.error("handle create loan", error);
  }
};

export const handleUpdateLoan = async (data, expense) => {
  try {
    const loanFormatted = handleFormatLoan(data, expense, null);

    const result = await API.graphql(
      graphqlOperation(updateLoanExpense, { input: { ...loanFormatted } })
    );

    return result.data.updateLoanExpense;
  } catch (error) {
    console.error("handle update loan", error);
  }
};

export const handleDeleteLoan = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(deleteLoanExpense, { input: id })
    );

    return result.data.deleteLoanExpense;
  } catch (error) {
    console.error("handle delete loan", error);
  }
};

export const handleListLoan = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listLoanExpenses, { input: {} })
    );
    return result.data.listLoanExpenses.items;
  } catch (error) {
    console.error("handle list loan", error);
  }
};

export const handleGetLoan = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getLoanExpense, { input: { id } })
    );
    return result.data.getLoanExpense;
  } catch (error) {
    console.error("handle get loan", error);
  }
};
