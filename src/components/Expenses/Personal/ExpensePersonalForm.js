import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// import * as yup from 'yup';
import dayjs from 'dayjs';
import { useHistory } from "react-router-dom";
import { API, graphqlOperation } from 'aws-amplify';
import { createPeriod, updatePeriod, createUtility, updateUtility, updateHousingExpense } from '../../../graphql/mutations';
import "./ExpensePersonalForm.css";

import { asEnumeration } from '../../helpers/noswitch';

import HousingFields from "./Housing/Housing";
import InsuranceFields from "./Insurance/Insurance";
import LegalFields from "./Legal/Legal";
import PhoneFields from "./Phone/Phone";
import FoodFields from './Food/Food'
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

  console.log('props', props);

  let history = useHistory();

  useEffect(() => {
    props.location.pathname.includes('edit') && setExpense(props.location.state.expense);
    props.location.pathname.includes('add') && setClientId(props.location.state.clientId);

    setIsAdding(props.location.pathname.includes('add'));
    setIsUpdating(props.location.pathname.includes('edit'));
  }, [props]);

  console.log('expense to fill', expense);

  const { register, handleSubmit, errors, watch, reset } = useForm({
    // defaultValues: {
    //   personal: "Select",
    //   housing: "Select",
    //   utility: isUpdating && expense && expense.utility ? expense.utility.selection : "",
    //   payType: "mortgage",
    //   event: "Select",
    //   phonePlan: "Plan",
    //   groceryCost: "Total"
    // }
  });

  const watchPersonal = watch("personal");
  console.log('watchPersonal', watchPersonal);

  const watchInsurance = watch("nature");

  const watchHousing = watch("housing");
  console.log('watchHousing', watchHousing);
  const watchUtility = watch("utility");
  console.log('watchUtility', watchUtility);

  const watchLawyerOption = watch("lawyerOption");

  const watchPhonePlan = watch("plan");

  const watchFood = watch('nature');

  const watchGroceryCost = watch("groceryCost");

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
    reset();
    history.push("/expenses/personal");
  }

  const managePeriod = async ({ periodStartEmpty, periodEndingEmpty }) => {
    try {
      let periodId = null;
      if (isAdding) {
        const result = await API.graphql(graphqlOperation(createPeriod, { input: { billingStart: periodStartEmpty, billingEnd: periodEndingEmpty } }));

        result && (periodId = result.data.createPeriod.id);
        console.log('period created', periodId);
      } else if (isUpdating) {
        const result = await API.graphql(graphqlOperation(updatePeriod, { input: { billingStart: periodStartEmpty, billingEnd: periodEndingEmpty } }));

        result && (periodId = result.data.createPeriod.id);
        console.log('period updated', periodId);
      }

      return periodId;
    } catch (error) {
      console.error('Validate period', error);
    }

  }

  const formatUtilities = async (newData) => {

    // "id": "3e5d9085-7698-49d9-a441-ebcddd87d118",
    //   "kind": "PERSONAL",
    //     "amount": 500,
    //       "category": "HOUSING",
    //         "dueDate": "2020-02-01",
    //           "utility": {
    //   "id": "21261129-4bcb-47a3-9a29-564c647cd1fe",
    //     "selection": "WATER",
    //       "company": "ss",
    //         "title": "tt",
    //           "notes": "nott",
    //             "period": {
    //     "id": "25804f0b-1cc7-4629-957c-c15ddf1e695e",
    //       "billingStart": "2019-07-02",
    //         "billingEnd": "2019-07-29"
    //   },
    //   "reading": 12,
    //     "images": null
    try {
      const { kind, personal, housing, utility, waterDueDate, waterBill, waterTitle, waterCompany, waterNotes, waterPeriodStart, waterPeriodEnding, waterReading } = newData;
      const formatedDueDate = dayjs(waterDueDate).format('YYYY-MM-DD');
      const formatedAmount = waterBill === '' ? null : Number(waterBill);

      const titleBeNotEmpty = waterTitle === '' ? null : waterTitle;
      const notesBeNotEmpty = waterNotes === '' ? null : waterNotes;
      const companyBeNotEmpty = waterCompany === '' ? null : waterCompany;
      const readingBeNotEmpty = waterReading === '' ? null : waterReading;

      // const categoryBeNotEmpty = 

      const periodStartBeNotEmpty = waterPeriodStart === '' ? null : dayjs(waterPeriodStart).format('YYYY-MM-DD');
      const periodEndingBeNotEmpty = waterPeriodEnding === '' ? null : dayjs(waterPeriodEnding).format('YYYY-MM-DD');
      const utilityPeriodId = await managePeriod({ periodStartBeNotEmpty, periodEndingBeNotEmpty });

      // isUpdating && (const {selection, company, title, tit})
      const formatedUtility = { company: companyBeNotEmpty, notes: notesBeNotEmpty, reading: readingBeNotEmpty, selection: utility, title: titleBeNotEmpty, utilityPeriodId };

      if (isUpdating) {
        // const {}
        let existingUtilityId = null;
        expense && (existingUtilityId = expense.utility.id);
        const utilityToUpdate = { id: existingUtilityId, ...formatedUtility };
        const utilityUpdated = await API.graphql(graphqlOperation(updateUtility, { input: utilityToUpdate }));
        const utilityId = utilityUpdated && utilityUpdated.data.updateUtility.id;

        const housingExpenseToUpdate = { ...expense, housingExpenseUtilityId: utilityId, kind, category: personal, nature: housing, dueDate: formatedDueDate, amount: formatedAmount };

        const updatedHousingExpense = await API.graphql(graphqlOperation(updateHousingExpense, { input: housingExpenseToUpdate }));
        console.log('updated housing', updatedHousingExpense);

      } else if (isAdding) {

      }

    } catch (error) {
      console.error('Format housing utility period', error)
    }
  }

  const formatHousing = (data) => {

    switch (watchHousing) {
      case 'Utilities':
        return formatUtilities(data);
      default:
        throw new Error('Must select a housing')
    }
  }

  const formatInsurance = (data) => {

  }

  const formatLegal = (data) => {

  }

  const formatPhone = (data) => {

  }

  const formatFood = (data) => {

  }

  const formatCommute = (data) => {

  }

  const formatEducation = (data) => {

  }

  const formatPersonalCare = (data) => {

  }

  const formatEntertainment = (data) => {

  }

  const formatPet = (data) => {

  }

  const formatLoan = (data) => {

  }

  const formatTaxes = (data) => {

  }

  const formatInvestment = (data) => {

  }

  const formatPesonalExpense = (data) => {
    switch (watchPersonal) {
      case 'Housing':
        return formatHousing(data);
      case 'Insurance':
        return formatInsurance(data);
      case 'Legal':
        return formatLegal(data);
      case 'Phone':
        return formatPhone(data);
      case 'Food':
        return formatFood(data);
      case 'Commute':
        return formatCommute(data);
      case 'Education':
        return formatEducation(data);
      case 'Personal Care':
        return formatPersonalCare(data);
      case 'Entertainment':
        return formatEntertainment(data);
      case 'Pet':
        return formatPet(data);
      case 'Loan':
        return formatLoan(data);
      case 'Taxes':
        return formatTaxes(data);
      case 'Investment':
        return formatInvestment(data);
      default:
        throw new Error('An expense must be selected');
    }
  }

  const handleUpdatePersonalExpense = (formatedExpense) => {
    formatPesonalExpense(formatedExpense);
  }

  const handleCreatePersonalExpense = (formatedExpense) => {
    try {

    } catch (error) {

    }
  }


  const onSubmit = (data, e) => {
    //  !!!! Add a field kind: 'Personal' to the object before send
    //cause needed to filter each type of products per table

    try {
      const kind = "PERSONAL"; //'Personal' because each the field kind is based on the current tab position
      const formatedExpense = formatPesonalExpense({ ...data, kind });

      isAdding && handleCreatePersonalExpense(formatedExpense);

      isUpdating && handleUpdatePersonalExpense(formatedExpense);


    } catch (error) {
      console.error('CU personal expense', error);
    }

    e.target.reset(); // reset after form submit
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
                  defaultValue={(props.location.pathname.includes('edit') && props.location.state.expense.category) || ""}>
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
              {errors.personal && <p className="error">{"Please select a catregory"}</p>}
            </div>
          </div>

          {watchPersonal === "HOUSING" && (
            <HousingFields
              watchHousing={watchHousing}
              watchUtility={watchUtility}
              register={register}
              errors={errors}
              expense={expense}
              isUpdating={isUpdating}
            />
          )}

          {watchPersonal === "INSURANCE" && (
            <InsuranceFields
              watchInsurance={watchInsurance}
              register={register}
              errors={errors}
            />
          )}

          {watchPersonal === "LEGAL" && (
            <LegalFields
              register={register}
              watchLawyerOption={watchLawyerOption}
              errors={errors}
            />
          )}

          {watchPersonal === "PHONE" && (
            <PhoneFields register={register} watchPhonePlan={watchPhonePlan} errors={errors} />
          )}

          {watchPersonal === "FOOD" && (
            <FoodFields register={register} watchFood={watchFood} watchGroceryCost={watchGroceryCost} errors={errors} />
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

          {watchPersonal === "PET" && <PetFields register={register} errors={errors} />}

          {watchPersonal === "LOAN" && <LoanFields register={register} errors={errors} />}

          {watchPersonal === "TAXES" && <TaxesFields register={register} errors={errors} />}

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
              <button className="button is-link is-fullwidth" type="submit" onClick={handleCancel} style={{ backgroundColor: "#fafafa", color: "#BAA949" }}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
