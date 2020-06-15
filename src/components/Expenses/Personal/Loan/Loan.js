import React from "react";

export default function LoanFields({ register, errors }) {
  return (
    <>
      <div className="field">
        <label htmlFor="nature" className="label">
          Nature
        </label>
        <div className="control">
          <div className="select">
            <select name="nature" id="nature" ref={register}>
              <option value="">--Select--</option>
              <option value="PERSONAL">Personal</option>
              <option value="HOUSE">House</option>
              <option value="CAR">Car</option>
              <option value="STUDENT">Student</option>
            </select>
          </div>
          {errors.nature && (
            <p className="error">{"Please check the nature"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="title" className="label">
          Title
        </label>
        <div className="control">
          <input
            id="title"
            type="text"
            className="input"
            name="title"
            ref={register}
          />
          {errors.title && <p className="error">{"Please check the title"}</p>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="dueDate" className="label">
          Date
        </label>
        <div className="control">
          <input
            id="dueDate"
            type="datetime-local"
            className="input"
            name="dueDate"
            ref={register}
          />
          {errors.dueDate && (
            <p className="error">{"Please select the date"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="amount" className="label">
          Amount
        </label>
        <div className="control">
          <input
            id="amount"
            type="number"
            className="input"
            name="amount"
            ref={register}
          />
          {errors.amount && (
            <p className="error">{"Please check the amount"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="notes" className="label">
          Notes
        </label>
        <div className="control">
          <textarea
            id="notes"
            className="textarea"
            name="notes"
            ref={register}
          />
          {errors.notes && <p className="error">{"Please check the notes"}</p>}
        </div>
      </div>
    </>
  );
}
