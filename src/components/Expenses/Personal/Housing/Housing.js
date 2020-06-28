import React from "react";

import SupplyFields from "./SupplyFields";
import UtilityRadioGroup from "./UtilityRadioGroup";
import UtiliyFields from "./UtiliyFields";
import HomeFields from "./HomeFields";
import RepairFields from "./RepairFields";
import OtherFields from "./OtherFields";

export default function HousingFields({
  watchHousing,
  watchUtility,
  register,
  errors,
  expense,
  isUpdating,
}) {
  return (
    <>
      <div className="field">
        <label htmlFor="nature" className="label">
          Housing
        </label>
        <div className="control">
          <div className="select">
            <select name="nature" ref={register({ required: true })}>
              <option value="">--Select--</option>
              <option value="UTILITY">Utilities</option>
              <option value="SUPPLY">Supplies</option>
              <option value="HOME">Home</option>
              <option value="REPAIR">Repair</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          {errors && errors.nature && (
            <p className="error">{"Please select a housing type"}</p>
          )}
        </div>
      </div>

      {watchHousing === "UTILITY" && <UtilityRadioGroup register={register} />}
      {watchHousing === "UTILITY" && watchUtility && (
        <UtiliyFields
          watchUtility={watchUtility}
          register={register}
          expense={expense}
          isUpdating={isUpdating}
          errors={errors}
        />
      )}

      {watchHousing === "SUPPLY" && (
        <SupplyFields register={register} expense={expense} errors={errors} />
      )}

      {watchHousing === "HOME" && (
        <HomeFields register={register} expense={expense} errors={errors} />
      )}

      {watchHousing === "REPAIR" && (
        <RepairFields register={register} expense={expense} errors={errors} />
      )}

      {watchHousing === "OTHER" && (
        <OtherFields register={register} expense={expense} errors={errors} />
      )}
    </>
  );
}
