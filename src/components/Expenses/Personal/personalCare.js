import { API, graphqlOperation } from "aws-amplify";
import dayjs from "dayjs";

import {
  includeObjectProps,
  omitObjectProps,
  replacePropEmptyString,
} from "../../helpers/utilities";

import {
  createPersonalCareExpense,
  deletePersonalCareExpense,
  updatePersonalCareExpense,
} from "../../../graphql/mutations";
import {
  getPersonalCareExpense,
  listPersonalCareExpenses,
} from "../../../graphql/queries";

export const handleFormatPersonalCare = (data, expense, clientId) => {
  try {
    // must add tags fields by AI
    // expense should have an id
    // some fields are not included in the array cause
    // need special treatment or it's  name in the form not match
    // the the name on the entity

    const personanCareStructure = {
      kind: "PERSONAL",
      amount: data.amount ? Number(data.amount) : null,
      dueDate: data.dueDate ? dayjs(data.dueDate).format("YYYY-MM-DD") : null,
      category: data.personal ? data.personal : null,
      ...includeObjectProps(data, ["nature", "title", "notes"]),
    };

    const newPersonalCare = {
      ...replacePropEmptyString(personanCareStructure),
      personalCareExpenseClientId: clientId,
    };

    if (expense) {
      const updatedPersonalCare = {
        ...includeObjectProps(expense, [
          "id",
          "amount",
          "dueDate",
          "category",
          "nature",
          "title",
          "notes",
        ]),
        ...omitObjectProps(newPersonalCare, ["personalCareExpenseClientId"]),
      };

      return updatedPersonalCare;
    }

    return newPersonalCare;
  } catch (error) {
    console.error("handle format personal care", error);
  }
};

export const handleCreatePersonalCare = async (data, clientId = null) => {
  try {
    const personalCareFormatted = handleFormatPersonalCare(
      data,
      null,
      clientId
    );

    const result = await API.graphql(
      graphqlOperation(createPersonalCareExpense, {
        input: { ...personalCareFormatted },
      })
    );

    return result.data.personalCareFormatted;
  } catch (error) {
    console.error("handle create personal care", error);
  }
};

export const handleUpdatePersonalCare = async (data, expense) => {
  try {
    const personalCareFormatted = handleFormatPersonalCare(data, expense, null);

    const result = await API.graphql(
      graphqlOperation(updatePersonalCareExpense, {
        input: { ...personalCareFormatted },
      })
    );

    return result.data.updatePersonalCareExpense;
  } catch (error) {
    console.error("hanle update personal care", error);
  }
};

export const handleDeletePersonalCare = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(deletePersonalCareExpense, { input: { id } })
    );
    return result.data.deletePersonalCareExpense;
  } catch (error) {
    console.error("handle delete personal care", error);
  }
};

export const handleGetPersonalCare = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getPersonalCareExpense, { input: { id } })
    );
    return result.data.getPersonalCareExpense;
  } catch (error) {
    console.error("handle get personal care", error);
  }
};

export const handleListPersonalCare = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listPersonalCareExpenses, { input: {} })
    );
    return result.data.listPersonalCareExpenses.items;
  } catch (error) {
    console.error("hanlde list personal care", error);
  }
};
