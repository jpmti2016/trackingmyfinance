import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import dayjs from 'dayjs';
import { useHistory } from "react-router-dom";
import { API, graphqlOperation } from 'aws-amplify';
import "./ExpensePersonalForm.css";

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

const personalSchema = yup.object().shape({

});

export default function ExpensePersonalForm() {
  let history = useHistory();

  const { register, handleSubmit, errors, watch, reset } = useForm({
    defaultValues: {
      personal: "Select",
      housing: "Select",
      utility: "water",
      payType: "mortgage",
      event: "Select",
      phonePlan: "Plan",
      groceryCost: "Total"
    }
  });
  const watchPersonal = watch("personal");

  const watchInsurance = watch("nature");

  const watchHousing = watch("housing");
  const watchUtility = watch("utility");

  const watchLawyerOption = watch("lawyerOption");

  const watchPhonePlan = watch("plan");

  const watchFood = watch('nature');

  const watchGroceryCost = watch("groceryCost");

  const watchCommuteService = watch("commuteService");

  const watchEducation = watch("nature");
  const watchEdOnlinePeriod = watch("edOnlinePeriod");
  const watchBCampPriceDeferred = watch("bCampPriceDeferred");

  const watchEnterMent = watch("nature");

  const cta = `Add my ${
    watchPersonal !== "Select" ? watchPersonal : ""
    } expense`;

  const handleCancel = () => {
    reset();
    history.push("/expenses/personal");
  }

  const onSubmit = (data, e) => {
    //  !!!! Add a field kind: 'Personal' to the object before send
    //cause needed to filter each type of products per table

    try {
      const kind = "PERSONAL"; //'Personal' because each the field kind is based on the current tab position

      const { amount, dueDate, category, event, notes, title } = data;
      const formatedDueDate = dayjs(dueDate).format('YYYY-MM-DD');
      const formatedAmount = Number(amount);
      const titleEmpty = title === '' ? null : title;
      const notesEmpty = notes === '' ? null : notes;

    } catch (error) {

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
                >
                  <option value="Select">Select</option>
                  <option value="Housing">Housing</option>
                  <option value="Phone">Phone</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Legal">Legal</option>
                  <option value="Food">Food</option>
                  <option value="Commute">Commute</option>
                  <option value="Education">Education</option>
                  <option value="Personal Care">Personal Care</option>
                  <option value="Pet">Pet</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Loan">Loan</option>
                  <option value="Taxes">Taxes</option>
                  <option value="Investment">Investment</option>
                </select>
              </div>
            </div>
          </div>

          {watchPersonal === "Housing" && (
            <HousingFields
              watchHousing={watchHousing}
              watchUtility={watchUtility}
              register={register}
            />
          )}

          {watchPersonal === "Insurance" && (
            <InsuranceFields
              watchInsurance={watchInsurance}
              register={register}
            />
          )}

          {watchPersonal === "Legal" && (
            <LegalFields
              register={register}
              watchLawyerOption={watchLawyerOption}
            />
          )}

          {watchPersonal === "Phone" && (
            <PhoneFields register={register} watchPhonePlan={watchPhonePlan} />
          )}

          {watchPersonal === "Food" && (
            <FoodFields register={register} watchFood={watchFood} watchGroceryCost={watchGroceryCost} />
          )}

          {watchPersonal === "Commute" && (
            <CommuteFields
              register={register}
              watchCommuteService={watchCommuteService}
            />
          )}

          {watchPersonal === "Education" && (
            <EducationFields
              register={register}
              watchEducation={watchEducation}
              watchEdOnlinePeriod={watchEdOnlinePeriod}
              watchBCampPriceDeferred={watchBCampPriceDeferred}
            />
          )}

          {watchPersonal === "Personal Care" && (
            <PersonalCareFields register={register} />
          )}

          {watchPersonal === "Entertainment" && (
            <EntertainmentFields
              register={register}
              watchEnterMent={watchEnterMent}
            />
          )}

          {watchPersonal === "Pet" && <PetFields register={register} />}

          {watchPersonal === "Loan" && <LoanFields register={register} />}

          {watchPersonal === "Taxes" && <TaxesFields register={register} />}

          {watchPersonal === "Investment" && (
            <InvestmentFields register={register} />
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
