import React from "react";

export default function UtilityRadioGroup({ register, expense, isUpdating }) {
  return (
    <div className="field is-grouped is-grouped-multiline">
      <div className="control">
        <label htmlFor="water" className="label">
          <input type="radio" name="utility" value="water" ref={register} defaultChecked={isUpdating && expense && expense.utility && expense.utility.selection.toLowerCase() === 'water' ? "water" : false} />
          Water
        </label>
      </div>
      <div className="control">
        <label htmlFor="power" className="label">
          <input type="radio" name="utility" value="power" ref={register} defaultChecked={isUpdating && expense && expense.utility && expense.utility.selection.toLowerCase() === 'power' ? "power" : false} />
          Power
        </label>
      </div>
      <div className="control">
        <label htmlFor="gas" className="label">
          <input
            type="radio"
            placeholder="gas"
            name="utility"
            value="gas"
            ref={register}
            defaultChecked={isUpdating && expense && expense.utility ? expense.utility.selection.toLowerCase() === 'gas' : false}
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
            value="internet"
            ref={register}
            defaultChecked={isUpdating && expense && expense.utility ? expense.utility.selection.toLowerCase() === 'internet' : false}
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
            value="cable"
            ref={register}
            defaultChecked={isUpdating && expense && expense.utility ? expense.utility.selection.toLowerCase() === 'cable' : false}
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
            value="phone"
            ref={register}
            defaultChecked={isUpdating && expense && expense.utility ? expense.utility.selection.toLowerCase() === 'phone' : false}
          />
          Phone
        </label>
      </div>
    </div>
  );
}
