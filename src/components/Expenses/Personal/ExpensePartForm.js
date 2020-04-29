import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { useHistory } from "react-router-dom";

import LawyerFields from "./../Personal/Legal/LawyerFields";
import "./ExpensePersonalForm.css";

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

  const { register, handleSubmit, errors, watch, reset, control } = useForm({});

  useEffect(() => {
    reset({});
  }, [expensePart, reset, isUpdating]);

  const handleCreatePart = async (data, expensePartId) => {
    console.log("handle create part", data, expensePartId);
  };
  const handleUpdatePart = async (data, expensePart) => {
    console.log("handle update part", data, expensePart);
  };

  const onSubmit = async (data, e) => {
    try {
      isAdding && (await handleCreatePart(data, expensePart.expensePartId));
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
                  display: "fles",
                  flexDirection: "column",
                  justifyItems: "flex-start",
                }}
              >
                <h1 className="title">
                  {expensePart ? expensePart.text : "Loading"}
                </h1>

                <p> {props.location.pathname}</p>
                <h1>{expensePart ? expensePart.__typename : "NA"}</h1>
                <h1>{expensePart ? expensePart.nature : "NA"}</h1>

                <p>{JSON.stringify(props.location.state)}</p>
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

          <div className="field">
            <div className="control">
              <button className="button is-link is-fullwidth cta">
                {expensePart ? `ADD ${expensePart.text.toUpperCase()}` : ""}
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
