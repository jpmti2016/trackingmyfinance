import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { useHistory } from "react-router-dom";

import LawyerFields from "./../Personal/Legal/LawyerFields";
import BeneficiaryFields from "./../Personal/Insurance/BeneficiaryFields";
import ProductFields from "./../Personal/Food/ProductFields";
import AcademicFeeFields from "./../Personal/Education/AcademicFeeFields";
import InstructorFields from "./../Personal/Education/InstructorFields";

import dayjs from "dayjs";

import "./ExpensePersonalForm.css";
import { partAsEnum } from "./part";

export default function ExpensePartForm(props) {
  const [expensePart, setExpensePart] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  console.log("expense part to fill", expensePart);

  let history = useHistory();

  useEffect(() => {
    //  props.location.pathname.includes("edit") &&
    //    setExpense(props.location.state.expense);
    //  props.location.pathname.includes("add") &&
    //    setClientId(props.location.state.clientId);

    setExpensePart(props.location.state);

    setIsAdding(props.location.pathname.includes("add"));
    setIsUpdating(props.location.pathname.includes("edit"));
  }, [props]);

  const { register, handleSubmit, errors, reset } = useForm({});

  useEffect(() => {
    reset({
      //period
      billingStart:
        isUpdating && expensePart
          ? expensePart.period
            ? dayjs(expensePart.period.billingStart).format("YYYY-MM-DDThh:mm")
            : ""
          : "",
      billingEnd:
        isUpdating && expensePart
          ? expensePart.period
            ? dayjs(expensePart.period.billingEnd).format("YYYY-MM-DDThh:mm")
            : ""
          : "",
      //address
      number:
        isUpdating && expensePart
          ? expensePart.address
            ? expensePart.address.number
            : ""
          : "",
      street:
        isUpdating && expensePart
          ? expensePart.address
            ? expensePart.address.street
            : ""
          : "",
      county:
        isUpdating && expensePart
          ? expensePart.address
            ? expensePart.address.county
            : ""
          : "",
      state:
        isUpdating && expensePart
          ? expensePart.address
            ? expensePart.address.state
            : ""
          : "",
      region:
        isUpdating && expensePart
          ? expensePart.address
            ? expensePart.address.region
            : ""
          : "",
      postCode:
        isUpdating && expensePart
          ? expensePart.address
            ? expensePart.address.postCode
            : ""
          : "",
      country:
        isUpdating && expensePart
          ? expensePart.address
            ? expensePart.address.country
            : ""
          : "",
      //common
      name: isUpdating && expensePart ? expensePart.name : "",
      lastName: isUpdating && expensePart ? expensePart.lastName : "",
      phone: isUpdating && expensePart ? expensePart.phone : "",
      email: isUpdating && expensePart ? expensePart.email : "",
      //lawyer
      fee: isUpdating && expensePart ? expensePart.fee : 0.0,
      firm: isUpdating && expensePart ? expensePart.firm : "",

      //product
      price: isUpdating && expensePart ? expensePart.price : 0.0,
      quantity: isUpdating && expensePart ? expensePart.quantity : 1,
      frequency: isUpdating && expensePart ? expensePart.frequency : "ONETIME",

      //academic fee
      tuitionAndFees:
        isUpdating && expensePart ? expensePart.tuitionAndFees : 0,
      booksAndSupplies:
        isUpdating && expensePart ? expensePart.booksAndSupplies : 0,
      roomAndBoard: isUpdating && expensePart ? expensePart.roomAndBoard : 0,
      transportation:
        isUpdating && expensePart ? expensePart.transportation : 0,
      personal: isUpdating && expensePart ? expensePart.personal : 0,

      //instructor
      webPage: isUpdating && expensePart ? expensePart.webPage : "",
      tweeter: isUpdating && expensePart ? expensePart.tweeter : "",
    });
  }, [expensePart, reset, isUpdating]);

  const handleCreatePart = async (data, expensePart) => {
    try {
      await partAsEnum
        .fromValue(expensePart.__typename.toUpperCase())
        .create(data, expensePart);

      // history.push(`/expenses/personal/${expensePartId}/expensepart`);
      history.push(`/expenses/personal`);
    } catch (error) {
      console.error("handle create part", error);
    }
  };
  const handleUpdatePart = async (data, expensePart) => {
    try {
      await partAsEnum
        .fromValue(expensePart.__typename.toUpperCase())
        .update(data, expensePart);

      history.push(`/expenses/personal`);
    } catch (error) {
      console.error("handle update part", error);
    }
  };

  const onSubmit = async (data, e) => {
    try {
      isAdding && (await handleCreatePart(data, expensePart));
      isUpdating && (await handleUpdatePart(data, expensePart));
    } catch (error) {
      console.error("expense form", error);
    }
  };

  const handleCancel = () => {
    //reset();
    history.push("/expenses/personal"); //How to comeback  to the expensePart list?
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
              <div
                className="level-item"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyItems: "flex-start",
                }}
              >
                <h1 className="title">
                  {expensePart ? expensePart.text : "Loading"}
                </h1>

                <p> {`pathname ${props.location.pathname}`}</p>
                <p>{`typename: ${
                  expensePart ? expensePart.__typename : "NA"
                }`}</p>
                <p>{expensePart ? expensePart.nature : "NA"}</p>

                <p>{`state: ${JSON.stringify(props.location.state)}`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          {expensePart && expensePart.__typename === "Lawyer" && (
            <LawyerFields register={register} errors={errors} />
          )}
          {expensePart && expensePart.__typename === "Beneficiary" && (
            <BeneficiaryFields register={register} errors={errors} />
          )}
          {expensePart && expensePart.__typename === "Product" && (
            <ProductFields register={register} errors={errors} />
          )}
          {expensePart && expensePart.__typename === "AcademicFee" && (
            <AcademicFeeFields register={register} errors={errors} />
          )}
          {expensePart && expensePart.__typename === "Instructor" && (
            <InstructorFields register={register} errors={errors} />
          )}

          <div className="field">
            <div className="control">
              <button className="button is-link is-fullwidth cta">
                {expensePart
                  ? `${
                      isAdding ? "ADD" : "UPDATE"
                    } ${expensePart.text.toUpperCase()}`
                  : ""}
              </button>
            </div>
          </div>
          {/* cta-cancel nor work */}
          <div className="field">
            <div className="control">
              <button
                className="button is-link is-fullwidth cta-cancel"
                type="submit"
                onClick={handleCancel}
                // style={{ backgroundColor: "#fafafa", color: "#BAA949" }}
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
