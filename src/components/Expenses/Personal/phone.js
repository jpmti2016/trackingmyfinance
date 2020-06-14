import { API, graphqlOperation } from "aws-amplify";
import dayjs from "dayjs";

import { asEnumeration, replacePropEmptyString } from "../../helpers/utilities";
import {
  handleCreatePeriod,
  handleDeletePeriod,
  handleUpdatePeriod,
} from "./period";
import {
  createPlan,
  createPhoneExpense,
  deletePhoneExpense,
  updatePhoneExpense,
  deletePlan,
  updatePlan,
  createAdditional,
  deleteAdditional,
  updateAdditional,
} from "../../../graphql/mutations";

import { includeObjectProps } from "../../helpers/utilities";
import {
  listPlans,
  getPlan,
  listAdditionals,
  getAdditional,
  getPhoneExpense,
  listPhoneExpenses,
} from "../../../graphql/queries";

//phone plan
export const handleStructurePlan = (data) => {
  try {
    const plan = {
      title: data.phoneTitle,
      notes: data.phoneNotes,
      planBillingId: null,
    };

    return plan;
  } catch (error) {
    console.error("handle structure plan", error);
  }
};

export const handleFormatPlan = (data, plan = null) => {
  try {
    const planRestructured = handleStructurePlan(data);
    const newPlanFormated = replacePropEmptyString(planRestructured);
    if (plan) {
      const planBillingId = plan.billing ? plan.billing.id : null;
      const planUpdatedFormated = {
        ...includeObjectProps(plan, ["id", "title", "notes"]),
        ...newPlanFormated,
        planBillingId,
      };

      return planUpdatedFormated;
    }

    return newPlanFormated;
  } catch (error) {
    console.error("handle format plan");
  }
};

export const handleCreatePlan = async (data) => {
  try {
    let planBillingId = null;
    const planPreFormated = phoneAsEnum.fromValue(data.phonePlan).format(data);

    if (data.phonePlanBillingEnd !== "" && data.phonePlanBillingStart !== "") {
      planBillingId = await handleCreatePeriod({
        billingStart: dayjs(data.phonePlanBillingStart).format("YYYY-MM-DD"),
        billingEnd: dayjs(data.phonePlanBillingEnd).format("YYYY-MM-DD"),
      });
    }

    const planFormated = { ...planPreFormated, planBillingId };

    const result = await API.graphql(
      graphqlOperation(createPlan, { input: { ...planFormated } })
    );

    console.log("handle create phone plan", result.data.createPlan);
    return result.data.createPlan.id;
  } catch (error) {
    console.error("handle create plan", error);
  }
};

export const handleDeletePlan = async (plan) => {
  try {
    const { id } = plan;

    if (plan.billing) {
      const periodId = plan.billing.id;
      await handleDeletePeriod(periodId);
    }

    const result = await API.graphql(
      graphqlOperation(deletePlan, { input: { id } })
    );
    console.log("deleted plan", result.data.deletePlan);
  } catch (error) {
    console.error("handle delete plan", error);
  }
};

export const handleUpdatePlan = async (data, plan = null) => {
  try {
    const planPreFormated = phoneAsEnum.fromValue("PLAN").format(data, plan);

    let { planBillingId } = planPreFormated;

    if (data.phonePlanBillingStart !== "" && data.phonePlanBillingEnd !== "") {
      if (planBillingId) {
        await handleUpdatePeriod({
          id: planBillingId,
          billingStart: dayjs(data.phonePlanBillingStart).format("YYYY-MM-DD"),
          billingEnd: dayjs(data.phonePlanBillingEnd).format("YYYY-MM-DD"),
        });
      } else {
        planBillingId = await handleCreatePeriod({
          billingStart: dayjs(data.phonePlanBillingStart).format("YYYY-MM-DD"),
          billingEnd: dayjs(data.phonePlanBillingEnd).format("YYYY-MM-DD"),
        });
      }
    }

    const planFormated = { ...planPreFormated, planBillingId };

    const result = await API.graphql(
      graphqlOperation(updatePlan, { input: { ...planFormated } })
    );

    console.log("updated phone plan", result.data.updatePlan);

    return result.data.updatePlan.id;
  } catch (error) {
    console.error("handle update phone plan", error);
  }
};

export const handleListPlan = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listPlans, { input: {} })
    );
    return result.data.listPlans.items;
  } catch (error) {
    console.error("handle list phone plan", error);
  }
};

export const handleGetPlan = async ({ id }) => {
  try {
    const result = API.graphql(graphqlOperation(getPlan, { input: { id } }));
    return result.data.getPlan;
  } catch (error) {
    console.error("handle get phone plan", error);
  }
};

// phone additional

export const handleStructureAdditional = (data) => {
  try {
    const additional = {
      title: data.phoneTitle,
      notes: data.phoneNotes,
    };

    return additional;
  } catch (error) {
    console.error("handle structure additional", error);
  }
};

export const handleFormatAdditional = (data, additional = null) => {
  try {
    const additionalRestructured = handleStructureAdditional(data);
    const newAdditionalFormated = replacePropEmptyString(
      additionalRestructured
    );
    if (additional) {
      const additionalUpdatedFormated = {
        ...additional,
        ...newAdditionalFormated,
      };

      return additionalUpdatedFormated;
    }

    return newAdditionalFormated;
  } catch (error) {
    console.error("handle format plan");
  }
};

export const handleCreateAdditional = async (data) => {
  try {
    const additionalFormated = phoneAsEnum.fromValue("ADDITIONAL").format(data);

    const result = await API.graphql(
      graphqlOperation(createAdditional, { input: { ...additionalFormated } })
    );
    console.log("handle create additional", result.data.createAdditional);

    return result.data.createAdditional.id;
  } catch (error) {
    console.error("handle create phone additional", error);
  }
};

export const handleDeleteAdditional = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(deleteAdditional, { input: { id } })
    );
    console.log("handle delete phone additional", result.data.deleteAdditional);
  } catch (error) {
    console.error("handle delete phone additional", error);
  }
};

export const handleUpdateAdditional = async (data, additional) => {
  try {
    const additionalFormated = phoneAsEnum
      .fromValue("ADDITIONAL")
      .format(data, additional);

    const result = await API.graphql(
      graphqlOperation(updateAdditional, { input: { ...additionalFormated } })
    );
    console.log("handle update additional", result.data.updateAdditional);
  } catch (error) {
    console.error("handle update phone additional", error);
  }
};

export const handleListAdditional = async () => {
  try {
    const result = await API.graphql(graphqlOperation(listAdditionals));
    return result.data.listAdditionals.items;
  } catch (error) {
    console.error("handle list phone additional", error);
  }
};

export const handleGetAdditional = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getAdditional, { input: { id } })
    );

    return result.data.getAdditional;
  } catch (error) {
    console.error("handle get additional", error);
  }
};

//phone enum

const phoneAsEnum = asEnumeration({
  PLAN: {
    //no name cause plan and additional has the same name
    //that the phonePlan values
    name: "plan",
    idName: "phoneExpensePlanId",
    format: handleFormatPlan,
    create: handleCreatePlan,
    delete: handleDeletePlan,
    update: handleUpdatePlan,
    list: handleListPlan,
    get: handleGetPlan,
  },
  ADDITIONAL: {
    name: "additional",
    idName: "phoneExpenseAdditionalId",
    format: handleFormatAdditional,
    create: handleCreateAdditional,
    delete: handleDeleteAdditional,
    update: handleUpdateAdditional,
    list: handleListAdditional,
    get: handleGetAdditional,
  },
});

export const handleStructurePhoneExpense = (data) => {
  try {
    const newPhone = {
      kind: "PERSONAL",
      dueDate: dayjs(data.dueDate).format("YYYY-MM-DD"),
      amount: Number(data.amount),
      category: data.personal,
      phonePlan: data.phonePlan,
      [phoneAsEnum.fromValue(data.phonePlan).idName]: null, // this field should be defined
      // at create/update time
      phoneExpenseClientId: null,
    };

    console.log("handle strcucture phone", newPhone);

    return newPhone;
  } catch (error) {
    console.log("handle structure phone expense", error);
  }
};

export const handleFormatPhoneExpense = (data, expense) => {
  try {
    const phone = handleStructurePhoneExpense(data);
    const newPhone = replacePropEmptyString(phone);

    if (expense) {
      const { id, amount, dueDate, category, phonePlan } = expense;
      const updatedPhone = {
        id,
        amount,
        dueDate,
        category,
        phonePlan,
        ...includeObjectProps(newPhone, [
          "dueDate",
          "amount",
          "category",
          "phonePlan",
        ]),
      };

      console.log("handle format phone", updatedPhone);

      return updatedPhone;
    }

    console.log("handle format phone", newPhone);

    return newPhone;
  } catch (error) {
    console.error("handle format phone expense", error);
  }
};

export const handleCreatePhoneExpense = async (data, clientId) => {
  try {
    // create plan or additional
    const id = await phoneAsEnum.fromValue(data.phonePlan).create(data);

    const expensePreFormated = handleFormatPhoneExpense(data);

    console.log("expense preFormated before create", expensePreFormated);

    const expenseFormated = {
      ...expensePreFormated,
      [phoneAsEnum.fromValue(data.phonePlan).idName]: id,
      phoneExpenseClientId: clientId,
    };

    console.log("expense formated before create", expenseFormated);

    const result = await API.graphql(
      graphqlOperation(createPhoneExpense, { input: { ...expenseFormated } })
    );

    console.log("handle create phone plan", result.data.createPhoneExpense);
    return result.data.createPhoneExpense;
  } catch (error) {
    console.log("handle create phone plan", error);
  }
};

export const handleDeletePhoneExpense = async (expense) => {
  try {
    const { id } = expense;

    await phoneAsEnum
      .fromValue(expense.phonePlan)
      .delete(expense[phoneAsEnum.fromValue(expense.phonePlan).name]);

    const result = await API.graphql(
      graphqlOperation(deletePhoneExpense, { input: { id } })
    );

    return result.data.deletePhoneExpense.id;
  } catch (error) {
    console.error("handle delete phone expense", error);
  }
};

export const handleUpdatePhoneExpense = async (data, expense) => {
  try {
    //Asumes that allwys the part will exist expense[phoneAsEnum.fromValue(data.phonePlan).name] === true
    //and the expense has a [phoneAsEnum.fromValue(data.phonePlan).idName] and a clientId
    //must add tags fields by AI
    //expense should have an id

    await phoneAsEnum
      .fromValue(expense.phonePlan)
      .update(data, expense[phoneAsEnum.fromValue(expense.phonePlan).name]);

    const expenseToUpdate = handleFormatPhoneExpense(data, expense);

    const result = await API.graphql(
      graphqlOperation(updatePhoneExpense, { input: { ...expenseToUpdate } })
    );

    console.log("expense updated", result.data.updatePhoneExpense);

    return result.data.updatePhoneExpense;
  } catch (error) {
    console.log("handle update phone expense", error);
  }
};

export const handleGetPhoneExpense = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getPhoneExpense, { input: { id } })
    );
    return result.data.getPhoneExpense;
  } catch (error) {
    console.error("handle get phone expense", error);
  }
};

export const handleListPhoneExpense = async () => {
  try {
    const result = await API.graphql(graphqlOperation(listPhoneExpenses));

    return result.data.listPhoneExpenses.items;
  } catch (error) {
    console.error("handle list phone expenses", error);
  }
};
