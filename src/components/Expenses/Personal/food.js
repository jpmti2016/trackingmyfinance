import { API, graphqlOperation } from "aws-amplify";

import dayjs from "dayjs";

import {
  includeObjectProps,
  omitObjectProps,
  replacePropEmptyString,
} from "../../helpers/utilities";

import {
  createFoodExpense,
  updateFoodExpense,
  deleteFoodExpense,
  createGrocery,
  updateGrocery,
  deleteGrocery,
  createDinningOut,
  updateDinningOut,
  deleteDinningOut,
} from "../../../graphql/mutations";

import { asEnumeration } from "../../helpers/utilities";

import {
  getFoodExpense,
  listFoodExpenses,
  getGrocery,
  listGrocerys,
  getDinningOut,
  listDinningOuts,
} from "../../../graphql/queries";

//Grocery

export const handleFormatGrocery = (data, grocery) => {
  try {
    //TODO must be updated when product will be added directly from the form
    const groceryStructure = {
      title: data.foodTitle ? data.foodTitle : null,
      notes: data.foodNotes ? data.foodNotes : null,
      store: data.groceryStore ? data.groceryStore : null,
      info: data.groceryInfo ? data.groceryInfo : null,
    };

    const newGrocery = {
      ...replacePropEmptyString(groceryStructure),
    };

    if (grocery) {
      const updatedGrocery = {
        ...includeObjectProps(grocery, [
          "id",
          "title",
          "notes",
          "store",
          "info",
        ]),
        ...newGrocery,
      };

      return updatedGrocery;
    }

    return newGrocery;
  } catch (error) {
    console.error("handle format grocery", error);
  }
};

export const handleCreateGrocery = async (data) => {
  try {
    const formatedGrocery = handleFormatGrocery(data, null);

    const result = await API.graphql(
      graphqlOperation(createGrocery, { input: { ...formatedGrocery } })
    );

    return result.data.createGrocery;
  } catch (error) {
    console.error("handle create grocery", error);
  }
};

export const handleUpdateGrocery = async (data, grocery) => {
  try {
    const formatedGrocery = handleFormatGrocery(data, grocery);

    const result = await API.graphql(
      graphqlOperation(handleUpdateGrocery, { input: { ...formatedGrocery } })
    );

    return result.data.updateGrocery;
  } catch (error) {
    console.error("handle update grocery", error);
  }
};

export const handleDeleteGrocery = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(deleteGrocery, { input: { id } })
    );

    return result.data.deleteGrocery;
  } catch (error) {
    console.error("handle delete grocery", error);
  }
};

export const handleListGrocery = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listGrocerys, { input: {} })
    );

    return result.data.listGrocerys.items;
  } catch (error) {
    console.error("handle list grocery", error);
  }
};

export const handleGetGrocery = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getGrocery, { input: { id } })
    );

    return result.data.getGrocery;
  } catch (error) {
    console.error("handle get grocery", error);
  }
};

//DinningOut
export const handleFormatDinningOut = (data, dinningOut) => {
  try {
    //TODO must be updated when product will be added directly from the form
    // and how to CRUDL images
    const dinningOutStructure = {
      title: data.foodTitle ? data.foodTitle : null,
      notes: data.foodNotes ? data.foodNotes : null,
      place: data.place ? data.place : null,
      //   images: "TODO"
    };

    const newDinningOut = {
      ...replacePropEmptyString(dinningOutStructure),
    };

    if (dinningOut) {
      const updatedDinningOut = {
        ...includeObjectProps(dinningOut, ["id", "title", "notes", "place"]),
        ...newDinningOut,
      };

      return updatedDinningOut;
    }

    return newDinningOut;
  } catch (error) {
    console.error("handle format grocery", error);
  }
};

export const handleCreateDinningOut = async (data) => {
  try {
    const formatedDinnigOut = handleFormatDinningOut(data, null);

    const result = await API.graphql(
      graphqlOperation(createDinningOut, { input: { ...formatedDinnigOut } })
    );

    return result.data.createDinningOut;
  } catch (error) {
    console.error("handle create dinninOut", error);
  }
};

export const handleUpdateDinningOut = async (data, dinningOut) => {
  try {
    const formatedDinnigOut = handleFormatDinningOut(data, dinningOut);

    const result = await API.graphql(
      graphqlOperation(updateDinningOut, { input: { ...formatedDinnigOut } })
    );

    return result.data.updateDinningOut;
  } catch (error) {
    console.error("handle format dinnig out", error);
  }
};

export const handleDeleteDinningOut = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(deleteDinningOut, { input: { id } })
    );
    return result.data.deleteDinningOut;
  } catch (error) {
    console.error("handle delete dinning out", error);
  }
};

export const handleListDinningOut = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listDinningOuts, { input: {} })
    );
    return result.data.listDinningOuts.items;
  } catch (error) {
    console.error("handle list dinning out", error);
  }
};

export const handleGetDinningOut = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getDinningOut, { input: { id } })
    );

    return result.data.listDinningOuts.items;
  } catch (error) {
    console.error("handle list dinning out", error);
  }
};

export const foodAsEnum = asEnumeration({
  GROCERY: {
    name: "grocery",
    idName: "foodExpenseGroceryId",
    format: handleFormatGrocery,
    create: handleCreateGrocery,
    delete: handleDeleteGrocery,
    update: handleUpdateGrocery,
    list: handleListGrocery,
    get: handleGetGrocery,
  },
  DINNINGOUT: {
    name: "dinningOut",
    idName: "foodExpenseDinningOutId",
    format: handleFormatDinningOut,
    create: handleCreateDinningOut,
    delete: handleDeleteDinningOut,
    update: handleUpdateDinningOut,
    list: handleListDinningOut,
    get: handleGetDinningOut,
  },
});

export const handleFormatFood = (data, expense, clientId) => {
  try {
    // must add tags fields by AI
    // expense should have an id
    // some fields are not included in the array cause
    // need special treatment or it's  name in the form not match
    // the the name on the entity

    const foodStructure = {
      kind: "PERSONAL",
      amount: data.amount ? Number(data.amount) : null,
      category: data.personal ? data.personal : null,
      dueDate: data.dueDate ? dayjs(data.dueDate).format("YYYY-MM-DD") : null,
      nature: data.nature ? data.nature : null,
      foodExpenseClientId: clientId,
    };

    const newFood = {
      ...replacePropEmptyString(foodStructure),
    };

    if (expense) {
      const updatedFood = {
        ...includeObjectProps(expense, [
          "id",
          "amount",
          "category",
          "dueDate",
          "nature",
        ]),
        ...omitObjectProps(newFood, ["foodExpenseClientId"]),
      };

      return updatedFood;
    }

    return newFood;
  } catch (error) {
    console.error("handle format food", error);
  }
};

export const handleCreateFood = async (data, clientId = null) => {
  try {
    const foodPreformatted = handleFormatFood(data, null, clientId);
    //create the Grocery or DinningOut and return the object
    const { id } = await foodAsEnum.fromValue(data.nature).create(data);

    const formatedFood = {
      ...foodPreformatted,
      [foodAsEnum.fromValue(data.nature).idName]: id,
    };

    const result = await API.graphql(
      graphqlOperation(createFoodExpense, { input: { ...formatedFood } })
    );

    return result.data.createFoodExpense;
  } catch (error) {
    console.error("handle create food", error);
  }
};

export const handleUpdateFood = async (data, expense) => {
  try {
    await foodAsEnum
      .fromValue(data.nature)
      .update(data, expense[foodAsEnum.fromValue(data.nature).name]);

    const foodFormated = handleFormatFood(data, expense, null);

    const result = await API.graphql(
      graphqlOperation(updateFoodExpense, { input: { ...foodFormated } })
    );

    return result.data.updateFoodExpense;
  } catch (error) {
    console.error("handle update food", error);
  }
};

export const handleDeleteFood = async (expense) => {
  try {
    await foodAsEnum
      .fromValue(expense.nature)
      .delete(expense[foodAsEnum.fromValue(expense.name).name]);

    const { id } = expense;

    const result = await API.graphql(
      graphqlOperation(deleteFoodExpense, { input: { id } })
    );

    return result.data.deleteFoodExpense;
  } catch (error) {
    console.error("handle delete food", error);
  }
};

export const handleListFood = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listFoodExpenses, { input: {} })
    );

    return result.data.listFoodExpenses.items;
  } catch (error) {
    console.error("handle list food", error);
  }
};

export const handleGetFood = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getFoodExpense, { input: {} })
    );

    return result.data.getFoodExpense;
  } catch (error) {
    console.error("handle get food", error);
  }
};
