import React from "react";

export default function RepairFields({ register, errors }) {
  return (
    <>
      <div className="field">
        <label htmlFor="repairTitle" className="label">
          Title
        </label>
        <input
          type="text"
          className="input"
          name="repairTitle"
          id="repairTitle"
          ref={register({ required: true })}
        />
        {errors && errors[`repairTitle`] && (
          <p className="error">{"Please check the title"}</p>
        )}
      </div>
      <div className="field">
        <label htmlFor="repairDueDate" className="label">
          Due Date
        </label>
        <input
          type="date"
          className="input"
          name="repairDueDate"
          id="repairDueDate"
          ref={register}
        />
        {errors && errors[`repairDueDate`] && (
          <p className="error">{"Please select the Due Date"}</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="repairAmount" className="label">
          Amount
        </label>
        <input
          type="number"
          className="input"
          name="repairAmount"
          id="repairAmount"
          ref={register({ required: true })}
        />
        {errors && errors[`repairAmount`] && (
          <p className="error">{"Please select the amount"}</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="repairNotes" className="label">
          Notes
        </label>
        <textarea
          className="textarea"
          name="repairNotes"
          id="repairNotes"
          ref={register}
        />
        {errors && errors[`repairNotes`] && (
          <p className="error">{"Please select the notes"}</p>
        )}
      </div>
    </>
  );
}
