import { API, graphqlOperation } from "aws-amplify";
import {
  createPeriod,
  updatePeriod,
  deletePeriod,
} from "../../../graphql/mutations";
import { getPeriod, listPeriods } from "../../../graphql/queries.js";

import {
  includeObjectProps,
  replacePropEmptyString,
} from "../../helpers/utilities";

import dayjs from "dayjs";

//asumes all fields come formatted

export const handleCreatePeriod = async (period) => {
  try {
    const result = await API.graphql(
      graphqlOperation(createPeriod, { input: { ...period } })
    );

    return result.data.createPeriod.id;
  } catch (error) {
    console.error("handle create period", error);
  }
};

//period must include id
export const handleUpdatePeriod = async (period) => {
  try {
    const result = await API.graphql(
      graphqlOperation(updatePeriod, { input: { ...period } })
    );

    return result.data.updatePeriod.id;
  } catch (error) {
    console.error("handle update period", error);
  }
};

export const handleDeletePeriod = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(deletePeriod, { input: { id } })
    );
    return result.data.deletePeriod.id;
  } catch (error) {
    console.error("handle delete period", error);
  }
};

export const handleFormatPeriod = (data, period) => {
  try {
    const periodStructure = {
      billingStart: data.billingStart
        ? dayjs(data.billingStart).format("YYYY-MM-DDTHH:mmZ")
        : null,
      billingEnd: data.billingEnd
        ? dayjs(data.billingEnd).format("YYYY-MM-DDTHH:mmZ")
        : null,
    };
    // TODO check trying to create an empty period
    const newPeriod = {
      ...replacePropEmptyString(periodStructure),
    };

    if (period) {
      const updatedPeriod = {
        ...includeObjectProps(period, ["id", "billingStart", "billingEnd"]),
        ...newPeriod,
      };

      return updatedPeriod;
    }

    return newPeriod;
  } catch (error) {
    console.error("handle format period", error);
  }
};

export const handleGetPeriod = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getPeriod, { input: { id } })
    );
    return result.data.getPeriod;
  } catch (error) {
    console.error("handle get period", error);
  }
};

export const handleListPeriod = async (owner) => {
  try {
    const result = await API.graphql(
      graphqlOperation(listPeriods, { input: { owner } })
    );
    return result.data.listPeriods.items;
  } catch (error) {
    console.error("handle list period", error);
  }
};
