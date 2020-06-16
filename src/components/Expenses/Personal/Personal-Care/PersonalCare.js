import React from "react";

export default function PersonalCareFields({ register, errors }) {
  return (
    <>
      <div className="field">
        <label htmlFor="nature" className="label">
          Type
        </label>
        <div className="control">
          <div className="select">
            <select
              name="nature"
              id="nature"
              ref={register({ required: true })}
            >
              <option value="">--Select--</option>
              <option value="HAIRCUT">Haircuts</option>
              <option value="GIMN">Gimn</option>
              <option value="EMERGENCY">Emergency</option>
              <option value="TRAVEL">Travel</option>
              <option value="CLOTHING">Clothing</option>
              <option value="CLUBS">Clubs</option>
            </select>
          </div>
          {errors.amount && <p className="error">{"Please check the type"}</p>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="amount" className="label">
          Amount
        </label>
        <div className="control">
          <input
            id="amount"
            type="number"
            step="0.01"
            className="input"
            name="amount"
            ref={register}
          />

          {errors.amount && (
            <p className="error">{"Please check the amount"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="dueDate" className="label">
          Date
        </label>
        <div className="control">
          <input
            id="dueDate"
            type="datetime-local"
            className="input"
            name="dueDate"
            ref={register}
          />
          {errors.dueDate && (
            <p className="error">{"Please select the date"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="title" className="label">
          Title
        </label>
        <div className="control">
          <input
            id="title"
            type="text"
            className="input"
            name="title"
            ref={register({ required: true })}
          />
          {errors.title && <p className="error">{"Please check the title"}</p>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="notes" className="label">
          Notes
        </label>
        <div className="control">
          <textarea
            name="notes"
            id="notes"
            className="textarea"
            ref={register}
          />
          {errors.notes && <p className="error">{"Please check the notes"}</p>}
        </div>
      </div>
    </>
  );
}
