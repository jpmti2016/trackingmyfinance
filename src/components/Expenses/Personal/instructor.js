import { API, graphqlOperation } from "aws-amplify";

import {
  includeObjectProps,
  replacePropEmptyString,
} from "../../helpers/utilities";

import {
  createInstructor,
  updateInstructor,
  deleteInstructor,
} from "../../../graphql/mutations";

import { getInstructor, listInstructors } from "../../../graphql/queries";

export const handleCreateInstructor = async (data, expensePart) => {
  try {
    const instructorFormated = handleFormatInstructor(data, expensePart);

    const result = await API.graphql(
      graphqlOperation(createInstructor, { input: { ...instructorFormated } })
    );

    return result.data.createInstructor;
  } catch (error) {
    console.error("handle create instructor", error);
  }
};

export const handleDeleteInstructor = async (expensePart) => {
  try {
    const { id } = expensePart;

    const result = await API.graphql(
      graphqlOperation(deleteInstructor, { input: { id } })
    );

    return result.data.deleteInstructor.id;
  } catch (error) {
    console.error("handle delete instructor", error);
  }
};

export const handleUpdateInstructor = async (data, expensePart) => {
  try {
    const instructorFormated = handleFormatInstructor(data, expensePart);

    const result = await API.graphql(
      graphqlOperation(updateInstructor, {
        input: { ...instructorFormated },
      })
    );

    return result.data.updateInstructor;
  } catch (error) {
    console.error("handle update instructor", error);
  }
};

export const handleFormatInstructor = (data, expensePart) => {
  try {
    const instructorStructure = {
      ...includeObjectProps(data, [
        "phone",
        "tweeter",
        "name",
        "lastName",
        "email",
        "webPage",
      ]),
    };

    const newInstructor = {
      ...replacePropEmptyString(instructorStructure),
      instructorTeachOnId: expensePart ? expensePart.natureId : null,
    };

    if (expensePart.id) {
      const updatedInstructor = {
        ...includeObjectProps(expensePart, [
          "id",
          "phone",
          "tweeter",
          "name",
          "lastName",
          "email",
          "webPage",
        ]),
        ...newInstructor,
      };

      return updatedInstructor;
    }

    return newInstructor;
  } catch (error) {
    console.error("handle format Instructor", error);
  }
};

export const handleListInstructor = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listInstructors, { input: {} })
    );

    return result.data.listInstructors.items;
  } catch (error) {
    console.error("handle list instructos", error);
  }
};

export const handleGetInstructor = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getInstructor, { input: { id } })
    );

    return result.data.getInstructor;
  } catch (error) {
    console.error("handle get instructor", error);
  }
};
