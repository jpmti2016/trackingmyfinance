import React from "react";

export default function BeneficiaryFields({ register, errors }) {
  return (
    <>
      <h1>Beneficiary form</h1>
      <div className="field">
        <label htmlFor={`name`} className="label">
          Name
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            name={`name`}
            ref={register({})}
          />
          {errors && errors[`name`] && (
            <p className="error">{"Please check the beneficiary's name"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`lastName`} className="label">
          Last Name
        </label>
        <input
          type="text"
          className="input"
          name={`lastName`}
          ref={register({})}
          defaultValue={`lastName}`}
        />
        {errors && errors[`lastName`] && (
          <p className="error">{"Please check the beneficiary's lastName"}</p>
        )}
      </div>

      <fieldset name="address">
        <legend>Address</legend>
        <div className="field">
          <label htmlFor={`number`} className="label">
            Number
          </label>
          <div className="control">
            <input
              id={`number`}
              type="text"
              className="input"
              name={`number`}
              ref={register({ required: true })}
            />
            {errors && errors[`number`] && (
              <p className="error">{"Please check the lawyer's address"}</p>
            )}
          </div>
        </div>

        <div className="field">
          <label htmlFor={`street`} className="label">
            Street
          </label>
          <div className="control">
            <input
              id={`street`}
              type="text"
              className="input"
              name={`street`}
              ref={register({ required: true })}
            />
            {errors && errors[`street`] && (
              <p className="error">{"Please check the lawyer's address"}</p>
            )}
          </div>
        </div>

        <div className="field">
          <label htmlFor={`county`} className="label">
            County
          </label>
          <div className="control">
            <input
              id={`county`}
              type="text"
              className="input"
              name={`county`}
              ref={register({ required: true })}
            />
            {errors && errors[`county`] && (
              <p className="error">{"Please check the lawyer's address"}</p>
            )}
          </div>
        </div>
        <div className="field">
          <label htmlFor={`region`} className="label">
            Region
          </label>
          <div className="control">
            <input
              id={`region`}
              type="text"
              className="input"
              name={`region`}
              ref={register({ required: true })}
            />
            {errors && errors[`region`] && (
              <p className="error">{"Please check the lawyer's address"}</p>
            )}
          </div>
        </div>

        <div className="field">
          <label htmlFor={`state`} className="label">
            State
          </label>
          <div className="control">
            <input
              id={`state`}
              type="text"
              className="input"
              name={`state`}
              ref={register({ required: true })}
            />
            {errors && errors[`state`] && (
              <p className="error">{"Please check the lawyer's address"}</p>
            )}
          </div>
        </div>

        <div className="field">
          <label htmlFor={`postCode`} className="label">
            ZIP
          </label>
          <div className="control">
            <input
              id={`postCode`}
              type="text"
              className="input"
              name={`postCode`}
              ref={register({ required: true })}
            />
            {errors && errors[`postCode`] && (
              <p className="error">{"Please check the lawyer's address"}</p>
            )}
          </div>
        </div>

        <div className="field">
          <label htmlFor={`country`} className="label">
            Country
          </label>
          <div className="control">
            <input
              id={`country`}
              type="text"
              className="input"
              name={`country`}
              ref={register({ required: true })}
            />
            {errors && errors[`country`] && (
              <p className="error">{"Please check the lawyer's address"}</p>
            )}
          </div>
        </div>
      </fieldset>
    </>
  );
}
