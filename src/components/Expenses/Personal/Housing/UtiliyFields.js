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
        <label htmlFor={`utilityDueDate`} className="label">
          Due Date
        </label>
        <input
          type="date"
          className="input"
          name={`utilityDueDate`}
          id={`utilityDueDate`}
          ref={register({ required: true })}
        />
        {errors && errors[`utilityDueDate`] && (
          <p className="error">{"Please select a due date"}</p>
        )}
      </div>
      <div className="field">
        <label htmlFor={`utilityAmount`} className="label">
          Amount
        </label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="25"
            name={`utilityAmount`}
            id={`utilityAmount`}
            ref={register({ required: true, min: 1 })}
          />
          {errors && errors[`utilityBill`] && (
            <p className="error">{"Please enter the amount"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`utilityCompany`} className="label">
          Company
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Late water bill"
            name={`utilityCompany`}
            id={`utilityCompany`}
            ref={register({ min: 2 })}
          />
          {errors && errors[`utilityCompany`] && (
            <p className="error">{"Please check the company"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`utilityTitle`} className="label">
          Title
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Title"
            name={`utilityTitle`}
            id={`utilityTitle`}
            ref={register({ min: 2 })}
          />
          {errors && errors[`utilityTitle`] && (
            <p className="error">{"Please check the title"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`utilityNotes`} className="label">
          Notes
        </label>
        <div className="control">
          <textarea
            className="textarea"
            name={`utilityNotes`}
            id={`utilityNotes`}
            ref={register}
          />
        </div>
        {errors && errors[`utilityNotes`] && (
          <p className="error">{"Please check the notes"}</p>
        )}
      </div>
      <div className="field">
        <label htmlFor="" className="label">
          Billing Period
        </label>

        <div className="control">
          <label htmlFor={`utilityBillingStart`} className="label">
            Start
          </label>
          <input
            type="date"
            className="input"
            placeholder="Start"
            name={`utilityBillingStart`}
            id={`utilityBillingStart`}
            ref={register}
          />
          {errors && errors[`utilityBillingStart`] && (
            <p className="error">{"Please check the Start Period"}</p>
          )}
        </div>

        <div className="control">
          <label htmlFor={`utilityBillingEnd`} className="label">
            End
          </label>
          <input
            type="date"
            className="input"
            placeholder="End"
            name={`utilityBillingEnd`}
            id={`utilityBillingEnd`}
            ref={register}
          />
          {errors && errors["utilityBillingEnd"] && (
            <p className="error">{"Please check the End Period"}</p>
          )}
        </div>
      </div>
      {(watchUtility === "water" ||
        watchUtility === "power" ||
        watchUtility === "gas") && (
        <div className="field">
          <label htmlFor={`utilityReading`} className="label">
            Reading
          </label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="123"
              name={`utilityReading`}
              id={`utilityReading`}
              ref={register}
            />
          </div>
          {errors && errors[`utilityReading`] && (
            <p className="error">{"Please check the Reading"}</p>
          )}
        </div>
      )}
    </>
  );
}
