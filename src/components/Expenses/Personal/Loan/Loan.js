import React from "react";

export default function LoanFields({ register }) {
  return (
    <>
      <div className="field">
        <label htmlFor="nature" className="label">
          Nature
        </label>
        <div className="control">
          <div className="select">
            <select name="nature" id="nature" ref={register}>
              <option value="Select">Select</option>
              <option value="Personal">Personal</option>
              <option value="House">House</option>
              <option value="Car">Car</option>
              <option value="Student">Student</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="loanTitle" className="label">
          Title
        </label>
        <div className="control">
          <input
            id="loanTitle"
            type="text"
            className="input"
            name="loanTitle"
            ref={register}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="loanDate" className="label">
          Date
        </label>
        <div className="control">
          <input
            id="loanDate"
            type="date"
            className="input"
            name="loanDate"
            ref={register}
          />
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
        </div>
      </div>
    </>
  );
}
