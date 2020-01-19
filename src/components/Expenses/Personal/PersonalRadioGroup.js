import React from "react";

export default function PersonalRadioGroup({ register }) {
  return (
    <>
      <h2 htmlFor="" className="subtitle">
        Personal
      </h2>

      <div className="control">
        <label htmlFor="" className="label">
          Category
        </label>
      </div>

      <div className="field is-grouped is-grouped-multiline">
        <div className="control">
          <label htmlFor="Housing" className="label">
            <input
              id="Housing"
              type="radio"
              name="personal"
              value="Housing"
              ref={register}
            />
            Housing
          </label>
        </div>
        <div className="control">
          <label htmlFor="Insurance" className="label">
            <input
              id="Insurance"
              type="radio"
              name="personal"
              value="Insurance"
              ref={register}
            />
            Insurance
          </label>
        </div>
        <div className="control">
          <label htmlFor="Legal" className="label">
            <input
              id="Legal"
              type="radio"
              name="personal"
              value="Legal"
              ref={register}
            />
            Legal
          </label>
        </div>

        <div className="control">
          <label htmlFor="Grocery" className="label">
            <input
              id="Grocery"
              type="radio"
              name="personal"
              value="Grocery"
              ref={register}
            />
            Grocery
          </label>
        </div>
      </div>
    </>
  );
}
