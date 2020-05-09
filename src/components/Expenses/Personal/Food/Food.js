import React from "react";

import GroceryFields from "./Grocery";
import DinningOut from "./DinningOut";
export default function FoodFields({
  register,
  watchFood,
  watchGroceryInfo,
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
            <select name="nature" ref={register({ required: true })}>
              <option value="">--Select--</option>
              <option value="GROCERY">Grocery</option>
              <option value="DINNINGOUT">DinningOut</option>
            </select>
          </div>
          {errors.personal && (
            <p className="error">{"Please select a food expense nature"}</p>
          )}
        </div>
      </div>
      {watchFood === "DINNINGOUT" && <DinningOut register={register} />}

      {watchFood === "GROCERY" && (
        <GroceryFields
          register={register}
          watchGroceryInfo={watchGroceryInfo}
          control={control}
          errors={errors}
        />
      )}
    </>
  );
}
