import React from "react";

export default function InvestmentFields({ register }) {
  return (
    <>
      <div className="field">
        <label htmlFor="investment" className="label">
          Account
        </label>
        <div className="control">
          <div className="select">
            <select name="investment" id="investment" ref={register}>
              <option value="Select">Select</option>
              <option value="401K">401K</option>
              <option value="IRA">IRA</option>
              <option value="TRF">TRF</option>
              <option value="VTSAX">VTSAX</option>
              <option value="Roth IRA">Roth IRA</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label htmlFor="investAmount" className="label">
          Amount
        </label>
        <div className="control">
          <input
            id="investAmount"
            type="number"
            className="input"
            name="investAmount"
            ref={register}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="investDate" className="label">
          Date
        </label>
        <div className="control">
          <input
            id="investDate"
            type="date"
            className="input"
            name="investDate"
            ref={register}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="investNotes" className="label">
          Notes
        </label>
        <div className="control">
          <textarea
            className="textarea"
            name="investNotes"
            id="investNotes"
            ref={register}
          />
        </div>
      </div>
    </>
  );
}
