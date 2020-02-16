import { API, graphqlOperation } from "aws-amplify";
import {
  createPeriod,
  updatePeriod,
  deletePeriod
} from "../../graphql/mutations";
import { getPeriod, listPeriods } from "../../graphql/queries.js";

//asumes all fields come formatted

export const handleCreatePeriod = async period => {
  try {
    const result = await API.graphql(
      graphqlOperation(createPeriod, { input: { ...period } })
    );

    console.log("handle create  period result", result);
    return result.data.createPeriod.id;
  } catch (error) {}
};

//period must include id
export const handleUpdatePeriod = async period => {
  try {
    const result = await API.graphql(
      graphqlOperation(updatePeriod, { input: { ...period } })
    );
    console.log("period updated", result.data.updatePeriod);
    return result.data.updatePeriod.id;
  } catch (error) {
    console.error("handle update period");
  }
};

export const handleDeletePeriod = async id => {
  try {
    const result = await API.graphql(
      graphqlOperation(deletePeriod, { input: { id } })
    );
    return result.data.deletePeriod.id;
  } catch (error) {
    console.error("handle delete period", error);
  }
};

export const handleGetPeriod = async id => {
  try {
    const result = await API.graphql(
      graphqlOperation(getPeriod, { input: { id } })
    );
    return result.data.getPeriod;
  } catch (error) {
    console.error("handle get period", error);
  }
};

export const handleListPeriod = async owner => {
  try {
    const result = await API.graphql(
      graphqlOperation(listPeriods, { input: { owner } })
    );
    return result.data.listPeriods.items;
  } catch (error) {
    console.error("handle list period", error);
  }
};
