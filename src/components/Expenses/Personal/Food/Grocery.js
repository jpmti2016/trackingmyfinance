import React from "react";
import GroceryProductFieldsArray from "./GroceryProductFieldsArray";
export default function GroceryFields({ watchGroceryCost, register }) {
  return (
    <>
      <div className="field">
        <label htmlFor="groceryDate" className="label">
          Date
        </label>
        <div className="control">
          <input
            type="date"
            className="input"
            name="groceryDate"
            id="groceryDate"
            ref={register({ required: true })}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="groceryStore" className="label">
          Store
        </label>
        <div className="control">
          <input
            type="text"
            className="input"
            name="groceryStore"
            id="groceryStore"
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
            name="notes"
            id="notes"
            ref={register({ required: true })}
          />
        </div>
      </div>

      <div className="field is-grouped is-grouped-multiline">
        <div className="control">
          <label htmlFor="Total" className="label">
            <input
              id="Total"
              type="radio"
              name="groceryCost"
              value="Total"
              ref={register}
            />
            Total
          </label>
        </div>
        <div className="control">
          <label htmlFor="Details" className="label">
            <input
              id="Details"
              type="radio"
              name="groceryCost"
              value="Details"
              ref={register}
            />
            Details
          </label>
        </div>
      </div>

      {watchGroceryCost === "Total" ? (
        <div className="field">
          <label htmlFor="groceryTotal" className="label">Amount</label>
          <div className="control">
            <input
              id="groceryTotal"
              type="number"
              className="input"
              name="groceryTotal"
              ref={register}
            />
          </div>
        </div>
      ) : (
          <GroceryProductFieldsArray register={register} />
        )}
    </>
  );
}
