import React from "react";

export default function HomeFields({ register }) {
  return (
    <>
      <div className="field is-grouped is-grouped-multiline">
        <div className="control">
          <label htmlFor="mortgage" className="label">
            <input
              id="mortgage"
              type="radio"
              name="payType"
              value="mortgage"
              ref={register}
            />
            Mortgage
          </label>
        </div>
        <div className="control">
          <label htmlFor="rent" className="label">
            <input
              id="rent"
              type="radio"
              name="payType"
              value="rent"
              ref={register}
            />
            Rent
          </label>
        </div>
      </div>
      <div className="field">
        <label htmlFor="amount" className="label">
          Amount
        </label>
        <input type="number" className="input" name="amount" id="amount" ref={register} />
      </div>
      <div className="field">
        <label htmlFor="dueDate" className="label">
          Due Date
        </label>
        <input type="date" className="input" name="dueDate" id="dueDate" ref={register} />
      </div>
      <div className="field">
        <label htmlFor="homeAddress" className="label">
          Address
        </label>
        <input
          type="text"
          className="input"
          name="homeAddress"
          id="homeAddress"
          ref={register}
        />
      </div>
      <div className="field">
        <label htmlFor="title" className="label">
          Title
        </label>
        <input
          type="text"
          className="input"
          name="title"
          id="title"
          ref={register}
        />
      </div>
      <div className="field">
        <label htmlFor="notes" className="label">
          Notes
        </label>
        <textarea
          className="textarea"
          name="notes"
          id="notes"
          ref={register}
        />
      </div>
    </>
  );
}
