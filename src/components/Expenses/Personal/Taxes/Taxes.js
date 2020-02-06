import React from "react";

export default function TaxesFields({ register }) {
  return (
    <>
      <div className="field">
        <label htmlFor="year" className="label">
          Year
        </label>
        <div className="control">
          <input
            type="text"
            className="input"
            name="year"
            ref={register}
            placeholder="2019"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="grossPay" className="label">
          Gross Pay
        </label>
        <div className="control">
          <input
            type="number"
            className="input"
            name="grossPay"
            ref={register}
            placeholder="48569"
            id="grossPay"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="federal" className="label">
          Federal
        </label>
        <div className="control">
          <input
            type="number"
            className="input"
            name="federal"
            ref={register}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="state" className="label">
          State
        </label>
        <div className="control">
          <input
            id="state"
            type="number"
            className="input"
            name="state"
            ref={register}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="local" className="label">
          Local
        </label>
        <div className="control">
          <input
            id="local"
            type="number"
            className="input"
            name="local"
            ref={register}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="taxDebt" className="label">
          Tax Debt
        </label>
        <div className="control">
          <input
            type="text"
            className="input"
            name="taxDebt"
            ref={register}
            placeholder="1587"
            id="taxDebt"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="dueDate" className="label">
          Due Date
        </label>
        <div className="control">
          <input
            id="dueDate"
            type="date"
            className="input"
            name="dueDate"
            ref={register}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="fee" className="label">
          Processing Fee
        </label>
        <div className="control">
          <input
            id="fee"
            type="number"
            className="input"
            name="fee"
            ref={register}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="title" className="label">
          Title
        </label>
        <div className="control">
          <input
            type="text"
            className="input"
            name="title"
            ref={register}
            placeholder="1587"
            id="title"
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
