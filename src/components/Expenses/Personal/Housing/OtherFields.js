import React from "react";

export default function OtherFields({ register, errors }) {
  return (
    <>
      <div className="field">
        <label htmlFor="housingTitle" className="label">
          Title
        </label>
        <input
          type="text"
          className="input"
          name="housingTitle"
          id="housingTitle"
          ref={register({ required: true })}
        />
        {errors && errors[`housingTitle`] && (
          <p className="error">{"Please check the title"}</p>
        )}
      </div>
      <div className="field">
        <label htmlFor="dueDate" className="label">
          Due Date
        </label>
        <input
          type="datetime-local"
          className="input"
          name="dueDate"
          id="dueDate"
          ref={register}
        />
        {errors && errors[`dueDate`] && (
          <p className="error">{"Please select a Due Date"}</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="amount" className="label">
          Amount
        </label>
        <input
          type="number"
          className="input"
          name="amount"
          id="amount"
          ref={register({ required: true })}
        />
        {errors && errors[`amount`] && (
          <p className="error">{"Please check the amount"}</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="housingNotes" className="label">
          Notes
        </label>
        <textarea
          className="textarea"
          name="housingNotes"
          id="housingNotes"
          ref={register}
        />
        {errors && errors[`housingNotes`] && (
          <p className="error">{"Please check the notes"}</p>
        )}
      </div>
    </>
  );
}
