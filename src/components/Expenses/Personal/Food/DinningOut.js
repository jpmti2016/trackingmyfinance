import React from "react";

export default function DinningOut({ register, errors }) {
  return (
    <>
      <div className="field">
        <label htmlFor="amount" className="label">
          Amount
        </label>
        <div className="control">
          <input
            type="text"
            className="input"
            name="amount"
            id="amount"
            ref={register({ required: true })}
          />
          {errors && errors[`amount`] && (
            <p className="error">{"Please check the amount field"}</p>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="dueDate" className="label">
          Due Date
        </label>
        <div className="control">
          <input
            type="datetime-local"
            className="input"
            name="dueDate"
            id="dueDate"
            ref={register({ required: true })}
          />
          {errors && errors[`dueDate`] && (
            <p className="error">{"Please check the dueDate field"}</p>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="place" className="label">
          Place
        </label>
        <div className="control">
          <input
            type="text"
            className="input"
            name="place"
            id="place"
            ref={register({ required: true })}
          />
          {errors && errors[`place`] && (
            <p className="error">{"Please check the place field"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="foodTitle" className="label">
          Title
        </label>
        <div className="control">
          <input
            type="text"
            className="input"
            name="foodTitle"
            id="foodTitle"
            ref={register({ required: true })}
          />
          {errors && errors[`foodTitle`] && (
            <p className="error">{"Please check the title"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="foodNotes" className="label">
          Notes
        </label>
        <div className="control">
          <textarea
            className="textarea"
            name="foodNotes"
            id="foodNotes"
            ref={register({ required: true })}
          />
          {errors && errors[`foodNotes`] && (
            <p className="error">{"Please check the notes"}</p>
          )}
        </div>
      </div>
    </>
  );
}
