import React from "react";
import "./EducationAcademicFeeFieldsArray.css";
import { useFieldArray } from "react-hook-form";

export default function EducationAcademicFeeFieldsArray({
  register,
  control,
  errors
}) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "fees"
  });

  return (
    <>
      {fields.length > 0 && (
        <div className="field">
          <div className="control">
            <label htmlFor="" className="label">
              Fee List
            </label>
          </div>
        </div>
      )}

      {fields.map((item, index) => {
        const fieldName = `fees[${index}]`;
        return (
          <fieldset name={fieldName} key={fieldName}>
            <legend>{`Fee ${index + 1}`}</legend>

            <div className="field">
              <label htmlFor={`${fieldName}.tuitionAndFees`} className="label">
                Tuition and fees
              </label>
              <div className="control">
                <input
                  id={`${fieldName}.tuitionAndFees`}
                  type="number"
                  className="input"
                  name={`${fieldName}.tuitionAndFees`}
                  ref={register}
                  defaultValue={`${item.tuitionAndFees}`}
                />
                {errors[`${fieldName}.tuitionAndFees`] && (
                  <p className="error">{"Please check the tuition and fees"}</p>
                )}
              </div>
            </div>

            <div className="field">
              <label
                htmlFor={`${fieldName}.booksAndSupplies`}
                className="label"
              >
                Books and supplies
              </label>
              <div className="control">
                <input
                  id={`${fieldName}.booksAndSupplies`}
                  type="number"
                  className="input"
                  name={`${fieldName}.booksAndSupplies`}
                  ref={register}
                  defaultValue={`${item.booksAndSupplies}`}
                />
                {errors[`${fieldName}.booksAndSupplies`] && (
                  <p className="error">
                    {"Please check the books and supplies"}
                  </p>
                )}
              </div>
            </div>

            <div className="field">
              <label htmlFor={`${fieldName}.roomAndBoard`} className="label">
                Room and board
              </label>
              <div className="control">
                <input
                  id={`${fieldName}.roomAndBoard`}
                  type="number"
                  className="input"
                  name={`${fieldName}.roomAndBoard`}
                  ref={register}
                  defaultValue={`${item.roomAndBoard}`}
                />
                {errors[`${fieldName}.roomAndBoard`] && (
                  <p className="error">{"Please check the room and board"}</p>
                )}
              </div>
            </div>

            <div className="field">
              <label htmlFor={`${fieldName}.transportation`} className="label">
                Transportation
              </label>
              <div className="control">
                <input
                  id={`${fieldName}.transportation`}
                  type="number"
                  className="input"
                  name={`${fieldName}.transportation`}
                  ref={register}
                  defaultValue={`${item.transportation}`}
                />
                {errors[`${fieldName}.transportation`] && (
                  <p className="error">{"Please check the transportation"}</p>
                )}
              </div>
            </div>

            <div className="field">
              <label htmlFor={`${fieldName}.personal`} className="label">
                Personal
              </label>
              <div className="control">
                <input
                  id={`${fieldName}.personal`}
                  type="number"
                  className="input"
                  name={`${fieldName}.personal`}
                  ref={register}
                  defaultValue={`${fieldName}.personal`}
                />
                {errors[`${fieldName}.personal`] && (
                  <p className="error">{"Please check the personal"}</p>
                )}
              </div>
            </div>

            <button
              type="button"
              className="button is-danger is-outlined"
              onClick={() => remove(index)}
            >
              {" "}
              Remove
            </button>
          </fieldset>
        );
      })}

      <div className="buttoms">
        <button
          className="button is-outlined cta-sec"
          onClick={() =>
            append({
              tuitionAndFees: "",
              booksAndSupplies: "",
              roomAndBoard: "",
              transportation: "",
              personal: ""
            })
          }
        >
          Add Fee
        </button>

        {fields.length > 0 && (
          <button
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
