import React from "react";
import "./GroceryProductFieldsArray.css";
import { useFieldArray } from "react-hook-form";

export default function GroceryProductFieldsArray({
  register,
  control,
  errors,
}) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });

  return (
    <>
      {fields.length > 0 && (
        <div className="field">
          <div className="control">
            <label className="label" htmlFor="">
              Product List
            </label>
          </div>
        </div>
      )}

      {fields.map((item, index) => {
        const fieldName = `products[${index}]`;
        return (
          <fieldset name={fieldName} key={fieldName}>
            <legend>{`Product ${index + 1}`}</legend>

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
                  <p className="error">{"Please check the product's name"}</p>
                )}
              </div>
            </div>

            <div className="field">
              <label htmlFor={`${fieldName}.price`} className="label">
                Price
              </label>
              <div className="control">
                <input
                  id={`${fieldName}.price`}
                  type="number"
                  step="0.01"
                  className="input"
                  name={`${fieldName}.price`}
                  ref={register({ required: true })}
                  defaultValue={`${item.price}`}
                />
                {errors && errors[`${fieldName}.price`] && (
                  <p className="error">{"Please check the product's price"}</p>
                )}
              </div>
            </div>

            <div className="field">
              <label htmlFor={`${fieldName}.quantity`} className="label">
                Quantity
              </label>
              <div className="control">
                <input
                  id={`${fieldName}.quantity`}
                  type="number"
                  step="0.01"
                  className="input"
                  name={`${fieldName}.quantity`}
                  ref={register({ required: true })}
                  defaultValue={`${item.quantity}`}
                />
                {errors && errors[`${fieldName}.quantity`] && (
                  <p className="error">{"Please check the product's count"}</p>
                )}
              </div>
            </div>

            <div className="field">
              <label htmlFor="frequency" className="label">
                Frequency
              </label>
              <div className="control">
                <div className="select">
                  <select
                    name="frequency"
                    id="frequency"
                    ref={register({ required: true })}
                    defaultValue={`${item.frequency}`}
                  >
                    <option value="">--Select--</option>
                    <option value="YEARLY">Yearly</option>
                    <option value="MONTHLY">Monthly</option>
                    <option value="BEWEEKLY">Beweekly</option>
                    <option value="WEEKLY">Weekly</option>
                    <option value="DAILY">Daily</option>
                    <option value="HOURLY">Hourly</option>
                    <option value="ONETIME">Onetime</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
                {errors && errors[`${fieldName}.frequency`] && (
                  <p className="error">{"Please select product's frequency"}</p>
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
            append({ name: "", price: "", quantity: "", frequency: "" })
          }
        >
          Add Product
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
