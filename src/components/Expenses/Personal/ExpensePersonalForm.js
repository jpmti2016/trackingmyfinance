import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// import * as yup from 'yup';
import dayjs from "dayjs";
import { useHistory } from "react-router-dom";

import "./ExpensePersonalForm.css";

import { categoryAsEnum } from "./category";

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
      //generic fields
      personal: isUpdating && expense ? expense.category : "",
      housing:
        isUpdating && expense && expense.category === "HOUSING"
          ? housingEnumT(expense).typeToUpdate
          : "",
      dueDate:
        isUpdating && expense
          ? dayjs(expense.dueDate).format("YYYY-MM-DDThh:mm")
          : "",
      title: isUpdating && expense ? expense.title : "",
      notes: isUpdating && expense ? expense.notes : "",
      amount: isUpdating && expense ? expense.amount : "",
      //housing
      utility: isUpdating && expense ? housingInitForm(expense).utility : "",
      housingTitle: isUpdating && expense ? housingInitForm(expense).title : "",
      housingNotes: isUpdating && expense ? housingInitForm(expense).notes : "",
      housingCompany:
        isUpdating && expense ? housingInitForm(expense).company : "",
      housingBillingStart:
        isUpdating && expense
          ? dayjs(housingInitForm(expense).billingStart).format(
              "YYYY-MM-DDThh:mm"
            )
          : "",
      housingBillingEnd:
        isUpdating && expense
          ? dayjs(housingInitForm(expense).billingEnd).format(
              "YYYY-MM-DDThh:mm"
            )
          : "",
      housingReading:
        isUpdating && expense ? housingInitForm(expense).reading : "",
      supplyFor:
        isUpdating && expense ? housingInitForm(expense).supplyFor : "",
      brand: isUpdating && expense ? housingInitForm(expense).brand : "",
      model: isUpdating && expense ? housingInitForm(expense).model : "",
      payType: isUpdating && expense ? housingInitForm(expense).payType : "",
      housingNumber:
        isUpdating && expense ? housingInitForm(expense).housingNumber : "",
      housingStreet:
        isUpdating && expense ? housingInitForm(expense).housingStreet : "",
      housingCounty:
        isUpdating && expense ? housingInitForm(expense).housingCounty : "",
      housingPostCode:
        isUpdating && expense ? housingInitForm(expense).housingPostCode : "",
      housingState:
        isUpdating && expense ? housingInitForm(expense).housingState : "",
      housingRegion:
        isUpdating && expense ? housingInitForm(expense).housingRegion : "",
      housingCountry:
        isUpdating && expense ? housingInitForm(expense).housingCountry : "",

      //phone
      phoneTitle:
        isUpdating && expense && (expense.plan || expense.additional)
          ? expense.plan
            ? expense.plan.title
            : expense.additional.title
          : "",

      phoneNotes:
        isUpdating && expense && (expense.plan || expense.additional)
          ? expense.plan
            ? expense.plan.notes
            : expense.additional.notes
          : "",
      phonePlanBillingStart:
        isUpdating && expense && expense.plan && expense.plan.billing
          ? dayjs(expense.plan.billing.billingStart).format("YYYY-MM-DDThh:mm")
          : "",
      phonePlanBillingEnd:
        isUpdating && expense && expense.plan && expense.plan.billing
          ? dayjs(expense.plan.billing.billingEnd).format("YYYY-MM-DDThh:mm")
          : "",
      phonePlan:
        isUpdating && expense && expense.phonePlan ? expense.phonePlan : "PLAN",
      //insurance
      nature: isUpdating && expense && expense.nature ? expense.nature : "",
      startDate:
        isUpdating && expense
          ? dayjs(expense.startDate).format("YYYY-MM-DDThh:mm")
          : "",
      coverage: isUpdating && expense ? expense.coverage : "",
      yearDeductions:
        isUpdating && expense && expense.yearDeductions
          ? expense.yearDeductions
          : "",
      insuranceCompany:
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
      //food
      foodNotes: isUpdating && expense ? foodInitForm(expense).notes : "",
      foodTitle: isUpdating && expense ? foodInitForm(expense).title : "",
      groceryStore: isUpdating && expense ? foodInitForm(expense).store : "",
      groceryInfo: isUpdating && expense ? foodInitForm(expense).info : "TOTAL",
      // groceryTotal: isUpdating && expense ? expense.amount : "",
      place: isUpdating && expense ? foodInitForm(expense).place : "",
      products: isUpdating && expense ? foodInitForm(expense).products : [],
      //Commute
      commuteService: isUpdating && expense ? expense.service : "",
      commuteEvent: isUpdating && expense ? expense.event : "",
      //education
      bCampPriceDeferred:
        isUpdating && expense
          ? educationInitForm(expense).costDeferred === "YES"
          : false,
      edProgram:
        isUpdating && expense ? educationInitForm(expense).program : "",
      edUniversity:
        isUpdating && expense ? educationInitForm(expense).university : "",
      edSchool: isUpdating && expense ? educationInitForm(expense).school : "",
      edTrainingSchool:
        isUpdating && expense ? educationInitForm(expense).school : "",
      edNotes: isUpdating && expense ? educationInitForm(expense).notes : "",
      edTitle: isUpdating && expense ? educationInitForm(expense).title : "",
      edOnlinePeriod:
        isUpdating && expense
          ? educationInitForm(expense).edOnlinePeriod
          : false,
      edPeriodStart:
        isUpdating && expense
          ? dayjs(educationInitForm(expense).edPeriodStart).format(
              "YYYY-MM-DDThh:mm"
            )
          : "",
      edPeriodEnd:
        isUpdating && expense
          ? dayjs(educationInitForm(expense).edPeriodEnd).format(
              "YYYY-MM-DDThh:mm"
            )
          : "",
      instructors:
        isUpdating && expense ? educationInitForm(expense).instructors : [],
      edOnlineDesc:
        isUpdating && expense ? educationInitForm(expense).description : "",
      edOnlinePlatf:
        isUpdating && expense ? educationInitForm(expense).platform : "",
      url: isUpdating && expense ? educationInitForm(expense).url : "",

      tuitionAndFees:
        isUpdating && expense ? educationInitForm(expense).tuitionAndFees : "",
      booksAndSupplies:
        isUpdating && expense
          ? educationInitForm(expense).booksAndSupplies
          : "",
      roomAndBoard:
        isUpdating && expense ? educationInitForm(expense).roomAndBoard : "",
      edTransportation:
        isUpdating && expense ? educationInitForm(expense).transportation : "",
      edPersonal:
        isUpdating && expense ? educationInitForm(expense).personal : "",
      fees: isUpdating && expense ? educationInitForm(expense).fees : [],
      //Taxes
      year: isUpdating && expense && expense.w2 ? expense.w2.year : "",
      grossPay: isUpdating && expense && expense.w2 ? expense.w2.grossPay : "",
      federal: isUpdating && expense && expense.w2 ? expense.w2.federal : "",
      state: isUpdating && expense && expense.w2 ? expense.w2.state : "",
      local: isUpdating && expense && expense.w2 ? expense.w2.local : "",
      taxDebt: isUpdating && expense ? expense.taxDebt : "",
      fee: isUpdating && expense ? expense.fee : "",
      //investment
      investment: isUpdating && expense ? expense.account : "",
      //
    });
  }, [expense, reset, isUpdating]);

  const housingEnumT = (expense) => {
    if (expense) {
      if (expense.home) {
        return {
          typeToUpdate: "HOME",
          title: "",
        };
      } else if (expense.otherHousing) {
        return {
          typeToUpdate: "OTHER",
          title: "",
        };
      } else if (expense.repair) {
        return {
          typeToUpdate: "REPAIR",
          title: "",
        };
      } else if (expense.supply) {
        return {
          typeToUpdate: "SUPPLIES",
          title: "",
        };
      } else if (expense.utility) {
        return {
          typeToUpdate: "UTILITIES",
          title: "",
        };
      }
    }
  };

  const foodInitForm = (expense) => {
    if (expense) {
      if (expense.grocery) {
        return {
          title: expense.grocery.title,
          notes: expense.grocery.notes,
          info: expense.grocery.info,
          store: expense.grocery.store,
          products: expense.grocery.products
            ? [...expense.grocery.products.items]
            : [],
        };
      } else if (expense.dinningOut) {
        return {
          place: expense.dinningOut.place,
          title: expense.dinningOut.title,
          notes: expense.dinningOut.notes,
        };
      } else {
        return {
          title: "",
          notes: "",
        };
      }
    }
  };

  const housingInitForm = (expense) => {
    if (expense) {
      if (expense.utility) {
        return {
          utility: expense.utility.selection,
          company: expense.utility.company,
          title: expense.utility.title,
          notes: expense.utility.notes,
          billingStart: expense.utility.period
            ? dayjs(expense.utility.period.billingStart).format(
                "YYYY-MM-DDThh:mm"
              )
            : "",
          billingEnd: expense.utility.period
            ? dayjs(expense.utility.period.billingEnd).format(
                "YYYY-MM-DDThh:mm"
              )
            : "",
          reading: expense.utility.reading,
        };
      } else if (expense.supply) {
        return {
          supplyFor: expense.supply.supplyFor,
          title: expense.supply.title,
          notes: expense.supply.notes,
          brand: expense.supply.brand,
          model: expense.supply.model,
        };
      } else if (expense.home) {
        return {
          title: expense.home.title,
          notes: expense.home.notes,
          payType: expense.home.mortgage,
          housingNumber: expense.home.address
            ? expense.home.address.number
            : "",
          housingStreet: expense.home.address
            ? expense.home.address.street
            : "",
          housingCounty: expense.home.address
            ? expense.home.address.county
            : "",
          housingPostCode: expense.home.address
            ? expense.home.address.postCode
            : "",
          housingState: expense.home.address ? expense.home.address.state : "",
          housingRegion: expense.home.address
            ? expense.home.address.region
            : "",
          housingCountry: expense.home.address
            ? expense.home.address.country
            : "",
        };
      } else if (expense.repair) {
        return {
          title: expense.repair.title,
          notes: expense.repair.notes,
        };
      } else if (expense.otherHousing) {
        return {
          title: expense.otherHousing.title,
          notes: expense.otherHousing.notes,
        };
      } else {
        return {
          title: "",
          notes: "",
        };
      }
    }
  };

  const educationInitForm = (expense) => {
    if (expense) {
      if (expense.college) {
        return {
          title: expense.college.title,
          notes: expense.college.notes,
          program: expense.college.program,
          university: expense.college.university,
          school: expense.college.university,
          fees: expense.college.fees ? [...expense.college.fees.items] : [],
        };
      } else if (expense.onlineCourse) {
        return {
          title: expense.onlineCourse.title,
          notes: expense.onlineCourse.notes,
          university: expense.onlineCourse.university,
          school: expense.onlineCourse.school,
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
            ? dayjs(expense.onlineCourse.period.billingStart).format(
                "YYYY-MM-DDThh:mm"
              )
            : "",
          edPeriodEnd: expense.onlineCourse.period
            ? dayjs(expense.onlineCourse.period.billingEnd).format(
                "YYYY-MM-DDThh:mm"
              )
            : "",
        };
      } else if (expense.communityCollege) {
        return {
          title: expense.communityCollege.title,
          notes: expense.communityCollege.notes,
          program: expense.communityCollege.program,
          university: expense.communityCollege.university,
          school: expense.communityCollege.university,
          fees: expense.communityCollege.fees
            ? [...expense.communityCollege.fees.items]
            : [],
        };
      } else if (expense.training) {
        return {
          title: expense.training.title,
          notes: expense.training.notes,
          school: expense.training.school,
          edPeriodStart: expense.training.period
            ? dayjs(expense.training.period.billingStart).format(
                "YYYY-MM-DDThh:mm"
              )
            : "",
          edPeriodEnd: expense.training.period
            ? dayjs(expense.training.period.billingEnd).format(
                "YYYY-MM-DDThh:mm"
              )
            : "",
        };
      } else if (expense.bootcamp) {
        return {
          title: expense.bootcamp.title,
          notes: expense.bootcamp.notes,
          edPeriodStart: expense.bootcamp.period
            ? dayjs(expense.bootcamp.period.billingStart).format(
                "YYYY-MM-DDThh:mm"
              )
            : "",
          edPeriodEnd: expense.bootcamp.period
            ? dayjs(expense.bootcamp.period.billingEnd).format(
                "YYYY-MM-DDThh:mm"
              )
            : "",
          costDeferred: expense.bootcamp.costDeferred
            ? expense.bootcamp.costDeferred
            : null,
        };
      } else {
        return {
          title: "NA",
          notes: "NA",
        };
      }
    }
  };

  const watchPersonal = watch("personal");

  const watchInsurance = watch("nature");
  const watchHousing = watch("nature");
  const watchFood = watch("nature");
  const watchEnterMent = watch("nature");
  const watchEducation = watch("nature");

  const watchUtility = watch("utility");

  const watchLawyerOption = watch("lawyerOption");

  const watchPhonePlan = watch("phonePlan");

  const watchGroceryInfo = watch("groceryInfo");

  const watchCommuteService = watch("commuteService");

  const watchEdOnlinePeriod = watch("edOnlinePeriod");
  const watchBCampPriceDeferred = watch("bCampPriceDeferred");

  const ctaElement = `${
    watchPersonal !== "Select" ? watchPersonal : ""
  } expense`;
  const cta = isAdding ? `Add my ${ctaElement}` : `Update my ${ctaElement}`;

  const handleCancel = () => {
    // reset();
    history.push("/expenses/personal");
  };

  const handleUpdatePersonalExpense = async (data, expense) => {
    try {
      await categoryAsEnum.fromValue(data.personal).update(data, expense);

      history.push("/expenses/personal");
    } catch (error) {
      console.error("handle update personal expense", error);
    }
  };

  const handleCreatePersonalExpense = async (data, clientId) => {
    try {
      await categoryAsEnum.fromValue(data.personal).create(data, clientId);

      history.push("/expenses/personal");
    } catch (error) {
      console.error("handle create personal expense", error);
    }
  };

  const onSubmit = async (data, e) => {
    //  !!!! Add a field kind: 'Personal' to the object before send
    //cause needed to filter each type of products per table

    try {
      isAdding && (await handleCreatePersonalExpense(data, clientId));

      isUpdating && handleUpdatePersonalExpense(data, expense);
      // alert(JSON.stringify(data));
    } catch (error) {
      console.error("CU personal expense", error);
    }

    // e.target.reset(); // reset after form submit
    // alert(JSON.stringify(data));
  };

  return (
    <>
      <section
        className="section"
        style={{
          paddingTop: "8rem",
          paddingBottom: "0.1rem",
          color: "#363636",
        }}
      >
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <h1
                  className="title"
                  style={{
                    color: "#363636",
                  }}
                >
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
                  ref={register({
                    required: true,
                  })}
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
                style={{
                  backgroundColor: "#fafafa",
                  color: "#BAA949",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
        {/* <DevTool control={control} /> */}
      </div>
    </>
  );
}
