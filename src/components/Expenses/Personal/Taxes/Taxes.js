import React from "react";

export default function TaxesFields({ register, errors }) {
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
          {errors.year && <p className="error">{"Please check the year"}</p>}
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
          {errors.grossPay && (
            <p className="error">{"Please check the grossPay"}</p>
          )}
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
          {errors.federal && (
            <p className="error">{"Please check the federal"}</p>
          )}
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
          {errors.state && <p className="error">{"Please check the state"}</p>}
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
          {errors.local && <p className="error">{"Please check the local"}</p>}
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
          {errors.taxDebt && (
            <p className="error">{"Please check the taxDebt"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="dueDate" className="label">
          Due Date
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
            <p className="error">{"Please select the dueDate"}</p>
          )}
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
          {errors.fee && <p className="error">{"Please check the fee"}</p>}
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
          {errors.title && <p className="error">{"Please check the title"}</p>}
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
