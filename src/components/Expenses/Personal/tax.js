import { API, graphqlOperation } from "aws-amplify";
import dayjs from "dayjs";

import {
  includeObjectProps,
  omitObjectProps,
  replacePropEmptyString,
} from "../../helpers/utilities";

import {
  createTaxExpense,
  updateTaxExpense,
  deleteTaxExpense,
  createW2Summary,
  deleteW2Summary,
  updateW2Summary,
} from "../../../graphql/mutations";

import {
  listTaxExpenses,
  getTaxExpense,
  listW2Summarys,
  getW2Summary,
} from "../../../graphql/queries";

//W2Summary

export const handleFormatW2Summary = (data, w2Summary) => {
  try {
    const w2SummaryStructure = {
      // TODO has to cahncge to AWSDate
      year: data.year ? dayjs(data.year).format("YYYY") : "",
      grossPay: data.grossPay ? Number(data.grossPay) : null,
      federal: data.federal ? Number(data.federal) : null,
      state: data.state ? Number(data.state) : null,
      local: data.state ? Number(data.local) : null,
    };

    const newW2Summary = {
      ...replacePropEmptyString(w2SummaryStructure),
    };

    if (w2Summary) {
      const updatedW2Summary = {
        ...includeObjectProps(w2Summary, [
          "id",
          "year",
          "grossPay",
          "federal",
          "state",
          "local",
        ]),
        ...newW2Summary,
      };

      return updatedW2Summary;
    }

    return newW2Summary;
  } catch (error) {
    console.error("handle formate W2Summary", error);
  }
};

export const handleCreateW2Summary = async (data) => {
  try {
    const w2SummaryFormatted = handleFormatW2Summary(data, null);

    const result = await API.graphql(
      graphqlOperation(createW2Summary, { input: { ...w2SummaryFormatted } })
    );

    return result.data.createW2Summary;
  } catch (error) {
    console.error("handle create W2Summary", error);
  }
};

export const handleUpdateW2Summary = async (data, w2Summary) => {
  try {
    const w2SummaryFormatted = handleFormatW2Summary(data, w2Summary);
    const result = await API.graphql(
      graphqlOperation(updateW2Summary, { input: { ...w2SummaryFormatted } })
    );

    return result.data.updateW2Summary;
  } catch (error) {
    console.error("handle update W2Summary", error);
  }
};

export const handleDeleteW2Summary = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(deleteW2Summary, { input: { id } })
    );
    return result.data.deleteW2Summary;
  } catch (error) {
    console.error("handle delete w2Summary", error);
  }
};

export const handleListW2Summary = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listW2Summarys, { input: {} })
    );
    return result.data.listW2Summarys.items;
  } catch (error) {
    console.error("handle list W2Summary", error);
  }
};

export const handleGetW2Summary = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getW2Summary, { input: { id } })
    );
    return result.data.getW2Summary;
  } catch (error) {
    console.error("handle get W2Summary", error);
  }
};

//Tax

export const handleFormatTax = (data, expense, clientId) => {
  try {
    // must add tags fields by AI
    // expense should have an id
    // some fields are not included in the array cause
    // need special treatment or it's  name in the form not match
    // the the name on the entity

    const taxStructure = {
      kind: "PERSONAL",
      // amount = proccess fee + taxDebt
      amount:
        data.taxDebt && data.fee ? Number(data.taxDebt) + Number(data.fee) : 0,
      dueDate: data.dueDate
        ? dayjs(data.dueDate).format("YYYY-MM-DDTHH:mmZ")
        : null,
      category: data.personal ? data.personal : null,
      taxDebt: data.taxDebt ? Number(data.taxDebt) : null,
      fee: data.fee ? Number(data.fee) : null,
      title: data.title ? data.title : null,
      notes: data.notes ? data.notes : null,
    };

    const newTax = {
      ...replacePropEmptyString(taxStructure),
      taxExpenseW2Id: null,
      taxExpenseClientId: clientId,
    };

    if (expense) {
      const updatedTax = {
        ...includeObjectProps(expense, [
          "id",
          "amount",
          "dueDate",
          "category",
          "taxDebt",
          "fee",
          "title",
          "notes",
        ]),
        ...omitObjectProps(newTax, ["taxExpenseW2Id", "taxExpenseClientId"]),
      };

      return updatedTax;
    }

    return newTax;
  } catch (error) {
    console.error("handle format tax", error);
  }
};

export const handleCreateTax = async (data, clientId) => {
  try {
    const { id } = await handleCreateW2Summary(data);

    const taxPreFormatted = handleFormatTax(data, null, clientId);

    const taxFormatted = {
      ...taxPreFormatted,
      taxExpenseW2Id: id,
    };

    const result = await API.graphql(
      graphqlOperation(createTaxExpense, { input: { ...taxFormatted } })
    );

    return result.data.createTaxExpense;
  } catch (error) {
    console.error("handle create tax", error);
  }
};

export const handleUpdateTax = async (data, expense) => {
  try {
    await handleUpdateW2Summary(data, expense["w2"]);

    const taxFormatted = handleFormatTax(data, expense, null);

    const result = await API.graphql(
      graphqlOperation(updateTaxExpense, { input: { ...taxFormatted } })
    );

    return result.data.updateTaxExpense;
  } catch (error) {
    console.error("handle update tax", error);
  }
};

export const handleDeleteTax = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(deleteTaxExpense, { input: { id } })
    );
    return result.data.deleteTaxExpense;
  } catch (error) {
    console.error("handle delete tax", error);
  }
};

export const handleListTax = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listTaxExpenses, { input: {} })
    );
    return result.data.listTaxExpenses.items;
  } catch (error) {
    console.error("handle list tax", error);
  }
};

export const handleGetTax = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getTaxExpense, { input: { id } })
    );
    return result.data.getTaxExpense;
  } catch (error) {
    console.error("handle get tax", error);
  }
};
