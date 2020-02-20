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
              value="MORTGAGE"
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
              value="RENT"
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
        <input
          type="number"
          className="input"
          name="amount"
          id="amount"
          ref={register}
        />
        {errors && errors[`amount`] && (
          <p className="error">{"Please check the amount"}</p>
        )}
      </div>
      <div className="field">
        <label htmlFor="dueDate" className="label">
          Due Date
        </label>
        <input
          type="date"
          className="input"
          name="dueDate"
          id="dueDate"
          ref={register}
        />
        {errors && errors[`dueDate`] && (
          <p className="error">{"Please select a due date"}</p>
        )}
      </div>

      <fieldset name={"Address"}>
        <legend>{`Address`}</legend>
        <div className="field">
          <label htmlFor="housingNumber" className="label">
            Number
          </label>
          <input
            type="text"
            className="input"
            name="housingNumber"
            id="housingNumber"
            ref={register}
          />
          {errors && errors[`housingNumber`] && (
            <p className="error">{"Please check the street number"}</p>
          )}
        </div>
        <div className="field">
          <label htmlFor="housingStreet" className="label">
            Street
          </label>
          <input
            type="text"
            className="input"
            name="housingStreet"
            id="housingStreet"
            ref={register}
          />
          {errors && errors[`housingStreet`] && (
            <p className="error">{"Please check the street name"}</p>
          )}
        </div>
        <div className="field">
          <label htmlFor="housingCounty" className="label">
            County
          </label>
          <input
            type="text"
            className="input"
            name="housingCounty"
            id="housingCounty"
            ref={register}
          />
          {errors && errors[`housingCounty`] && (
            <p className="error">{"Please check the street name"}</p>
          )}
        </div>
        <div className="field">
          <label htmlFor="housingPostCode" className="label">
            Postal Code
          </label>
          <input
            type="text"
            className="input"
            name="housingPostCode"
            id="housingPostCode"
            ref={register}
          />
          {errors && errors[`housingPostCode`] && (
            <p className="error">{"Please check the street name"}</p>
          )}
        </div>

        <div className="field">
          <label htmlFor="housingState" className="label">
            State
          </label>
          <input
            type="text"
            className="input"
            name="housingState"
            id="housingState"
            ref={register}
          />
          {errors && errors[`housingState`] && (
            <p className="error">{"Please check the state"}</p>
          )}
        </div>
        <div className="field">
          <label htmlFor="housingRegion" className="label">
            Region
          </label>
          <input
            type="text"
            className="input"
            name="housingRegion"
            id="housingRegion"
            ref={register}
          />
          {errors && errors[`housingRegion`] && (
            <p className="error">{"Please check the region"}</p>
          )}
        </div>
        <div className="field">
          <label htmlFor="housingCountry" className="label">
            Country
          </label>
          <input
            type="text"
            className="input"
            name="housingCountry"
            id="housingCountry"
            ref={register}
          />
          {errors && errors[`housingCountry`] && (
            <p className="error">{"Please check the postal code"}</p>
          )}
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="housingTitle" className="label">
          Title
        </label>
        <input
          type="text"
          className="input"
          name="housingTitle"
          id="housingTitle"
          ref={register}
        />
        {errors && errors[`housingTitle`] && (
          <p className="error">{"Please check the title"}</p>
        )}
      </div>
      <div className="field">
        <label htmlFor="housingNotes" className="label">
          Notes
        </label>
        <textarea
          className="textarea"
          name="housingNotes"
          id="housingNotes"
          ref={register}
        />
        {errors && errors[`housingNotes`] && (
          <p className="error">{"Please check the notes"}</p>
        )}
      </div>
    </>
  );
}
