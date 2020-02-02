import React from "react";

import SupplyFields from "./SupplyFields";
import UtilityRadioGroup from "./UtilityRadioGroup";
import UtiliyFields from "./UtiliyFields";
import HomeFields from "./HomeFields";
import OtherFields from "./OtherFields";

export default function HousingFields({
  watchHousing,
  watchUtility,
  register,
  errors,
  expense,
  isUpdating
}) {
  return (
    <>
      <div className="field">
        <label htmlFor="housing" className="label">
          Housing
        </label>
        <div className="control">
          <div className="select">
            <select name="housing" ref={register({ required: true })}>
              ><option value="">--Select--</option>
              <option value="UTILITIES">Utilities</option>
              <option value="SUPPLIES">Supplies</option>
              <option value="HOME">Home</option>
              <option value="REPAIR">REPAIR</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          {errors && errors.housing && (
            <p className="error">{"Please select a housing type"}</p>
          )}
        </div>
      </div>

      {watchHousing === "UTILITIES" && (
        <UtilityRadioGroup register={register} />
      )}
      {watchHousing === "UTILITIES" && watchUtility && (
        <UtiliyFields
          watchUtility={watchUtility}
          register={register}
          expense={expense}
          isUpdating={isUpdating}
          errors={errors}
        />
      )}

      {watchHousing === "SUPPLIES" && (
        <SupplyFields register={register} expense={expense} errors={errors} />
      )}

      {watchHousing === "Home" && (
        <HomeFields register={register} expense={expense} errors={errors} />
      )}

      {watchHousing === "HOME" && (
        <OtherFields register={register} expense={expense} errors={errors} />
      )}
    </>
  );
}
