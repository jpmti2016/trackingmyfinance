import React from "react";
import "./EducationInstructorFieldsArray.css";
import { useFieldArray } from "react-hook-form";

export default function EducationInstructorFieldsArray({
  register,
  control,
  errors
}) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "instructors"
  });

  return (
    <>
      {fields.length > 0 && (
        <div className="field">
          <div className="control">
            <label className="label" htmlFor="">
              Instructor List
            </label>
          </div>
        </div>
      )}

      {fields.map((item, index) => {
        const fieldName = `instructors[${index}]`;
        return (
          <fieldset name={fieldName} key={fieldName}>
            <legend>{`Instructor ${index + 1}`}</legend>

            <div className="field">
              <label htmlFor={`${fieldName}.name`} className="label">
                Name
              </label>
              <div className="control">
                <input
                  id={`${fieldName}.name`}
                  type="text"
                  className="input"
                  name={`${fieldName}.name`}
                  ref={register({ required: true })}
                  defaultValue={`${item.name}`}
                />
                {errors && errors[`${fieldName}.name`] && (
                  <p className="error">{"Please check the intructor's name"}</p>
                )}
              </div>
            </div>

            <div className="field">
              <label htmlFor={`${fieldName}.email`} className="label">
                Email
              </label>
              <div className="control">
                <input
                  id={`${fieldName}.email`}
                  type="email"
                  className="input"
                  name={`${fieldName}.email`}
                  ref={register({ required: true })}
                  defaultValue={`${item.email}`}
                />
                {errors && errors[`${fieldName}.email`] && (
                  <p className="error">
                    {"Please check the intructor's email"}
                  </p>
                )}
              </div>
            </div>

            <div className="field">
              <label htmlFor={`${fieldName}.webPage`} className="label">
                Personal Web Page
              </label>
              <div className="control">
                <input
                  id={`${fieldName}.webPage`}
                  type="text"
                  className="input"
                  name={`${fieldName}.webPage`}
                  ref={register({ required: true })}
                  defaultValue={`${item.webPage}`}
                />
                {errors && errors[`${fieldName}.webPage`] && (
                  <p className="error">
                    {"Please check the intructor's personal Web"}
                  </p>
                )}
              </div>
            </div>

            <div className="field">
              <label htmlFor={`${fieldName}.tweeter`} className="label">
                Tweeter
              </label>
              <div className="control">
                <input
                  id={`${fieldName}.tweeter`}
                  type="text"
                  className="input"
                  name={`${fieldName}.tweeter`}
                  ref={register({ required: true })}
                  defaultValue={`${item.tweeter}`}
                />
                {errors && errors[`${fieldName}.tweeter`] && (
                  <p className="error">
                    {"Please check the intructor's tweeter"}
                  </p>
                )}
              </div>
            </div>

            <div className="field">
              <label htmlFor={`${fieldName}.phone`} className="label">
                Phone
              </label>
              <div className="control">
                <input
                  id={`${fieldName}.phone`}
                  type="tel"
                  className="input"
                  name={`${fieldName}.phone`}
                  ref={register({ required: true })}
                  defaultValue={`${item.phone}`}
                />
                {errors && errors[`${fieldName}.phone`] && (
                  <p className="error">
                    {"Please check the intructor's phone"}
                  </p>
                )}
              </div>
            </div>

            <button
              type="button"
              className="button is-danger is-outlined"
              onClick={() => remove(index)}
            >
              Remove
            </button>
          </fieldset>
        );
      })}

      <div className="buttoms">
        <button
          type="button"
          className="button is-outlined cta-sec"
          onClick={() =>
            append({ phone: "", tweeter: "", name: "", email: "", webPage: "" })
          }
        >
          Add Instructor
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
