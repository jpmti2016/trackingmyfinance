import React from "react";

export default function PhoneFields({ register, watchPhonePlan }) {
  return (
    <>
      <div className="field is-grouped is-grouped-multiline">
        <div className="control">
          <label htmlFor="Plan" className="label">
            <input
              id="Plan"
              type="radio"
              name="plan"
              value="Plan"
              ref={register}
            />
            Plan
          </label>
        </div>

        <div className="control">
          <label htmlFor="Aditional" className="label">
            <input
              id="Aditional"
              type="radio"
              name="plan"
              value="Aditional"
              ref={register}
            />
            Aditional
          </label>
        </div>
      </div>

      <div className="field">
        <label htmlFor="dueDate" className="label">
          {watchPhonePlan === "Plan" ? "Due Date" : "Date"}
        </label>
        <input
          type="date"
          className="input"
          name="dueDate"
          ref={register}
          id="dueDate"
        />
      </div>
      <div className="field">
        <label htmlFor="amount" className="label">
          Amount
        </label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="43"
            name="amount"
            id="amount"
            ref={register({ required: true, min: 0 })}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="title" className="label">
          Title
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Some uncovered international call"
            name="title"
            id="title"
            ref={register({ required: true })}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="notes" className="label">
          Notes
        </label>
        <div className="control">
          <textarea className="textarea" name="notes" id="notes" ref={register} />
        </div>
      </div>

      {watchPhonePlan === "Plan" && (
        <div className="field">
          <label htmlFor="" className="label">
            Billing Period
          </label>

          <div className="control">
            <label htmlFor="start" className="label">
              Start
            </label>
            <input
              type="date"
              className="input"
              placeholder="Start"
              name="start"
              id="start"
              ref={register}
            />
          </div>

          <div className="control">
            <label htmlFor="end" className="label">
              End
            </label>
            <input
              type="date"
              className="input"
              placeholder="End"
              name="end"
              id="end"
              ref={register}
            />
          </div>
        </div>
      )}
    </>
  );
}
