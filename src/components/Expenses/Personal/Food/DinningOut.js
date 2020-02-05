import React from "react";

export default function DinningOut({ register, errors }) {
  return (
    <>
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
        <label htmlFor="dinningOutTitle" className="label">
          Title
        </label>
        <div className="control">
          <input
            type="text"
            className="input"
            name="dinningOutTitle"
            id="dinningOutTitle"
            ref={register({ required: true })}
          />
          {errors && errors[`dinningOutTitle`] && (
            <p className="error">{"Please check the title"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="dinningOutNotes" className="label">
          Notes
        </label>
        <div className="control">
          <textarea
            className="textarea"
            name="dinningOutNotes"
            id="dinningOutNotes"
            ref={register({ required: true })}
          />
          {errors && errors[`dinningOutNotes`] && (
            <p className="error">{"Please check the notes"}</p>
          )}
        </div>
      </div>
    </>
  );
}
