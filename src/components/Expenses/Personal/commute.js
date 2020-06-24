import { API, graphqlOperation } from "aws-amplify";
import dayjs from "dayjs";

import {
  replacePropEmptyString,
  includeObjectProps,
  omitObjectProps,
} from "../../helpers/utilities";

import {
  createCommuteExpense,
  deleteCommuteExpense,
  updateCommuteExpense,
} from "../../../graphql/mutations";
import {
  getCommuteExpense,
  listCommuteExpenses,
} from "../../../graphql/queries";

export const handleFormatCommute = (data, expense, clientId) => {
  try {
    const commuteStructure = {
      kind: "PERSONAL",
      amount: data.amount ? Number(data.amount) : null,
      dueDate: data.dueDate
        ? dayjs(data.dueDate).format("YYYY-MM-DDTHH:mmZ")
        : null,
      category: data.personal ? data.personal : null,
      service: data.commuteService ? data.commuteService : null,
      event: data.commuteEvent ? data.commuteEvent : null,
      title: data.title ? data.title : null,
      notes: data.notes ? data.notes : null,
    };

    const newCommute = {
      ...replacePropEmptyString(commuteStructure),
      commuteExpenseClientId: clientId ? clientId : null,
    };

    if (expense) {
      const updatedCommute = {
        ...includeObjectProps(expense, [
          "id",
          "kind",
          "amount",
          "dueDate",
          "category",
          "service",
          "event",
          "title",
          "notes",
        ]),
        ...omitObjectProps(newCommute, ["commuteExpenseClientId"]),
      };

      return updatedCommute;
    }

    return newCommute;
  } catch (error) {
    console.error("handle commute expense", error);
  }
};

export const handleCreateCommute = async (data, clientId) => {
  try {
    const formattedCommute = handleFormatCommute(data, null, clientId);

    const result = await API.graphql(
      graphqlOperation(createCommuteExpense, { input: { ...formattedCommute } })
    );

    return result.data.createCommuteExpense;
  } catch (error) {
    console.error("handle create commute", error);
  }
};

export const handleUpdateCommute = async (data, commute) => {
  try {
    const formattedCommute = handleFormatCommute(data, commute, null);

    const result = await API.graphql(
      graphqlOperation(updateCommuteExpense, { input: { ...formattedCommute } })
    );

    return result.data.updateCommuteExpense;
  } catch (error) {
    console.error("handle update commute", error);
  }
};

export const handleDeleteCommute = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(deleteCommuteExpense, { input: { id } })
    );

    return result.data.deleteCommuteExpense;
  } catch (error) {
    console.error("handle delete commute", error);
  }
};

export const handleListCommute = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listCommuteExpenses, { input: {} })
    );

    return result.data.listCommuteExpenses.items;
  } catch (error) {
    console.error("handle list commute", error);
  }
};

export const handleGetCommute = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getCommuteExpense, { input: { id } })
    );
    return result.data.getCommuteExpense;
  } catch (error) {
    console.error("handle get commute", error);
  }
};
