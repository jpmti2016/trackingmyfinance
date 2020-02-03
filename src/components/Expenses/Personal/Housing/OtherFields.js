import React from "react";

export default function OtherFields({ register, errors }) {
  return (
    <>
      <div className="field">
        <label htmlFor="otherHousingTitle" className="label">
          Title
        </label>
        <input
          type="text"
          className="input"
          name="otherHousingTitle"
          id="otherHousingTitle"
          ref={register({ required: true })}
        />
        {errors && errors[`otherHousingTitle`] && (
          <p className="error">{"Please check the title"}</p>
        )}
      </div>
      <div className="field">
        <label htmlFor="otherHousingDueDate" className="label">
          Due Date
        </label>
        <input
          type="date"
          className="input"
          name="otherHousingDueDate"
          id="otherHousingDueDate"
          ref={register}
        />
        {errors && errors[`otherHousingDueDate`] && (
          <p className="error">{"Please select a Due Date"}</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="otherHousingAmount" className="label">
          Amount
        </label>
        <input
          type="number"
          className="input"
          name="otherHousingAmount"
          id="otherHousingAmount"
          ref={register({ required: true })}
        />
        {errors && errors[`otherHousingAmount`] && (
          <p className="error">{"Please check the amount"}</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="otherHousingNotes" className="label">
          Notes
        </label>
        <textarea
          className="textarea"
          name="otherHousingNotes"
          id="otherHousingNotes"
          ref={register}
        />
        {errors && errors[`otherHousingNotes`] && (
          <p className="error">{"Please check the notes"}</p>
        )}
      </div>
    </>
  );
}
