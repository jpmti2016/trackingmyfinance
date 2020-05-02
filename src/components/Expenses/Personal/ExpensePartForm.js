import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { useHistory } from "react-router-dom";

import LawyerFields from "./../Personal/Legal/LawyerFields";
import BeneficiaryFields from "./../Personal/Insurance/BeneficiaryFields";
import "./ExpensePersonalForm.css";
import { partAsEnum } from "./part";

export default function ExpensePartForm(props) {
  const [expensePart, setExpensePart] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

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

  console.log("form expense part", expensePart);
  console.log("isAdding", isAdding);
  console.log("isUpdating", isUpdating);

  const { register, handleSubmit, errors, watch, reset } = useForm({});

  useEffect(() => {
    reset({
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

      //lawyer
      fee: isUpdating && expensePart ? expensePart.fee : 0.0,
      name: isUpdating && expensePart ? expensePart.name : "",
      lastName: isUpdating && expensePart ? expensePart.lastName : "",
      phone: isUpdating && expensePart ? expensePart.phone : "",
      email: isUpdating && expensePart ? expensePart.email : "",
      firm: isUpdating && expensePart ? expensePart.firm : "",
    });
  }, [expensePart, reset, isUpdating]);

  const handleCreatePart = async (data, expensePart) => {
    console.log(
      "partAsEnumTypename",
      partAsEnum.fromValue(expensePart.__typename.toUpperCase()).idName
    );
    console.log("handle create part", data, expensePart);

    try {
      const result = await partAsEnum
        .fromValue(expensePart.__typename.toUpperCase())
        .create(data, expensePart);

      console.log("expensePart in form", expensePart);
      console.log("handle create lawyer", result);

      // history.push(`/expenses/personal/${expensePartId}/expensepart`);
      history.push(`/expenses/personal`);
    } catch (error) {
      console.error("handle create part", error);
    }
  };
  const handleUpdatePart = async (data, expensePart) => {
    console.log("handle update part", data, expensePart);
    try {
      const result = await partAsEnum
        .fromValue(expensePart.__typename.toUpperCase())
        .update(data, expensePart);

      console.log("update result", result);

      history.push(`/expenses/personal`);
    } catch (error) {
      console.error("handle update part", error);
    }
  };

  const onSubmit = async (data, e) => {
    try {
      isAdding && (await handleCreatePart(data, expensePart));
      isUpdating && (await handleUpdatePart(data, expensePart));
      console.log("data", data);
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
                {console.log("link", props.location.state)}
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
