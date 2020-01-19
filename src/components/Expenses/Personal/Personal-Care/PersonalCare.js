import React from "react";

export default function PersonalCareFields({ register }) {
  return (
    <>
      <div className="field">
        <label htmlFor="nature" className="label">
          Type
        </label>
        <div className="control">
          <div className="select">
            <select
              name="nature"
              id="nature"
              ref={register({ required: true })}
            >
              <option value="Select">Select</option>
              <option value="Haircuts">Haircuts</option>
              <option value="Gimn">Gimn</option>
              <option value="Emergency">Emergency</option>
              <option value="Travel">Travel</option>
              <option value="Clothing">Clothing</option>
              <option value="Clubs">Clubs</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="amount" className="label">
          Amount
        </label>
        <div className="control">
          <input
            id="amount"
            type="text"
            className="input"
            name="amount"
            ref={register}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="pCareDate" className="label">
          Date
        </label>
        <div className="control">
          <input
            id="pCareDate"
            type="date"
            className="input"
            name="pCareDate"
            ref={register}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="pCareDesc" className="label">
          Notes
        </label>
        <div className="control">
          <textarea
            name="pCareDesc"
            id="pCareDesc"
            className="textarea"
          ></textarea>
        </div>
      </div>
    </>
  );
}
