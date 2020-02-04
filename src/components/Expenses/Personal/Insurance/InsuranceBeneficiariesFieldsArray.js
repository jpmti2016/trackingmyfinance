import React from "react";
import "./InsuranceBeneficiariesFieldsArray.css";
import { useFieldArray } from "react-hook-form";

export default function InsuranceBeneficiariesFieldsArray({
  register,
  control,
  errors
}) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "beneficiaries"
  });
  return (
    <>
      {fields.length > 0 && (
        <div className="field">
          <div className="control">
            <label htmlFor="" className="label">
              Beneficiaries List
            </label>
          </div>
        </div>
      )}
      <ul className="field">
        {fields.map((item, index) => {
          let fieldName = `beneficiaries[${index}]`;
          return (
            <fieldset key={fieldName} name={fieldName}>
              <legend>{`Benefiary ${index + 1}`}</legend>
              <div className="field">
                <label htmlFor={`${fieldName}.name`} className="label">
                  Name
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name={`${fieldName}.name`}
                    ref={register({})}
                    defaultValue={`${item.name}`}
                  />
                  {errors && errors[`${fieldName}.name`] && (
                    <p className="error">
                      {"Please check the beneficiary's name"}
                    </p>
                  )}
                </div>
              </div>

              <div className="field">
                <label htmlFor={`${fieldName}.lastName`} className="label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="input"
                  name={`${fieldName}.lastName`}
                  ref={register({})}
                  defaultValue={`${item.lastName}`}
                />
                {errors && errors[`${fieldName}.lastName`] && (
                  <p className="error">
                    {"Please check the beneficiary's lastName"}
                  </p>
                )}
              </div>

              <button
                type="button"
                className="button is-danger is-outlined"
                onClick={() => remove(index)}
              >
                Delete
              </button>
            </fieldset>
          );
        })}
      </ul>
      <div className="buttoms">
        <button
          type="button"
          className="button is-outlined cta-sec"
          onClick={() =>
            append({
              name: "",
              lastName: ""
            })
          }
        >
          Add Beneficiary
        </button>

        {fields.length > 0 && (
          <button
            type="button"
            className="button is-danger is-outlined"
            onClick={() => remove()}
          >
            Empty List
          </button>
        )}
      </div>
    </>
  );
}
