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
        <label htmlFor="supplyDueDate" className="label">
          Date of Purchase
        </label>
        <div className="control">
          <input
            type="date"
            className="input"
            name="supplyDueDate"
            id="supplyDueDate"
            ref={register}
          />
          {errors && errors.supplyDueDate && (
            <p className="error">{"Please select a the supply's dueDate"}</p>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="supplyAmount" className="label">
          Amount
        </label>
        <div className="control">
          <input
            type="number"
            className="input"
            name="supplyAmount"
            id="supplyAmount"
            ref={register}
          />
          {errors && errors.supplyAmount && (
            <p className="error">{"Please select a the supply's amount"}</p>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="supplyTitle" className="label">
          Title
        </label>
        <div className="control">
          <input
            type="text"
            className="input"
            name="supplyTitle"
            id="supplyTitle"
            ref={register}
          />
          {errors && errors.supplyTitle && (
            <p className="error">{"Please check the supply's title"}</p>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="supplyNotes" className="label">
          Notes
        </label>
        <div className="control">
          <textarea
            className="textarea"
            name="supplyNotes"
            id="supplyNotes"
            ref={register}
          />
          {errors && errors.supplyNotes && (
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
