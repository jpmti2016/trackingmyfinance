import React from "react";

import "./LawyerFields.css";

export default function LawyerFields({ register, errors }) {
  return (
    <>
      <div className="field">
        <label htmlFor="fee" className="label">
          Fee
        </label>
        <div className="control">
          <input
            id="fee"
            type="number"
            className="input"
            name="fee"
            ref={register({})}
          />
        </div>
        {errors && errors["fee"] && (
          <p className="error">style={{ display: "block" }}</p>
        )}
      </div>
      <div className="field">
        <label htmlFor="name" className="label">
          Name
        </label>
        <div className="control">
          <input
            id="name"
            type="text"
            className="input"
            name="name"
            ref={register({ required: true })}
          />
        </div>
        {errors && errors["name"] && (
          <p className="error">{"Please check the lawyer's name"}</p>
        )}
      </div>
      <div className="field">
        <label htmlFor="lastName" className="label">
          Last Name
        </label>
        <div className="control">
          <input
            id="lastName"
            type="text"
            className="input"
            name="lastName"
            ref={register({ required: true })}
          />
        </div>
        {errors && errors["lastName"] && (
          <p className="error">{"Please check the lawyer's last name"}</p>
        )}
      </div>

      <div className="field">
        <label htmlFor={`phone`} className="label">
          Phone
        </label>
        <div className="control">
          <input
            id={`phone`}
            type="tel"
            className="input"
            name={`phone`}
            ref={register({ required: true })}
          />
          {errors && errors[`phone`] && (
            <p className="error">{"Please check the lawyer's phone"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`email`} className="label">
          Email
        </label>
        <div className="control">
          <input
            id={`email`}
            type="email"
            className="input"
            name={`email`}
            ref={register({ required: true })}
          />
          {errors && errors[`email`] && (
            <p className="error">{"Please check the lawyer's email"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`firm`} className="label">
          Firm
        </label>
        <div className="control">
          <input
            id={`firm`}
            type="text"
            className="input"
            name={`firm`}
            ref={register({ required: true })}
          />
          {errors && errors[`firm`] && (
            <p className="error">{"Please check the lawyer's firm"}</p>
          )}
        </div>
      </div>

      <fieldset name="address">
        <legend>Address</legend>
        <div className="field">
          <label htmlFor={`address.number`} className="label">
            Number
          </label>
          <div className="control">
            <input
              id={`address.number`}
              type="text"
              className="input"
              name={`address.number`}
              ref={register({ required: true })}
            />
            {errors && errors[`address.number`] && (
              <p className="error">{"Please check the lawyer's address"}</p>
            )}
          </div>
        </div>

        <div className="field">
          <label htmlFor={`address.street`} className="label">
            Street
          </label>
          <div className="control">
            <input
              id={`address.street`}
              type="text"
              className="input"
              name={`address.street`}
              ref={register({ required: true })}
            />
            {errors && errors[`address.street`] && (
              <p className="error">{"Please check the lawyer's address"}</p>
            )}
          </div>
        </div>

        <div className="field">
          <label htmlFor={`address.county`} className="label">
            County
          </label>
          <div className="control">
            <input
              id={`address.county`}
              type="text"
              className="input"
              name={`address.county`}
              ref={register({ required: true })}
            />
            {errors && errors[`address.county`] && (
              <p className="error">{"Please check the lawyer's address"}</p>
            )}
          </div>
        </div>

        <div className="field">
          <label htmlFor={`address.state`} className="label">
            State
          </label>
          <div className="control">
            <input
              id={`address.state`}
              type="text"
              className="input"
              name={`address.state`}
              ref={register({ required: true })}
            />
            {errors && errors[`address.state`] && (
              <p className="error">{"Please check the lawyer's address"}</p>
            )}
          </div>
        </div>

        <div className="field">
          <label htmlFor={`address.postCode`} className="label">
            ZIP
          </label>
          <div className="control">
            <input
              id={`address.postCode`}
              type="text"
              className="input"
              name={`address.postCode`}
              ref={register({ required: true })}
            />
            {errors && errors[`address.postCode`] && (
              <p className="error">{"Please check the lawyer's address"}</p>
            )}
          </div>
        </div>

        <div className="field">
          <label htmlFor={`address.country`} className="label">
            Country
          </label>
          <div className="control">
            <input
              id={`address.country`}
              type="text"
              className="input"
              name={`address.country`}
              ref={register({ required: true })}
            />
            {errors && errors[`address.country`] && (
              <p className="error">{"Please check the lawyer's address"}</p>
            )}
          </div>
        </div>
      </fieldset>
    </>
  );
}
