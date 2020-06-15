import { API, graphqlOperation } from "aws-amplify";
import dayjs from "dayjs";

import {
  replacePropEmptyString,
  includeObjectProps,
  omitObjectProps,
} from "../../helpers/utilities";

import {
  createInsuranceExpense,
  deleteInsuranceExpense,
  updateInsuranceExpense,
} from "../../../graphql/mutations";
import {
  getInsuranceExpense,
  listInsuranceExpenses,
} from "../../../graphql/queries";

export const handleFormatInsurance = (data, expense, clientId) => {
  try {
    //must add tags fields by AI
    //expense should have an id

    // some fields are not included in the array cause
    // need special treatment or it's  name in the form not match
    // the the name on the entity
    const insuranceStructure = {
      kind: "PERSONAL",
      amount: data.amount ? Number(data.amount) : null,
      company: data.insuranceCompany ? data.insuranceCompany : null,
      yearDeductions: data.yearDeductions ? Number(data.yearDeductions) : null,
      dueDate: data.dueDate
        ? dayjs(data.dueDate).format("YYYY-MM-DDThh:mmZ")
        : null,
      startDate: data.startDate
        ? dayjs(data.startDate).format("YYYY-MM-DDThh:mmZ")
        : null,
      category: data.personal ? data.personal : null,

      ...includeObjectProps(data, ["nature", "title", "notes", "coverage"]),
    };

    const newInsurance = {
      ...replacePropEmptyString(insuranceStructure),
      insuranceExpenseClientId: clientId ? clientId : null,
    };

    if (expense) {
      const updatedInsurance = {
        ...includeObjectProps(expense, [
          "id",
          "kind",
          "amount",
          "dueDate",
          "category",
          "nature",
          "startDate",
          "title",
          "notes",
          "coverage",
          "yearDeductions",
          "company",
        ]),
        ...omitObjectProps(newInsurance, ["insuranceExpenseClientId"]),
      };

      return updatedInsurance;
    }

    return newInsurance;
  } catch (error) {
    console.error("handle format insurance", error);
  }
};

export const handleCreateInsurance = async (data, clientId) => {
  try {
    const formatedInsurance = handleFormatInsurance(data, null, clientId);

    const result = await API.graphql(
      graphqlOperation(createInsuranceExpense, {
        input: { ...formatedInsurance },
      })
    );

    return result.data.createInsuranceExpense;
  } catch (error) {
    console.error("handle create insurance", error);
  }
};

export const handleUpdateInsurance = async (data, expense) => {
  try {
    const formatedInsurance = handleFormatInsurance(data, expense, null);

    const result = await API.graphql(
      graphqlOperation(updateInsuranceExpense, {
        input: { ...formatedInsurance },
      })
    );

    return result.data.updateInsuranceExpense;
  } catch (error) {
    console.error("handle update insurance", error);
  }
};

export const handleDeleteInsurance = async ({ id }) => {
  try {
    //TODO must deletes its beneficiaries if has

    const result = await API.graphql(
      graphqlOperation(deleteInsuranceExpense, { input: { id } })
    );

    return result.data.deleteInsuranceExpense;
  } catch (error) {
    console.error("handle delete insurance", error);
  }
};

export const handleGetInsurance = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getInsuranceExpense, { input: { id } })
    );

    return result.data.getInsuranceExpense;
  } catch (error) {
    console.error("handle get insurance", error);
  }
};

export const handleListInsurance = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listInsuranceExpenses, { input: {} })
    );
    return result.data.listInsuranceExpenses.items;
  } catch (error) {
    console.error("handle list insurance", error);
  }
};
