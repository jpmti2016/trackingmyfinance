import React from "react";

export default function SupplyFields({ register, errors }) {
  return (
    <>
      <div className="field">
        <label htmlFor="supplyFor" className="label">
          Supply For
        </label>
        <div className="control">
          <div className="select">
            <select
              name="supplyFor"
              id="supplyFor"
              ref={register({ required: true })}
            >
              <option value="">Select</option>
              <option value="WORKSHOP">Workshop</option>
              <option value="KITCHEN">Kitchen</option>
              <option value="BEDROOM">Bedroom</option>
              <option value="DINNERROOM">Dinnerroom</option>
              <option value="OFFICE">Office</option>
              <option value="HOBBY">Hobby</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          {errors && errors.supplyFor && (
            <p className="error">
              {"Please select a the target of the supply"}
            </p>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="dueDate" className="label">
          Date of Purchase
        </label>
        <div className="control">
          <input
            type="datetime-local"
            className="input"
            name="dueDate"
            id="dueDate"
            ref={register}
          />
          {errors && errors.dueDate && (
            <p className="error">{"Please select a the supply's dueDate"}</p>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="amount" className="label">
          Amount
        </label>
        <div className="control">
          <input
            type="number"
            step="0.01"
            className="input"
            name="amount"
            id="amount"
            ref={register}
          />
          {errors && errors.amount && (
            <p className="error">{"Please select a the supply's amount"}</p>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="housingTitle" className="label">
          Title
        </label>
        <div className="control">
          <input
            type="text"
            className="input"
            name="housingTitle"
            id="housingTitle"
            ref={register}
          />
          {errors && errors.housingTitle && (
            <p className="error">{"Please check the supply's title"}</p>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="housingNotes" className="label">
          Notes
        </label>
        <div className="control">
          <textarea
            className="textarea"
            name="housingNotes"
            id="housingNotes"
            ref={register}
          />
          {errors && errors.housingNotes && (
            <p className="error">{"Please check the supply's notes"}</p>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="brand" className="label">
          Brand
        </label>
        <div className="control">
          <input
            type="text"
            className="input"
            name="brand"
            id="brand"
            ref={register}
          />
          {errors && errors.brand && (
            <p className="error">{"Please check the supply's brand"}</p>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="model" className="label">
          Model
        </label>
        <div className="control">
          <input
            type="text"
            className="input"
            name="model"
            id="model"
            ref={register}
          />
          {errors && errors.model && (
            <p className="error">{"Please check the supply's model"}</p>
          )}
        </div>
      </div>
    </>
  );
}
