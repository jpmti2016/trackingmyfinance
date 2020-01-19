import React from "react";
import InsuranceBeneficiariesFieldsArray from "./InsuranceBeneficiariesFieldsArray";
export default function InsuranceFields({ watchInsurance, register }) {
  return (
    <>
      <div className="field">
        <label htmlFor="nature" className="label">
          Nature
        </label>
        <div className="control">
          <div className="select">
            <select name="nature" id="nature" ref={register}>
              <option value="Select">Select</option>
              <option value="Home">Home</option>
              <option value="Car">Car</option>
              <option value="Health">Health</option>
              <option value="Dental">Dental</option>
              <option value="Vision">Vision</option>
              <option value="Life">Life</option>
              <option value="Disability">Disability</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="startDate" className="label">
          Start Date
        </label>
        <div className="control">
          <input
            type="date"
            className="input"
            name="startDate"
            placeholder="10/01/2018"
            ref={register({ required: true })}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="title" className="label">
          Plan Title
        </label>
        <div className="control">
          <input
            type="text"
            className="input"
            placeholder={
              watchInsurance === "Home" || watchInsurance === "Car"
                ? "Property insurance"
                : "Vision Insurance"
            }
            name="title"
            id="title"
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
            className="textarea"
            placeholder={
              watchInsurance === "Home" || watchInsurance === "Car"
                ? "Property insurance Personal Notes"
                : "Vision Insurance Personal Notes"
            }
            name="notes"
            id="notes"
            ref={register({ required: true })}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="coverage" className="label">
          Plan Coverage
        </label>
        <div className="control">
          <input
            type="text"
            className="input"
            name="coverage"
            id="coverage"
            placeholder={
              watchInsurance === "Home" || watchInsurance === "Car"
                ? "% of damage"
                : "60% of Base Salary (Max: $1,000/week)"
            }
            ref={register({ required: true })}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="yearDeductions" className="label">
          Year Deductions
        </label>
        <div className="control">
          <input
            type="number"
            className="input"
            name="yearDeductions"
            id="yearDeductions"
            placeholder="26 Deduction(s)/Year"
            ref={register({ required: true })}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="cost" className="label">
          Personal Cost
        </label>
        <div className="control">
          <input
            type="number"
            className="input"
            placeholder="30.49"
            name="cost"
            ref={register}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="company" className="label">
          Insurance Company
        </label>
        <div className="control">
          <input
            type="text"
            className="input"
            placeholder="Mutual of Omaha"
            name="company"
            id="company"
            ref={register({ required: true })}
          />
        </div>
      </div>

      {(watchInsurance === "Life" ||
        watchInsurance === "Disability" ||
        watchInsurance === "Home" ||
        watchInsurance === "Car" ||
        watchInsurance === "Other") && (
          <InsuranceBeneficiariesFieldsArray register={register} />
        )}
    </>
  );
}
