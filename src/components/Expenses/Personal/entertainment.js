import { API, graphqlOperation } from "aws-amplify";

import dayjs from "dayjs";

import {
  includeObjectProps,
  omitObjectProps,
  replacePropEmptyString,
} from "../../helpers/utilities";

import {
  createEntertainmentExpense,
  updateEntertainmentExpense,
  deleteEntertainmentExpense,
} from "../../../graphql/mutations";

import {
  getEntertainmentExpense,
  listEntertainmentExpenses,
} from "../../../graphql/queries";

export const handleFormatEntertainment = (data, expense, clientId) => {
  try {
    const entertainmentStructure = {
      kind: "PERSONAL",
      amount: data.amount ? Number(data.amount) : null,
      dueDate: data.dueDate
        ? dayjs(data.dueDate).format("YYYY-MM-DDThh:mmZ")
        : null,
      category: data.personal ? data.personal : null,
      ...includeObjectProps(data, ["nature", "title", "notes"]),
    };

    const newEntertainment = {
      ...replacePropEmptyString(entertainmentStructure),
      entertainmentExpenseClientId: clientId,
    };

    if (expense) {
      const updatedEntertainment = {
        ...includeObjectProps(expense, [
          "id",
          "amount",
          "dueDate",
          "category",
          "nature",
          "title",
          "notes",
        ]),
        ...omitObjectProps(newEntertainment, ["entertainmentExpenseClientId"]),
      };

      return updatedEntertainment;
    }

    return newEntertainment;
  } catch (error) {
    console.error("handle format entertainment", error);
  }
};

export const handleCreateEntertainment = async (data, clientId) => {
  try {
    const entertainmentFormatted = handleFormatEntertainment(
      data,
      null,
      clientId
    );

    const result = await API.graphql(
      graphqlOperation(createEntertainmentExpense, {
        input: { ...entertainmentFormatted },
      })
    );

    return result.data.createEntertainmentExpense;
  } catch (error) {
    console.error("handle create entertainment", error);
  }
};

export const handleUpdateEntertainment = async (data, expense) => {
  try {
    const entertainmentFormatted = handleFormatEntertainment(
      data,
      expense,
      null
    );

    const result = await API.graphql(
      graphqlOperation(updateEntertainmentExpense, {
        input: { ...entertainmentFormatted },
      })
    );

    return result.data.updateEntertainmentExpense;
  } catch (error) {
    console.error("handle update entertainment", error);
  }
};

export const handleDeleteEntertainment = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(deleteEntertainmentExpense, { input: { id } })
    );
    return result.data.deleteEntertainmentExpense;
  } catch (error) {
    console.error("handle delete entertainment", error);
  }
};

export const handleListEntertainment = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listEntertainmentExpenses, { input: {} })
    );
    return result.data.listEntertainmentExpenses.items;
  } catch (error) {
    console.error("handle list entertainment", error);
  }
};

export const handleGetEntertainment = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getEntertainmentExpense, { input: { id } })
    );
    return result.data.getEntertainmentExpense;
  } catch (error) {
    console.error("handle get entertainment", error);
  }
};
