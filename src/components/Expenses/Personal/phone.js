import { API, graphqlOperation } from "aws-amplify";
import dayjs from "dayjs";

import { asEnumeration, replacePropEmptyString } from "../../helpers/utilities";
import {
  handleCreatePeriod,
  handleDeletePeriod,
  handleUpdatePeriod
} from "./period";
import {
  createPlan,
  createPhoneExpense,
  deletePhoneExpense,
  updatePhoneExpense,
  deletePlan,
  updatePlan,
  createAditional,
  deleteAditional,
  updateAditional
} from "../../../graphql/mutations";

import { includeObjectProps } from "../../helpers/utilities";
import {
  listPlans,
  getPlan,
  listAditionals,
  getAditional,
  getPhoneExpense,
  listPhoneExpenses
} from "../../../graphql/queries";

//phone plan
export const handleStructurePlan = data => {
  try {
    const plan = {
      title: data.phoneTitle,
      notes: data.phoneNotes,
      planBillingId: null
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
        planBillingId
      };

      return planUpdatedFormated;
    }

    return newPlanFormated;
  } catch (error) {
    console.error("handle format plan");
  }
};

export const handleCreatePlan = async data => {
  try {
    let planBillingId = null;
    const planPreFormated = phoneAsEnum.fromValue(data.phonePlan).format(data);

    if (data.phonePlanBillingEnd !== "" && data.phonePlanBillingStart !== "") {
      planBillingId = await handleCreatePeriod({
        billingStart: dayjs(data.phonePlanBillingStart).format("YYYY-MM-DD"),
        billingEnd: dayjs(data.phonePlanBillingEnd).format("YYYY-MM-DD")
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

export const handleDeletePlan = async plan => {
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
          billingEnd: dayjs(data.phonePlanBillingEnd).format("YYYY-MM-DD")
        });
      } else {
        planBillingId = await handleCreatePeriod({
          billingStart: dayjs(data.phonePlanBillingStart).format("YYYY-MM-DD"),
          billingEnd: dayjs(data.phonePlanBillingEnd).format("YYYY-MM-DD")
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

// phone aditional

export const handleStructureAditional = data => {
  try {
    const aditional = {
      title: data.phoneTitle,
      notes: data.phoneNotes
    };

    return aditional;
  } catch (error) {
    console.error("handle structure aditional", error);
  }
};

export const handleFormatAditional = (data, aditional = null) => {
  try {
    const aditionalRestructured = handleStructureAditional(data);
    const newAditionalFormated = replacePropEmptyString(aditionalRestructured);
    if (aditional) {
      const aditionalUpdatedFormated = {
        ...aditional,
        ...newAditionalFormated
      };

      return aditionalUpdatedFormated;
    }

    return newAditionalFormated;
  } catch (error) {
    console.error("handle format plan");
  }
};

export const handleCreateAditional = async data => {
  try {
    const aditionalFormated = phoneAsEnum.fromValue("ADITIONAL").format(data);

    const result = await API.graphql(
      graphqlOperation(createAditional, { input: { ...aditionalFormated } })
    );
    console.log("handle create aditional", result.data.createAditional);

    return result.data.createAditional.id;
  } catch (error) {
    console.error("handle create phone aditional", error);
  }
};

export const handleDeleteAditional = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(deleteAditional, { input: { id } })
    );
    console.log("handle delete phone aditional", result.data.deleteAditional);
  } catch (error) {
    console.error("handle delete phone aditional", error);
  }
};

export const handleUpdateAditional = async (data, aditional) => {
  try {
    const aditionalFormated = phoneAsEnum
      .fromValue("ADITIONAL")
      .format(data, aditional);

    const result = await API.graphql(
      graphqlOperation(updateAditional, { input: { ...aditionalFormated } })
    );
    console.log("handle update aditional", result.data.updateAditional);
  } catch (error) {
    console.error("handle update phone aditional", error);
  }
};

export const handleListAditional = async () => {
  try {
    const result = await API.graphql(graphqlOperation(listAditionals));
    return result.data.listAditionals.items;
  } catch (error) {
    console.error("handle list phone aditional", error);
  }
};

export const handleGetAditional = async ({ id }) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getAditional, { input: { id } })
    );

    return result.data.getAditional;
  } catch (error) {
    console.error("handle get aditional", error);
  }
};

//phone enum

const phoneAsEnum = asEnumeration({
  PLAN: {
    //no name cause plan and aditional has the same name
    //that the phonePlan values
    name: "plan",
    idName: "phoneExpensePlanId",
    format: handleFormatPlan,
    create: handleCreatePlan,
    delete: handleDeletePlan,
    update: handleUpdatePlan,
    list: handleListPlan,
    get: handleGetPlan
  },
  ADITIONAL: {
    name: "aditional",
    idName: "phoneExpenseAditionalId",
    format: handleFormatAditional,
    create: handleCreateAditional,
    delete: handleDeleteAditional,
    update: handleUpdateAditional,
    list: handleListAditional,
    get: handleGetAditional
  }
});

export const handleStructurePhoneExpense = data => {
  try {
    const newPhone = {
      kind: "PERSONAL",
      dueDate: dayjs(data.dueDate).format("YYYY-MM-DD"),
      amount: Number(data.amount),
      category: data.personal,
      phonePlan: data.phonePlan,
      [phoneAsEnum.fromValue(data.phonePlan).idName]: null, // this field should be defined
      // at create/update time
      phoneExpenseClientId: null
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
          "phonePlan"
        ])
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
    // create plan or aditional
    const id = await phoneAsEnum.fromValue(data.phonePlan).create(data);

    const expensePreFormated = handleFormatPhoneExpense(data);

    console.log("expense preFormated before create", expensePreFormated);

    const expenseFormated = {
      ...expensePreFormated,
      [phoneAsEnum.fromValue(data.phonePlan).idName]: id,
      phoneExpenseClientId: clientId
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

export const handleDeletePhoneExpense = async expense => {
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
