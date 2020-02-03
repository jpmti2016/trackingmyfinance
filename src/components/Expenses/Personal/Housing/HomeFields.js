import React from "react";

export default function HomeFields({ register, errors }) {
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
        <label htmlFor="homeAmount" className="label">
          Amount
        </label>
        <input
          type="number"
          className="input"
          name="homeAmount"
          id="homeAmount"
          ref={register}
        />
        {errors && errors[`homeAmount`] && (
          <p className="error">{"Please check the amount"}</p>
        )}
      </div>
      <div className="field">
        <label htmlFor="homeDueDate" className="label">
          Due Date
        </label>
        <input
          type="date"
          className="input"
          name="homeDueDate"
          id="homeDueDate"
          ref={register}
        />
        {errors && errors[`homeDueDate`] && (
          <p className="error">{"Please select a due date"}</p>
        )}
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
        {errors && errors[`homeAddress`] && (
          <p className="error">{"Please check the address"}</p>
        )}
      </div>
      <div className="field">
        <label htmlFor="homeTitle" className="label">
          Title
        </label>
        <input
          type="text"
          className="input"
          name="homeTitle"
          id="homeTitle"
          ref={register}
        />
        {errors && errors[`homeTitle`] && (
          <p className="error">{"Please check the title"}</p>
        )}
      </div>
      <div className="field">
        <label htmlFor="homeNotes" className="label">
          Notes
        </label>
        <textarea
          className="textarea"
          name="homeNotes"
          id="homeNotes"
          ref={register}
        />
        {errors && errors[`homeNotes`] && (
          <p className="error">{"Please check the notes"}</p>
        )}
      </div>
    </>
  );
}
