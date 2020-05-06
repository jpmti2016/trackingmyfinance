import React from "react";

export default function ProductFields({ register, errors }) {
  return (
    <>
      <div className="field">
        <label htmlFor={`name`} className="label">
          Name
        </label>
        <div className="control">
          <input
            id={`name`}
            type="text"
            className="input"
            name={`name`}
            ref={register}
          />
          {errors && errors[`name`] && (
            <p className="error">{"Please check the product's name"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`price`} className="label">
          Price
        </label>
        <div className="control">
          <input
            id={`price`}
            type="number"
            className="input"
            name={`price`}
            ref={register({ required: true })}
          />
          {errors && errors[`price`] && (
            <p className="error">{"Please check the product's price"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`quantity`} className="label">
          Quantity
        </label>
        <div className="control">
          <input
            id={`quantity`}
            type="number"
            className="input"
            name={`quantity`}
            ref={register({ required: true })}
          />
          {errors && errors[`quantity`] && (
            <p className="error">{"Please check the product's count"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="frequency" className="label">
          Frequency
        </label>
        <div className="control">
          <div className="select">
            <select name="frequency" id="frequency" ref={register}>
              <option value="">--Select--</option>
              <option value="YEARLY">Yearly</option>
              <option value="MONTHLY">Monthly</option>
              <option value="BEWEEKLY">Beweekly</option>
              <option value="WEEKLY">Weekly</option>
              <option value="DAYLY">Dayly</option>
              <option value="HOURLY">Hourly</option>
              <option value="ONETIME">Onetime</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          {errors && errors[`frequency`] && (
            <p className="error">{"Please select product's frequency"}</p>
          )}
        </div>
      </div>
    </>
  );
}
