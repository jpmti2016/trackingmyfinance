import React from "react";
import "./LegalLawyerFieldsArray.css";
import { useFieldArray } from "react-hook-form";

export default function LegalLawyerFieldsArray({ register, control, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "lawyers"
  });

  return (
    <>
      {fields.length > 0 && (
        <div className="field">
          <div className="control">
            <label className="label" htmlFor="">
              Lawyer List
            </label>
          </div>
        </div>
      )}

      {fields.map((item, index) => {
        const fieldName = `lawyers[${index}]`;
        return (
          <fieldset name={fieldName} key={fieldName}>
            <legend>{`Lawyer ${index + 1}`}</legend>

            <div className="field">
              <label htmlFor={`${fieldName}.fee`} className="label">
                Fee
              </label>
              <div className="control">
                <input
                  id={`${fieldName}.fee`}
                  type="number"
                  className="input"
                  name={`${fieldName}.fee`}
                  ref={register({})}
                  defaultValue={`${item.fee}`}
                />
                {errors && errors[`${fieldName}.fee`] && (
                  <p className="error">{"Please check the lawyer's fee"}</p>
                )}
              </div>
            </div>

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
                  <p className="error">{"Please check the lawyer's name"}</p>
                )}
              </div>
            </div>

            <div className="field">
              <label htmlFor={`${fieldName}.lastName`} className="label">
                Last Name
              </label>
              <div className="control">
                <input
                  id={`${fieldName}.lastName`}
                  type="text"
                  className="input"
                  name={`${fieldName}.lastName`}
                  ref={register({ required: true })}
                  defaultValue={`${item.name}`}
                />
                {errors && errors[`${fieldName}.lastName`] && (
                  <p className="error">
                    {"Please check the lawyer's lastName"}
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
                  <p className="error">{"Please check the lawyer's phone"}</p>
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
                  <p className="error">{"Please check the lawyer's email"}</p>
                )}
              </div>
            </div>

            <div className="field">
              <label htmlFor={`${fieldName}.firm`} className="label">
                Firm
              </label>
              <div className="control">
                <input
                  id={`${fieldName}.firm`}
                  type="text"
                  className="input"
                  name={`${fieldName}.firm`}
                  ref={register({ required: true })}
                  defaultValue={`${item.firm}`}
                />
                {errors && errors[`${fieldName}.firm`] && (
                  <p className="error">{"Please check the lawyer's firm"}</p>
                )}
              </div>
            </div>

            {/* Make address and lawyer editable in it own window portal ?? */}

            {/* <div className="field">
              <label htmlFor={`${fieldName}.address`} className="label">
                Address
              </label>
              <div className="control">
                <input
                  id={`${fieldName}.address`}
                  type="text"
                  className="input"
                  name={`${fieldName}.address`}
                  ref={register({ required: true })}
                  defaultValue={`${item.address["id"]}`}
                />
                {errors && errors[`${fieldName}.address`] && (
                  <p className="error">{"Please check the lawyer's address"}</p>
                )}
              </div>
            </div> */}

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
            append({
              fee: "",
              name: "",
              lastName: "",
              phone: "",
              email: "",
              firm: ""
            })
          }
        >
          Add Lawyer
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
