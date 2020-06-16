import React from "react";
// import GroceryProductFieldsArray from "./GroceryProductFieldsArray";
export default function GroceryFields({
  watchGroceryInfo,
  register,
  control,
  errors,
}) {
  return (
    <>
      <div className="field">
        <label htmlFor="dueDate" className="label">
          Date
        </label>
        <div className="control">
          <input
            type="datetime-local"
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
        <label htmlFor="foodTitle" className="label">
          Title
        </label>
        <div className="control">
          <input
            type="text"
            className="input"
            name="foodTitle"
            id="foodTitle"
            ref={register({ required: true })}
          />
          {errors && errors[`foodTitle`] && (
            <p className="error">{"Please check the title"}</p>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="foodNotes" className="label">
          Notes
        </label>
        <div className="control">
          <textarea
            className="textarea"
            name="foodNotes"
            id="foodNotes"
            ref={register({ required: true })}
          />
        </div>
        {errors && errors[`foodNotes`] && (
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
              defaultChecked={watchGroceryInfo === "TOTAL"}
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
          <label htmlFor="amount" className="label">
            Amount
          </label>
          <div className="control">
            <input
              id="amount"
              type="number"
              step="0.01"
              className="input"
              name="amount"
              ref={register}
            />
          </div>
          {errors && errors[`amount`] && (
            <p className="error">{"Please check the total"}</p>
          )}
        </div>
      ) : (
        <p>Products will be added from expense list</p>
        // <GroceryProductFieldsArray
        //   register={register}
        //   control={control}
        //   errors={errors}
        // />
      )}
    </>
  );
}
