import React from "react";

export default function UtiliyFields({
  watchUtility,
  register,
  errors,
  expense,
  isUpdating
}) {
  return (
    <>
      <div className="field">
        <label htmlFor="dueDate" className="label">
          Due Date
        </label>
        <input
          type="date"
          className="input"
          name="dueDate"
          id="dueDate"
          ref={register({ required: true })}
        />
        {errors && errors["DueDate"] && (
          <p className="error">{"Please select a due date"}</p>
        )}
      </div>
      <div className="field">
        <label htmlFor={"amount"} className="label">
          Amount
        </label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="25"
            name={"amount"}
            id={"amount"}
            ref={register({ required: true, min: 1 })}
          />
          {errors && errors["amount"] && (
            <p className="error">{"Please enter the amount"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor={"company"} className="label">
          Company
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Late water bill"
            name={"company"}
            id={"company"}
            ref={register({ min: 2 })}
          />
          {errors && errors["company"] && (
            <p className="error">{"Please check the company"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor={"title"} className="label">
          Title
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Title"
            name={"title"}
            id={"title"}
            ref={register({ min: 2 })}
          />
          {errors && errors["title"] && (
            <p className="error">{"Please check the title"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor={"notes"} className="label">
          Notes
        </label>
        <div className="control">
          <textarea
            className="textarea"
            name={"notes"}
            id={"notes"}
            ref={register}
          />
        </div>
        {errors && errors["notes"] && (
          <p className="error">{"Please check the notes"}</p>
        )}
      </div>
      <div className="field">
        <label htmlFor="" className="label">
          Billing Period
        </label>

        <div className="control">
          <label htmlFor={"billingStart"} className="label">
            Start
          </label>
          <input
            type="date"
            className="input"
            placeholder="Start"
            name={"billingStart"}
            id={"billingStart"}
            ref={register}
          />
          {errors && errors["billingStart"] && (
            <p className="error">{"Please check the Start Period"}</p>
          )}
        </div>

        <div className="control">
          <label htmlFor={"billingEnd"} className="label">
            End
          </label>
          <input
            type="date"
            className="input"
            placeholder="End"
            name={"billingEnd"}
            id={"billingEnd"}
            ref={register}
            defaultValue={
              isUpdating && expense && expense.utility && expense.utility.period
                ? expense.utility.period.billigEnd
                : ""
            }
          />
          {errors && errors["billingEnd"] && (
            <p className="error">{"Please check the End Period"}</p>
          )}
        </div>
      </div>
      {(watchUtility === "water" ||
        watchUtility === "power" ||
        watchUtility === "gas") && (
        <div className="field">
          <label htmlFor={"reading"} className="label">
            Reading
          </label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="123"
              name={"reading"}
              id={"reading"}
              ref={register}
            />
          </div>
          {errors && errors["reading"] && (
            <p className="error">{"Please check the Reading"}</p>
          )}
        </div>
      )}
    </>
  );
}
