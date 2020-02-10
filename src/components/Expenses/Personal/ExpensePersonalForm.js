import React, { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
// import * as yup from 'yup';
import dayjs from "dayjs";
import { useHistory } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import {
  createPeriod,
  updatePeriod,
  createUtility,
  updateUtility,
  updateHousingExpense
} from "../../../graphql/mutations";
import "./ExpensePersonalForm.css";

import { asEnumeration } from "../../helpers/noswitch";

import HousingFields from "./Housing/Housing";
import InsuranceFields from "./Insurance/Insurance";
import LegalFields from "./Legal/Legal";
import PhoneFields from "./Phone/Phone";
import FoodFields from "./Food/Food";
import CommuteFields from "./Commute/Commute";
import EducationFields from "./Education/Education";
import PersonalCareFields from "./Personal-Care/PersonalCare";
import EntertainmentFields from "./Entertainment/Entertainment";
import PetFields from "./Pet/Pet";
import LoanFields from "./Loan/Loan";
import TaxesFields from "./Taxes/Taxes";
import InvestmentFields from "./Investment/Investment";
import { getOtherHousing } from "../../../graphql/queries";

// const personalSchema = yup.object().shape({
//   housing: yup.object.shape({
//     personal: yup.string().required('Must select a category'),
//     housing: yup.string().required('Must select a housing type'),
//     utility: yup.bool().required('Must select an utility service'),
//     `${watchUtility}DueDate`: yup.string().required('Must enter the due date'),
//   })

// });

export default function ExpensePersonalForm(props) {
  const [expense, setExpense] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [clientId, setClientId] = useState("");

  console.log("props", props);

  let history = useHistory();

  useEffect(() => {
    props.location.pathname.includes("edit") &&
      setExpense(props.location.state.expense);
    props.location.pathname.includes("add") &&
      setClientId(props.location.state.clientId);

    setIsAdding(props.location.pathname.includes("add"));
    setIsUpdating(props.location.pathname.includes("edit"));
  }, [props]);

  console.log("expense to fill", expense);

  const { register, handleSubmit, errors, watch, reset, control } = useForm({});

  useEffect(() => {
    reset({
      personal: isUpdating && expense ? expense.category : "",
      housing:
        isUpdating && expense && expense.category === "HOUSING"
          ? housingEnumT(expense).typeToUpdate
          : "",
      utility:
        isUpdating && expense && expense.utility
          ? expense.utility.selection.toLowerCase()
          : "",
      dueDate: isUpdating && expense ? expense.dueDate : "",

      utilityDueDate: isUpdating && expense ? expense.dueDate : "",
      supplyDueDate: isUpdating && expense ? expense.dueDate : "",
      homeDueDate: isUpdating && expense ? expense.dueDate : "",
      phoneDueDate: isUpdating && expense ? expense.dueDate : "",
      otherHousingDueDate: isUpdating && expense ? expense.dueDate : "",
      amount: isUpdating && expense ? expense.amount : "",
      utilityAmount: isUpdating && expense ? expense.amount : "",
      supplyAmount: isUpdating && expense ? expense.amount : "",
      phoneAmount: isUpdating && expense ? expense.amount : "",
      homeAmount: isUpdating && expense ? expense.amount : "",
      repairAmount: isUpdating && expense ? expense.amount : "",
      otherHousingAmount: isUpdating && expense ? expense.amount : "",
      insuranceAmount: isUpdating && expense ? expense.amount : "",

      utilityCompany:
        isUpdating && expense && expense.utility ? expense.utility.company : "",
      title: isUpdating && expense && expense.title ? expense.title : "",
      utilityTitle:
        isUpdating && expense && expense.utility ? expense.utility.title : "",
      supplyTitle:
        isUpdating && expense && expense.supply ? expense.supply.title : "",
      homeTitle:
        isUpdating && expense && expense.home ? expense.home.title : "",
      repairTitle:
        isUpdating && expense && expense.repair ? expense.repair.title : "",
      otherHousingTitle:
        isUpdating && expense && expense.otherHousing
          ? expense.otherHousing.title
          : "",
      phoneTitle:
        isUpdating && expense && (expense.plan || expense.aditional)
          ? expense.plan
            ? expense.plan.title
            : expense.aditional.title
          : "",
      insuranceTitle:
        isUpdating && expense && expense.title ? expense.title : "",
      groceryTitle:
        isUpdating && expense && expense.grocery ? expense.grocery.title : "",
      dinningOutTitle:
        isUpdating && expense && expense.dinningOut
          ? expense.dinningOut.title
          : "",

      notes: isUpdating && expense && expense.notes ? expense.notes : "",
      utilityNotes:
        isUpdating && expense && expense.utility ? expense.utility.notes : "",
      supplyNotes:
        isUpdating && expense && expense.supply ? expense.supply.notes : "",
      homeNotes:
        isUpdating && expense && expense.home ? expense.home.notes : "",
      repairNotes:
        isUpdating && expense && expense.repair ? expense.repair.notes : "",
      otherHousingNotes:
        isUpdating && expense && expense.otherHousing
          ? expense.otherHousing.notes
          : "",
      phoneNotes:
        isUpdating && expense && (expense.plan || expense.aditional)
          ? expense.plan
            ? expense.plan.notes
            : expense.aditional.notes
          : "",
      insuranceNotes:
        isUpdating && expense && expense.notes ? expense.notes : "",
      groceryNotes:
        isUpdating && expense && expense.grocery ? expense.grocery.notes : "",
      dinningOutNotes:
        isUpdating && expense && expense.dinningOut
          ? expense.dinningOut.notes
          : "",

      utilityBillingStart:
        isUpdating && expense && expense.utility && expense.utility.period
          ? expense.utility.period.billingStart
          : "",
      phonePlanBillingStart:
        isUpdating && expense && expense.plan && expense.plan.billing
          ? expense.plan.billing.billingStart
          : "",

      utilityBillingEnd:
        isUpdating && expense && expense.utility && expense.utility.period
          ? expense.utility.period.billingEnd
          : "",
      phonePlanBillingEnd:
        isUpdating && expense && expense.plan && expense.plan.billing
          ? expense.plan.billing.billingEnd
          : "",

      utilityReading:
        isUpdating && expense && expense.utility ? expense.utility.reading : "",
      supplyFor:
        isUpdating && expense && expense.supply ? expense.supply.supplyFor : "",
      brand:
        isUpdating && expense && expense.supply ? expense.supply.brand : "",
      model:
        isUpdating && expense && expense.supply ? expense.supply.model : "",
      payType:
        isUpdating && expense && expense.home
          ? expense.home.mortgage.toLowerCase()
          : "",
      homeAddress:
        isUpdating && expense && expense.home && expense.home.address
          ? `You must add the other side of the relations`
          : `You must add the other side of the relations`,
      phonePlan:
        isUpdating && expense && expense.phonePlan
          ? expense.phonePlan.toLowerCase()
          : "",
      //insurance
      nature: isUpdating && expense && expense.nature ? expense.nature : "",
      startDate: isUpdating && expense ? expense.startDate : "",
      coverage: isUpdating && expense ? expense.coverage : "",
      yearDeductions:
        isUpdating && expense && expense.yearDeductions
          ? expense.yearDeductions
          : "",
      insuranceComapny:
        isUpdating && expense && expense.company ? expense.company : "",
      beneficiaries:
        isUpdating && expense && expense.beneficiaries
          ? [...expense.beneficiaries.items]
          : [],
      //legal
      lawyers:
        isUpdating && expense && expense.lawyers
          ? [...expense.lawyers.items]
          : "",
      groceryStore:
        isUpdating && expense && expense.grocery ? expense.grocery.store : "",
      groceryInfo:
        isUpdating && expense && expense.grocery ? expense.grocery.info : "",
      groceryTotal: isUpdating && expense ? expense.amount : "",
      place:
        isUpdating && expense && expense.dinningOut
          ? expense.dinningOut.place
          : "",
      products:
        isUpdating && expense && expense.grocery && expense.grocery.products
          ? [...expense.grocery.products.items]
          : [],
      //Commute
      commuteService: isUpdating && expense ? expense.service : "",
      commuteEvent: isUpdating && expense ? expense.event : "",
      //education
      bCampPriceDeferred:
        isUpdating && expense ? educationFormat(expense).costDeferred : "",
      edProgram: isUpdating && expense ? educationFormat(expense).program : "",
      edTrainingSchool:
        isUpdating && expense ? educationFormat(expense).school : "",
      edNotes: isUpdating && expense ? educationFormat(expense).notes : "",
      edTitle: isUpdating && expense ? educationFormat(expense).title : "",
      edPeriodStart:
        isUpdating && expense ? educationFormat(expense).edPeriodStart : "",
      edPeriodEnd:
        isUpdating && expense ? educationFormat(expense).edPeriodEnd : "",
      instructors:
        isUpdating && expense ? educationFormat(expense).instructors : [],
      edOnlineDesc:
        isUpdating && expense ? educationFormat(expense).description : "",
      edOnlinePlatf:
        isUpdating && expense ? educationFormat(expense).platform : "",
      url: isUpdating && expense ? educationFormat(expense).url : "",
      edOnlinePeriod:
        isUpdating && expense ? educationFormat(expense).edOnlinePeriod : false,
      tuitionAndFees:
        isUpdating && expense ? educationFormat(expense).tuitionAndFees : "",
      booksAndSupplies:
        isUpdating && expense ? educationFormat(expense).booksAndSupplies : "",
      roomAndBoard:
        isUpdating && expense ? educationFormat(expense).roomAndBoard : "",
      edTransportation:
        isUpdating && expense ? educationFormat(expense).transportation : "",
      edPersonal:
        isUpdating && expense ? educationFormat(expense).personal : "",
      fees: isUpdating && expense ? educationFormat(expense).fees : [],
      //Taxes
      year: isUpdating && expense && expense.w2 ? expense.w2.year : "",
      grossPay: isUpdating && expense && expense.w2 ? expense.w2.grossPay : "",
      federal: isUpdating && expense && expense.w2 ? expense.w2.federal : "",
      state: isUpdating && expense && expense.w2 ? expense.w2.state : "",
      local: isUpdating && expense && expense.w2 ? expense.w2.local : "",
      taxDebt: isUpdating && expense ? expense.taxDebt : "",
      fee: isUpdating && expense ? expense.fee : "",
      //investment
      investment: isUpdating && expense ? expense.account : ""
      //
    });
  }, [expense, reset, isUpdating]);

  const watchPersonal = watch("personal");

  const watchInsurance = watch("nature");

  const watchHousing = watch("housing");

  const watchUtility = watch("utility");

  const housingEnumT = expense => {
    if (expense) {
      if (expense.home) {
        return { typeToUpdate: "HOME", title: "" };
      } else if (expense.otherHousing) {
        return { typeToUpdate: "OTHER", title: "" };
      } else if (expense.repair) {
        return { typeToUpdate: "REPAIR", title: "" };
      } else if (expense.supply) {
        return { typeToUpdate: "SUPPLIES", title: "" };
      } else if (expense.utility) {
        return { typeToUpdate: "UTILITIES", title: "" };
      }
    }
  };

  const educationFormat = expense => {
    if (expense) {
      if (expense.college) {
        return {
          title: expense.college.title,
          notes: expense.college.notes,
          program: expense.college.program,
          // edPeriodStart: expense.college.period
          //   ? expense.college.period.billingStart
          //   : "",
          // edPeriodEnd: expense.college.period
          //   ? expense.college.period.billingEnd
          //   : "",
          fees: expense.college.fees ? [...expense.college.fees.items] : []
        };
      } else if (expense.onlineCourse) {
        return {
          title: expense.onlineCourse.title,
          notes: expense.onlineCourse.notes,
          instructors: expense.onlineCourse.instructors
            ? [...expense.onlineCourse.instructors.items]
            : [],
          description: expense.onlineCourse.description,
          platform: expense.onlineCourse.platform,
          url: expense.onlineCourse.url,
          edOnlinePeriod:
            expense.onlineCourse.period &&
            expense.onlineCourse.period.billingStart &&
            expense.onlineCourse.period.billingEnd
              ? true
              : false,
          edPeriodStart: expense.onlineCourse.period
            ? expense.onlineCourse.period.billingStart
            : "",
          edPeriodEnd: expense.onlineCourse.period
            ? expense.onlineCourse.period.billingEnd
            : ""
        };
      } else if (expense.communityCollege) {
        return {
          title: expense.communityCollege.title,
          notes: expense.communityCollege.notes,
          program: expense.communityCollege.program,
          // edPeriodStart: expense.communityCollege.period
          //   ? expense.communityCollege.period.billingStart
          //   : "",
          // edPeriodEnd: expense.communityCollege.period
          //   ? expense.communityCollege.period.billingEnd
          //   : "",
          fees: expense.communityCollege.fees
            ? [...expense.communityCollege.fees.items]
            : []
        };
      } else if (expense.training) {
        return {
          title: expense.training.title,
          notes: expense.training.notes,
          school: expense.training.school,
          edPeriodStart: expense.training.period
            ? expense.training.period.billingStart
            : "",
          edPeriodEnd: expense.training.period
            ? expense.training.period.billingEnd
            : ""
        };
      } else if (expense.bootcamp) {
        return {
          title: expense.bootcamp.title,
          notes: expense.bootcamp.notes,
          costDeferred: expense.bootcamp.costDeferred
            ? expense.bootcamp.costDeferred === "NO"
            : expense.bootcamp.costDeferred === "YES"
        };
      } else {
        return {
          title: "NA",
          notes: "NA"
        };
      }
    }
  };

  const watchLawyerOption = watch("lawyerOption");

  const watchPhonePlan = watch("phonePlan");

  const watchFood = watch("nature");

  const watchGroceryInfo = watch("groceryInfo");

  const watchCommuteService = watch("commuteService");

  const watchEducation = watch("nature");
  const watchEdOnlinePeriod = watch("edOnlinePeriod");
  const watchBCampPriceDeferred = watch("bCampPriceDeferred");

  const watchEnterMent = watch("nature");

  const ctaElement = `${
    watchPersonal !== "Select" ? watchPersonal : ""
  } expense`;
  const cta = isAdding ? `Add my ${ctaElement}` : `Update my ${ctaElement}`;

  const handleCancel = () => {
    // reset();
    history.push("/expenses/personal");
  };

  const managePeriod = async ({ periodStartEmpty, periodEndingEmpty }) => {
    try {
      let periodId = null;
      if (isAdding) {
        const result = await API.graphql(
          graphqlOperation(createPeriod, {
            input: {
              billingStart: periodStartEmpty,
              billingEnd: periodEndingEmpty
            }
          })
        );

        result && (periodId = result.data.createPeriod.id);
        console.log("period created", periodId);
      } else if (isUpdating) {
        const result = await API.graphql(
          graphqlOperation(updatePeriod, {
            input: {
              billingStart: periodStartEmpty,
              billingEnd: periodEndingEmpty
            }
          })
        );

        result && (periodId = result.data.createPeriod.id);
        console.log("period updated", periodId);
      }

      return periodId;
    } catch (error) {
      console.error("Validate period", error);
    }
  };

  const formatUtilities = async newData => {
    try {
      const {
        kind,
        personal,
        housing,
        utility,
        waterDueDate,
        waterBill,
        waterTitle,
        waterCompany,
        waterNotes,
        waterPeriodStart,
        waterPeriodEnding,
        waterReading
      } = newData;
      const formatedDueDate = dayjs(waterDueDate).format("YYYY-MM-DD");
      const formatedAmount = waterBill === "" ? null : Number(waterBill);

      const titleBeNotEmpty = waterTitle === "" ? null : waterTitle;
      const notesBeNotEmpty = waterNotes === "" ? null : waterNotes;
      const companyBeNotEmpty = waterCompany === "" ? null : waterCompany;
      const readingBeNotEmpty = waterReading === "" ? null : waterReading;

      // const categoryBeNotEmpty =

      const periodStartBeNotEmpty =
        waterPeriodStart === ""
          ? null
          : dayjs(waterPeriodStart).format("YYYY-MM-DD");
      const periodEndingBeNotEmpty =
        waterPeriodEnding === ""
          ? null
          : dayjs(waterPeriodEnding).format("YYYY-MM-DD");
      const utilityPeriodId = await managePeriod({
        periodStartBeNotEmpty,
        periodEndingBeNotEmpty
      });

      const formatedUtility = {
        company: companyBeNotEmpty,
        notes: notesBeNotEmpty,
        reading: readingBeNotEmpty,
        selection: utility,
        title: titleBeNotEmpty,
        utilityPeriodId
      };

      if (isUpdating) {
        let existingUtilityId = null;
        expense && (existingUtilityId = expense.utility.id);
        const utilityToUpdate = { id: existingUtilityId, ...formatedUtility };
        const utilityUpdated = await API.graphql(
          graphqlOperation(updateUtility, { input: utilityToUpdate })
        );
        const utilityId =
          utilityUpdated && utilityUpdated.data.updateUtility.id;

        const housingExpenseToUpdate = {
          ...expense,
          housingExpenseUtilityId: utilityId,
          kind,
          category: personal,
          nature: housing,
          dueDate: formatedDueDate,
          amount: formatedAmount
        };

        const updatedHousingExpense = await API.graphql(
          graphqlOperation(updateHousingExpense, {
            input: housingExpenseToUpdate
          })
        );
        console.log("updated housing", updatedHousingExpense);
      } else if (isAdding) {
      }
    } catch (error) {
      console.error("Format housing utility period", error);
    }
  };

  const formatHousing = data => {
    switch (watchHousing) {
      case "Utilities":
        return formatUtilities(data);
      default:
        throw new Error("Must select a housing");
    }
  };

  const formatInsurance = data => {};

  const formatLegal = data => {};

  const formatPhone = data => {};

  const formatFood = data => {};

  const formatCommute = data => {};

  const formatEducation = data => {};

  const formatPersonalCare = data => {};

  const formatEntertainment = data => {};

  const formatPet = data => {};

  const formatLoan = data => {};

  const formatTaxes = data => {};

  const formatInvestment = data => {};

  const formatPesonalExpense = data => {
    switch (watchPersonal) {
      case "Housing":
        return formatHousing(data);
      case "Insurance":
        return formatInsurance(data);
      case "Legal":
        return formatLegal(data);
      case "Phone":
        return formatPhone(data);
      case "Food":
        return formatFood(data);
      case "Commute":
        return formatCommute(data);
      case "Education":
        return formatEducation(data);
      case "Personal Care":
        return formatPersonalCare(data);
      case "Entertainment":
        return formatEntertainment(data);
      case "Pet":
        return formatPet(data);
      case "Loan":
        return formatLoan(data);
      case "Taxes":
        return formatTaxes(data);
      case "Investment":
        return formatInvestment(data);
      default:
        throw new Error("An expense must be selected");
    }
  };

  const handleUpdatePersonalExpense = formatedExpense => {
    formatPesonalExpense(formatedExpense);
  };

  const handleCreatePersonalExpense = formatedExpense => {
    try {
    } catch (error) {}
  };

  const onSubmit = (data, e) => {
    //  !!!! Add a field kind: 'Personal' to the object before send
    //cause needed to filter each type of products per table

    try {
      const kind = "PERSONAL"; //'Personal' because each the field kind is based on the current tab position
      // const formatedExpense = formatPesonalExpense({ ...data, kind });

      // isAdding && handleCreatePersonalExpense(formatedExpense);

      // isUpdating && handleUpdatePersonalExpense(formatedExpense);
      alert(JSON.stringify(data));
    } catch (error) {
      console.error("CU personal expense", error);
    }

    // e.target.reset(); // reset after form submit
    alert(JSON.stringify(data));

    history.push("/expenses/personal");
  };

  return (
    <>
      <section
        className="section"
        style={{
          paddingTop: "8rem",
          paddingBottom: "0.1rem",
          color: "#363636"
        }}
      >
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <h1 className="title" style={{ color: "#363636" }}>
                  Expenses
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label htmlFor="personal" className="label">
              Category
            </label>
            <div className="control">
              <div className="select">
                <select
                  name="personal"
                  id="personal"
                  ref={register({ required: true })}
                >
                  <option value="">--Select--</option>
                  <option value="HOUSING">Housing</option>
                  <option value="PHONE">Phone</option>
                  <option value="INSURANCE">Insurance</option>
                  <option value="LEGAL">Legal</option>
                  <option value="FOOD">Food</option>
                  <option value="COMMUTE">Commute</option>
                  <option value="EDUCATION">Education</option>
                  <option value="PERSONALCARE">Personal Care</option>
                  <option value="PET">Pet</option>
                  <option value="ENTERTAINMENT">Entertainment</option>
                  <option value="LOAN">Loan</option>
                  <option value="TAXES">Taxes</option>
                  <option value="INVESTMENT">Investment</option>
                </select>
              </div>
              {errors.personal && (
                <p className="error">{"Please select a category"}</p>
              )}
            </div>
          </div>

          {watchPersonal === "HOUSING" && (
            <HousingFields
              watchHousing={watchHousing}
              watchUtility={watchUtility}
              register={register}
              errors={errors}
            />
          )}
          {watchPersonal === "INSURANCE" && (
            <InsuranceFields
              watchInsurance={watchInsurance}
              register={register}
              errors={errors}
              control={control}
            />
          )}

          {watchPersonal === "LEGAL" && (
            <LegalFields
              register={register}
              watchLawyerOption={watchLawyerOption}
              errors={errors}
              control={control}
            />
          )}

          {watchPersonal === "PHONE" && (
            <PhoneFields
              register={register}
              watchPhonePlan={watchPhonePlan}
              errors={errors}
            />
          )}

          {watchPersonal === "FOOD" && (
            <FoodFields
              register={register}
              watchFood={watchFood}
              watchGroceryInfo={watchGroceryInfo}
              control={control}
              errors={errors}
            />
          )}

          {watchPersonal === "COMMUTE" && (
            <CommuteFields
              register={register}
              watchCommuteService={watchCommuteService}
              errors={errors}
            />
          )}

          {watchPersonal === "EDUCATION" && (
            <EducationFields
              register={register}
              watchEducation={watchEducation}
              watchEdOnlinePeriod={watchEdOnlinePeriod}
              watchBCampPriceDeferred={watchBCampPriceDeferred}
              errors={errors}
              control={control}
            />
          )}

          {watchPersonal === "PERSONALCARE" && (
            <PersonalCareFields register={register} errors={errors} />
          )}

          {watchPersonal === "ENTERTAINMENT" && (
            <EntertainmentFields
              register={register}
              watchEnterMent={watchEnterMent}
              errors={errors}
            />
          )}

          {watchPersonal === "PET" && (
            <PetFields register={register} errors={errors} />
          )}

          {watchPersonal === "LOAN" && (
            <LoanFields register={register} errors={errors} />
          )}

          {watchPersonal === "TAXES" && (
            <TaxesFields register={register} errors={errors} />
          )}

          {watchPersonal === "INVESTMENT" && (
            <InvestmentFields register={register} errors={errors} />
          )}

          <div className="field">
            <div className="control">
              <button className="button is-link is-fullwidth cta" type="submit">
                {cta.toLocaleUpperCase()}
              </button>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button
                className="button is-link is-fullwidth"
                type="submit"
                onClick={handleCancel}
                style={{ backgroundColor: "#fafafa", color: "#BAA949" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
