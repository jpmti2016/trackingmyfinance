import React from "react";
// import LegalLawyerFieldsArray from "./LegalLawyerFieldsArray";

export default function LegalFields({
  register,
  watchLawyerOption,
  control,
  errors,
}) {
  return (
    <>
      <div className="field">
        <label htmlFor="nature" className="label">
          Nature
        </label>
        <div className="control">
          <div className="select">
            <select
              name="nature"
              id="nature"
              ref={register({ required: true })}
            >
              <option value="">--Select--</option>
              <option value="DOCUMENTS">Documents</option>
              <option value="INMIGRATION">Inmigration</option>
              <option value="WORK">Work</option>
              <option value="ACCIDENT">Accident</option>
              <option value="HOME">Home</option>
              <option value="PERSONAL">Personal</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          {errors && errors[`nature`] && (
            <p className="error">{"Please select the legal nature"}</p>
          )}
        </div>
      </div>
      <div className="field">
        <label className="label">Due Date</label>
        <div className="control">
          <input
            type="date"
            className="input"
            name="dueDate"
            ref={register({ required: true })}
          />
          {errors && errors[`dueDate`] && (
            <p className="error">{"Please select the due date"}</p>
          )}
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
          {errors && errors[`amount`] && (
            <p className="error">{"Please check the amount"}</p>
          )}
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
            ref={register}
          />
          {errors && errors[`title`] && (
            <p className="error">{"Please check the title"}</p>
          )}
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
        {errors && errors[`notes`] && (
          <p className="error">{"Please check the notes"}</p>
        )}
      </div>
      {/* Each lawyer will be added from the lawyer list */}
      {/* <LegalLawyerFieldsArray
        register={register}
        control={control}
        errors={errors}
      /> */}
    </>
  );
}
