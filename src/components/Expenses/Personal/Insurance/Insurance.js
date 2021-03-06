import React from "react";
// import InsuranceBeneficiariesFieldsArray from "./InsuranceBeneficiariesFieldsArray";
export default function InsuranceFields({
  watchInsurance,
  register,
  errors,
  control,
}) {
  return (
    <>
      <div className="field">
        <label htmlFor="nature" className="label">
          Nature
        </label>
        <div className="control">
          <div className="select">
            <select name="nature" id="nature" ref={register}>
              <option value="">Select</option>
              <option value="HOME">Home</option>
              <option value="CAR">Car</option>
              <option value="HEALTH">Health</option>
              <option value="DENTAL">Dental</option>
              <option value="VISION">Vision</option>
              <option value="LIFE">Life</option>
              <option value="DISABILITY">Disability</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          {errors.nature && (
            <p className="error">{"Please select a insurance type"}</p>
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
            placeholder="10/01/2018"
            ref={register({ required: true })}
          />
          {errors.dueDate && (
            <p className="error">{"Please select the due date"}</p>
          )}
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
          {errors.title && <p className="error">{"Please check the title"}</p>}
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
        {errors.notes && <p className="error">{"Please check the notes"}</p>}
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
          {errors.coverage && (
            <p className="error">{"Please check the coverage"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="startDate" className="label">
          Start Date
        </label>
        <div className="control">
          <input
            type="datetime-local"
            className="input"
            name="startDate"
            id="startDate"
            placeholder="10/01/2018"
            ref={register({ required: true })}
          />
          {errors.startDate && (
            <p className="error">{"Please select the start date"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="yearDeductions" className="label">
          Year Deductions
        </label>
        <div className="control">
          <input
            type="number"
            step="0.01"
            className="input"
            name="yearDeductions"
            id="yearDeductions"
            placeholder="26 (Deduction(s)/Year)"
            ref={register({ required: true })}
          />
          {errors.yearDeductions && (
            <p className="error">{"Please check the year deductions"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="amount" className="label">
          Personal Cost
        </label>
        <div className="control">
          <input
            type="number"
            step="0.01"
            className="input"
            placeholder="30.49"
            name="amount"
            id="amount"
            ref={register}
          />
          {errors.amount && (
            <p className="error">{"Please check the personal cost"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="insuranceCompany" className="label">
          Insurance Company
        </label>
        <div className="control">
          <input
            type="text"
            className="input"
            placeholder="Mutual of Omaha"
            name="insuranceCompany"
            id="insuranceCompany"
            ref={register({ required: true })}
          />
        </div>
      </div>
      {/* The insurance beneficiaries will be added from the expense list */}
      {/* {(watchInsurance === "LIFE" ||
        watchInsurance === "DISABILITY" ||
        watchInsurance === "HOME" ||
        watchInsurance === "CAR" ||
        watchInsurance === "OTHER") && (
        <InsuranceBeneficiariesFieldsArray
          register={register}
          errors={errors}
          control={control}
        />
      )} */}
    </>
  );
}
