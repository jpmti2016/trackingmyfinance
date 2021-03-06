import React from "react";

export default function PhoneFields({ register, watchPhonePlan, errors }) {
  return (
    <>
      <div className="field is-grouped is-grouped-multiline">
        <div className="control">
          <label htmlFor="Plan" className="label">
            <input
              id="Plan"
              type="radio"
              name="phonePlan"
              value="PLAN"
              ref={register}
            />
            Plan
          </label>
        </div>

        <div className="control">
          <label htmlFor="Additional" className="label">
            <input
              id="Additional"
              type="radio"
              name="phonePlan"
              value="ADDITIONAL"
              ref={register}
            />
            Additional
          </label>
        </div>
      </div>

      <div className="field">
        <label htmlFor="dueDate" className="label">
          {watchPhonePlan === "Plan" ? "Due Date" : "Date"}
        </label>
        <input
          type="datetime-local"
          className="input"
          name="dueDate"
          ref={register}
          id="dueDate"
        />
        {errors && errors[`dueDate`] && (
          <p className="error">{"Please select a due date"}</p>
        )}
      </div>
      <div className="field">
        <label htmlFor="amount" className="label">
          Amount
        </label>
        <div className="control">
          <input
            className="input"
            type="number"
            step="0.01"
            placeholder="43"
            name="amount"
            id="amount"
            ref={register({ required: true, min: 0 })}
          />
          {errors && errors[`amount`] && (
            <p className="error">{"Please check the amount"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="phoneTitle" className="label">
          Title
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Some uncovered international call"
            name="phoneTitle"
            id="phoneTitle"
            ref={register({ required: true })}
          />
          {errors && errors[`phoneTitle`] && (
            <p className="error">{"Please check the title"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="phoneNotes" className="label">
          Notes
        </label>
        <div className="control">
          <textarea
            className="textarea"
            name="phoneNotes"
            id="phoneNotes"
            ref={register}
          />
        </div>
        {errors && errors[`phoneNotes`] && (
          <p className="error">{"Please check the notes"}</p>
        )}
      </div>

      {watchPhonePlan === "PLAN" && (
        <div className="field">
          <label htmlFor="" className="label">
            Billing Period
          </label>

          <div className="control">
            <label htmlFor="phonePlanBillingStart" className="label">
              Start
            </label>
            <input
              type="datetime-local"
              className="input"
              placeholder="Start"
              name="phonePlanBillingStart"
              id="phonePlanBillingStart"
              ref={register}
            />
            {errors && errors[`phonePlanBillingStart`] && (
              <p className="error">{"Please the plan's billing first date"}</p>
            )}
          </div>

          <div className="control">
            <label htmlFor="phonePlanBillingEnd" className="label">
              End
            </label>
            <input
              type="datetime-local"
              className="input"
              placeholder="End"
              name="phonePlanBillingEnd"
              id="phonePlanBillingEnd"
              ref={register}
            />
            {errors && errors[`phonePlanBillingEnd`] && (
              <p className="error">{"Please the plan's billing end date"}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
