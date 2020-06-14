import React from "react";

export default function Period({ edType, register, errors }) {
  return (
    <div className="field">
      <label htmlFor="" className="label">
        {edType === "COLLEGE" ||
        edType === "COMMUNITYCOLLEGE" ||
        edType === "TRAINING"
          ? "Academic Period"
          : `Period`}
      </label>

      <div className="control">
        <label htmlFor={`edPeriodStart`} className="label">
          Start
        </label>
        <input
          type="date"
          className="input"
          placeholder="Start"
          name="edPeriodStart"
          ref={register}
        />
        {errors.edPeriodStart && (
          <p className="error">{"Please select a date"}</p>
        )}
      </div>

      <div className="control">
        <label htmlFor={`edPeriodEnd`} className="label">
          End
        </label>
        <input
          type="date"
          className="input"
          placeholder="End"
          name={`edPeriodEnd`}
          ref={register}
        />
        {errors.edPeriodEnd && (
          <p className="error">{"Please select a date"}</p>
        )}
      </div>
    </div>
  );
}
