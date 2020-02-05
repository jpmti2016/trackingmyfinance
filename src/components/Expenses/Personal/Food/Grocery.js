import React from "react";
import GroceryProductFieldsArray from "./GroceryProductFieldsArray";
export default function GroceryFields({
  watchGroceryInfo,
  register,
  control,
  errors
}) {
  return (
    <>
      <div className="field">
        <label htmlFor="dueDate" className="label">
          Date
        </label>
        <div className="control">
          <input
            type="date"
            className="input"
            name="dueDate"
            id="dueDate"
            ref={register({ required: true })}
          />
          {errors && errors[`dueDate`] && (
            <p className="error">{"Please select the food expense date"}</p>
          )}
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
          {errors && errors[`groceryStore`] && (
            <p className="error">
              {"Please select the food expense store field"}
            </p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="groceryTitle" className="label">
          Title
        </label>
        <div className="control">
          <input
            type="text"
            className="input"
            name="groceryTitle"
            id="groceryTitle"
            ref={register({ required: true })}
          />
          {errors && errors[`groceryTitle`] && (
            <p className="error">{"Please check the title"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="groceryNotes" className="label">
          Notes
        </label>
        <div className="control">
          <textarea
            className="textarea"
            name="groceryNotes"
            id="groceryNotes"
            ref={register({ required: true })}
          />
        </div>
        {errors && errors[`groceryNotes`] && (
          <p className="error">{"Please check the notes"}</p>
        )}
      </div>

      <div className="field is-grouped is-grouped-multiline">
        <div className="control">
          <label htmlFor="Total" className="label">
            <input
              id="Total"
              type="radio"
              name="groceryInfo"
              value="TOTAL"
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
              name="groceryInfo"
              value="DETAILS"
              ref={register}
            />
            Details
          </label>
        </div>
      </div>

      {watchGroceryInfo === "TOTAL" ? (
        <div className="field">
          <label htmlFor="groceryTotal" className="label">
            Amount
          </label>
          <div className="control">
            <input
              id="groceryTotal"
              type="number"
              className="input"
              name="groceryTotal"
              ref={register}
            />
          </div>
          {errors && errors[`groceryTotal`] && (
            <p className="error">{"Please check the total"}</p>
          )}
        </div>
      ) : (
        <GroceryProductFieldsArray
          register={register}
          control={control}
          errors={errors}
        />
      )}
    </>
  );
}
