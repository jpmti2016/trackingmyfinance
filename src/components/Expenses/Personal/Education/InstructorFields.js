import React from "react";

export default function InstructorFields({ register, errors }) {
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
            <p className="error">{"Please check the intructor's name"}</p>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor={`lastName`} className="label">
          Last Name
        </label>
        <div className="control">
          <input
            id={`lastName`}
            type="text"
            className="input"
            name={`lastName`}
            ref={register}
          />
          {errors && errors[`lastName`] && (
            <p className="error">{"Please check the intructor's lastName"}</p>
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
            ref={register}
          />
          {errors && errors[`email`] && (
            <p className="error">{"Please check the intructor's email"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`webPage`} className="label">
          Personal Web Page
        </label>
        <div className="control">
          <input
            id={`webPage`}
            type="text"
            className="input"
            name={`webPage`}
            ref={register}
          />
          {errors && errors[`webPage`] && (
            <p className="error">
              {"Please check the intructor's personal Web"}
            </p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`tweeter`} className="label">
          Tweeter
        </label>
        <div className="control">
          <input
            id={`tweeter`}
            type="text"
            className="input"
            name={`tweeter`}
            ref={register}
          />
          {errors && errors[`tweeter`] && (
            <p className="error">{"Please check the intructor's tweeter"}</p>
          )}
        </div>
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
            <p className="error">{"Please check the intructor's phone"}</p>
          )}
        </div>
      </div>
    </>
  );
}
