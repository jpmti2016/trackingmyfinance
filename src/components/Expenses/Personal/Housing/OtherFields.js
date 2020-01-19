import React from "react";

export default function OtherFields({ register }) {
  return (
    <>
      <div className="field">
        <label htmlFor="misc" className="label">
          Title
        </label>
        <input
          type="text"
          className="input"
          name="title"
          ref={register({ required: true })}
        />
      </div>
      <div className="field">
        <label htmlFor="dueDate" className="label">
          Due Date
        </label>
        <input type="date" className="input" name="dueDate" ref={register} />
      </div>

      <div className="field">
        <label htmlFor="amount" className="label">
          Amount
        </label>
        <input
          type="number"
          className="input"
          name="amount"
          ref={register({ required: true })}
        />
      </div>

      <div className="field">
        <label htmlFor="notes" className="label">
          Notes
        </label>
        <textarea className="textarea" name="notes" ref={register} />
      </div>
    </>
  );
}
