import React from "react";
import LegalLawyerFieldsArray from './LegalLawyerFieldsArray'

export default function LegalFields({ register, watchLawyerOption }) {
  return (
    <>
      <div className="field">
        <label htmlFor="nature" className="label">
          Nature
        </label>
        <div className="control">
          <div className="select">
            <select name="nature" id="nature" ref={register({ required: true })}>
              <option value="Select">Select</option>
              <option value="Documents">Documents</option>
              <option value="Inmigration">Inmigration</option>
              <option value="Work">Work</option>
              <option value="Accident">Accident</option>
              <option value="Home">Home</option>
              <option value="Personal">Personal</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Due Date</label>
        <div className="control">
          <input type="date" className="input" name="dueDate" ref={register} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="amount" className="label">
          Amount
        </label>
        <div className="control">
          <input
            type="number"
            id="amount"
            className="input"
            name="amount"
            ref={register({ required: true })}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="title" className="label">
          Title
        </label>
        <div className="control">
          <input
            type="text"
            id="title"
            className="input"
            name="title"
            ref={register({ required: true })}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="notes" className="label">
          Notes
        </label>
        <div className="control">
          <textarea
            id="notes"
            className="textarea"
            name="notes"
            ref={register}
          />
        </div>
      </div>

      <LegalLawyerFieldsArray register={register} />

    </>
  );
}
