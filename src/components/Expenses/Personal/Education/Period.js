import React from "react";

export default function Period({ edType, register }) {
  return (
    <div className="field">
      <label htmlFor="" className="label">
        {edType === "College" ||
        edType === "Community College" ||
        edType === "Training"
          ? "Academic Period"
          : `${edType} Period`}
      </label>

      <div className="control">
        <label htmlFor={`${edType}PeriodStart`} className="label">
          Start
        </label>
        <input
          type="date"
          className="input"
          placeholder="Start"
          name={`${edType}PeriodStart`}
          ref={register}
        />
      </div>

      <div className="control">
        <label htmlFor={`${edType}PeriodEnd`} className="label">
          End
        </label>
        <input
          type="date"
          className="input"
          placeholder="End"
          name={`${edType}PeriodEnd`}
          ref={register}
        />
      </div>
    </div>
  );
}
