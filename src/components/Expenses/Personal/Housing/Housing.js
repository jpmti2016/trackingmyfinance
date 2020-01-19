import React from "react";

import SupplyFields from "./SupplyFields";
import UtilityRadioGroup from "./UtilityRadioGroup";
import UtiliyFields from "./UtiliyFields";
import HomeFields from "./HomeFields";
import OtherFields from "./OtherFields";

export default function HousingFields({
  watchHousing,
  watchUtility,
  register
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
              <option value="Select">Select</option>
              <option value="Utilities">Utilities</option>
              <option value="Supplies">Supplies</option>
              <option value="Home">Home</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {watchHousing === "Utilities" && (
        <UtilityRadioGroup register={register} />
      )}
      {watchHousing === "Utilities" && watchUtility && (
        <UtiliyFields watchUtility={watchUtility} register={register} />
      )}

      {watchHousing === "Supplies" && <SupplyFields register={register} />}

      {watchHousing === "Home" && <HomeFields register={register} />}

      {watchHousing === "Other" && <OtherFields register={register} />}
    </>
  );
}
