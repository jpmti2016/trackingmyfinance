import React from "react";

export default function SupplyFields({ register }) {
  return (
    <>
      <div className="field">
        <label htmlFor="supply" className="label">
          Supply For
        </label>
        <div className="control">
          <div className="select">
            <select
              name="supply"
              id="supply"
              ref={register({ required: true })}
            >
              <option value="Select">Select</option>
              <option value="Workshop">Workshop</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Dinnerroom">Dinnerroom</option>
              <option value="Office">Office</option>
              <option value="Hobby">Hobby</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label htmlFor="dateOfPurchase" className="label">
          Date of Purchase
        </label>
        <div className="control">
          <input
            type="date"
            className="input"
            name="dateOfPurchase"
            ref={register}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="amount" className="label">
          Amount
        </label>
        <div className="control">
          <input type="number" className="input" name="amount" id="amount" ref={register} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="title" className="label">
          Title
        </label>
        <div className="control">
          <input type="text" className="input" name="title" ref={register} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="notes" className="label">
          Notes
        </label>
        <div className="control">
          <textarea className="textarea" name="notes" ref={register} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="brand" className="label">
          Brand
        </label>
        <div className="control">
          <input type="text" className="input" name="brand" ref={register} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="model" className="label">
          Model
        </label>
        <div className="control">
          <input type="text" className="input" name="model" ref={register} />
        </div>
      </div>
    </>
  );
}
