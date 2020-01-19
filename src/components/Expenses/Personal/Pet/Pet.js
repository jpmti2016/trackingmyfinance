import React from "react";

export default function PetFields({ register }) {
  return (
    <>
      <div className="field">
        <label htmlFor="nature" className="label">
          Nature
        </label>
        <div className="control">
          <div className="select">
            <select name="nature" id="nature" ref={register({ required: true })}>
              <option value="Select">Select</option>
              <option value="Food">Food</option>
              <option value="Medicine">Medicine</option>
              <option value="Equipment">Equipment</option>
              <option value="Pet">Pet</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="pDate" className="label">
          Date
        </label>
        <div className="control">
          <input
            date="pDate"
            type="date"
            className="input"
            name="pDate"
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
            type="text"
            className="input"
            name="amount"
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
            id="title"
            type="text"
            className="input"
            name="title"
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
            name="notes"
            id="notes"
            className="textarea"
            ref={register}
          ></textarea>
        </div>
      </div>
    </>
  );
}
