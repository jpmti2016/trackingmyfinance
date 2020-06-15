import React from "react";

export default function InvestmentFields({ register, errors }) {
  return (
    <>
      <div className="field">
        <label htmlFor="investment" className="label">
          Account
        </label>
        <div className="control">
          <div className="select">
            <select name="investment" id="investment" ref={register}>
              <option value="">--Select--</option>
              <option value="I401K">401K</option>
              <option value="IRA">IRA</option>
              <option value="TRF">TRF</option>
              <option value="VTSAX">VTSAX</option>
              <option value="ROTHIRA">Roth IRA</option>
            </select>
          </div>
          {errors.investment && (
            <p className="error">{"Please select a investment"}</p>
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
            <p className="error">{"Please select the due date"}</p>
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
        <label htmlFor="notes" className="label">
          Notes
        </label>
        <div className="control">
          <textarea
            className="textarea"
            name="notes"
            id="notes"
            ref={register}
          />
          {errors.notes && <p className="error">{"Please check the notes"}</p>}
        </div>
      </div>
    </>
  );
}
