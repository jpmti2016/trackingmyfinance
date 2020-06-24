import { API, graphqlOperation } from "aws-amplify";
import dayjs from "dayjs";

import {
  includeObjectProps,
  omitObjectProps,
  replacePropEmptyString,
} from "../../helpers/utilities";

import {
  createInvestmentExpense,
  updateInvestmentExpense,
  deleteInvestmentExpense,
} from "../../../graphql/mutations";

import {
  getInvestmentExpense,
  listInvestmentExpenses,
} from "../../../graphql/queries";

export const handleFormatInvestmentExpense = (data, expense, clientId) => {
  try {
    // must add tags fields by AI
    // expense should have an id
    // some fields are not included in the array cause
    // need special treatment or it's  name in the form not match
    // the the name on the entity

    const investmentExpenseStructure = {
      kind: "PERSONAL",
      amount: data.amount ? Number(data.amount) : 0,
      account: data.investment ? data.investment : null,
      dueDate: data.dueDate
        ? dayjs(data.dueDate).format("YYYY-MM-DDTHH:mmZ")
        : null,
      category: data.personal ? data.personal : null,
      ...includeObjectProps(data, ["title", "notes"]),
    };

    const newInvestmentExpense = {
      ...replacePropEmptyString(investmentExpenseStructure),
      investmentExpenseClientId: clientId,
    };

    if (expense) {
      const updatedInvestmentExpense = {
        ...includeObjectProps(expense, [
          "id",
          "kind",
          "amount",
          "account",
          "dueDate",
          "category",
          "title",
          "notes",
        ]),
        ...omitObjectProps(newInvestmentExpense, ["investmentExpenseClientId"]),
      };

      return updatedInvestmentExpense;
    }

    return newInvestmentExpense;
  } catch (error) {
    console.error("handle format investment expense", error);
  }
};

export const handleCreateInvestmentExpense = async (data, clientId) => {
  try {
    const investmentExpenseFormatted = handleFormatInvestmentExpense(
      data,
      null,
      clientId
    );

    const result = await API.graphql(
      graphqlOperation(createInvestmentExpense, {
        input: { ...investmentExpenseFormatted },
      })
    );

    return result.data.createInvestmentExpense;
  } catch (error) {
    console.error("handle create investment expense", error);
  }
};

export const handleUpdateInvestmentExpense = async (data, expense) => {
  try {
    const investmentExpenseFormatted = handleFormatInvestmentExpense(
      data,
      expense,
      null
    );

    const result = await API.graphql(
      graphqlOperation(updateInvestmentExpense, {
        input: { ...investmentExpenseFormatted },
      })
    );

    return result.data.updateInvestmentExpense;
  } catch (error) {
    console.error("handle update investment expense", error);
  }
};

export const handleDeleteInvestmentExpense = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(deleteInvestmentExpense, { input: { id } })
    );
    return result.data.deleteInvestmentExpense;
  } catch (error) {
    console.error("handle delete investmet expense", error);
  }
};

export const handleListInvestmentExpense = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listInvestmentExpenses, { input: {} })
    );
    return result.data.listInvestmentExpenses.items;
  } catch (error) {
    console.error("handle list investment expense", error);
  }
};

export const handleGetInvestmentExpense = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getInvestmentExpense, { input: { id } })
    );
    return result.data.getInvestmentExpense;
  } catch (error) {
    console.error("handle get investment expense", error);
  }
};
