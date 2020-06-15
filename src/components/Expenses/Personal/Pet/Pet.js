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
            <select
              name="nature"
              id="nature"
              ref={register({ required: true })}
            >
              <option value="">--Select--</option>
              <option value="FOOD">Food</option>
              <option value="MEDICINE">Medicine</option>
              <option value="EQUIPMENT">Equipment</option>
              <option value="PET">Pet</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="dueDate" className="label">
          Date
        </label>
        <div className="control">
          <input
            date="dueDate"
            type="datetime-local"
            className="input"
            name="dueDate"
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
