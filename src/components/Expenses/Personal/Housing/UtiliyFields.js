import React from "react";

export default function UtiliyFields({ watchUtility, register, errors }) {
  return (
    <>
      <div className="field">
        <label htmlFor={`dueDate`} className="label">
          Due Date
        </label>
        <input
          type="date"
          className="input"
          name={`dueDate`}
          id={`dueDate`}
          ref={register({ required: true })}
        />
        {errors && errors[`dueDate`] && (
          <p className="error">{"Please select a due date"}</p>
        )}
      </div>
      <div className="field">
        <label htmlFor={`amount`} className="label">
          Amount
        </label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="25"
            name={`amount`}
            id={`amount`}
            ref={register({ required: true, min: 1 })}
          />
          {errors && errors[`amount`] && (
            <p className="error">{"Please enter the amount"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`housingCompany`} className="label">
          Company
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Late water bill"
            name={`housingCompany`}
            id={`housingCompany`}
            ref={register({ min: 2 })}
          />
          {errors && errors[`housingCompany`] && (
            <p className="error">{"Please check the company"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`housingTitle`} className="label">
          Title
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Title"
            name={`housingTitle`}
            id={`housingTitle`}
            ref={register({ min: 2 })}
          />
          {errors && errors[`housingTitle`] && (
            <p className="error">{"Please check the title"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`housingNotes`} className="label">
          Notes
        </label>
        <div className="control">
          <textarea
            className="textarea"
            name={`housingNotes`}
            id={`housingNotes`}
            ref={register}
          />
        </div>
        {errors && errors[`housingNotes`] && (
          <p className="error">{"Please check the notes"}</p>
        )}
      </div>
      <div className="field">
        <label htmlFor="" className="label">
          Billing Period
        </label>

        <div className="control">
          <label htmlFor={`housingBillingStart`} className="label">
            Start
          </label>
          <input
            type="date"
            className="input"
            placeholder="Start"
            name={`housingBillingStart`}
            id={`housingBillingStart`}
            ref={register}
          />
          {errors && errors[`housingBillingStart`] && (
            <p className="error">{"Please check the Start Period"}</p>
          )}
        </div>

        <div className="control">
          <label htmlFor={`housingBillingEnd`} className="label">
            End
          </label>
          <input
            type="date"
            className="input"
            placeholder="End"
            name={`housingBillingEnd`}
            id={`housingBillingEnd`}
            ref={register}
          />
          {errors && errors["housingBillingEnd"] && (
            <p className="error">{"Please check the End Period"}</p>
          )}
        </div>
      </div>
      {(watchUtility === "water" ||
        watchUtility === "power" ||
        watchUtility === "gas") && (
        <div className="field">
          <label htmlFor={`housingReading`} className="label">
            Reading
          </label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="123"
              name={`housingReading`}
              id={`housingReading`}
              ref={register}
            />
          </div>
          {errors && errors[`housingReading`] && (
            <p className="error">{"Please check the Reading"}</p>
          )}
        </div>
      )}
    </>
  );
}
