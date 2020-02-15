import React from "react";

export default function UtilityRadioGroup({ register }) {
  return (
    <div className="field is-grouped is-grouped-multiline">
      <div className="control">
        <label htmlFor="water" className="label">
          <input type="radio" name="utility" value="WATER" ref={register} />
          Water
        </label>
      </div>
      <div className="control">
        <label htmlFor="power" className="label">
          <input type="radio" name="utility" value="POWER" ref={register} />
          Power
        </label>
      </div>
      <div className="control">
        <label htmlFor="gas" className="label">
          <input
            type="radio"
            placeholder="gas"
            name="utility"
            value="GAS"
            ref={register}
          />
          Gas
        </label>
      </div>
      <div className="control">
        <label htmlFor="internet" className="label">
          <input
            type="radio"
            placeholder="internet"
            name="utility"
            value="INTERNET"
            ref={register}
          />
          Internet
        </label>
      </div>
      <div className="control">
        <label htmlFor="cable" className="label">
          <input
            type="radio"
            placeholder="cable"
            name="utility"
            value="CABLE"
            ref={register}
          />
          Cable
        </label>
      </div>
      <div className="control">
        <label htmlFor="phone" className="label">
          <input
            type="radio"
            placeholder="phone"
            name="utility"
            value="PHONE"
            ref={register}
          />
          Phone
        </label>
      </div>
    </div>
  );
}
