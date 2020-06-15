import React from "react";

export default function AcademicFeeFields({ register, errors }) {
  return (
    <>
      <fieldset name={"period"}>
        <legend>{`Period`}</legend>
        <div className="field">
          <div className="control">
            <label htmlFor={`billingStart`} className="label">
              Start
            </label>
            <input
              type="datetime-local"
              className="input"
              placeholder="2020/01/15"
              name={`billingStart`}
              id={`billingStart`}
              ref={register}
            />
            {errors.billingStart && (
              <p className="error">{"Please select a date"}</p>
            )}
          </div>

          <div className="control">
            <label htmlFor={`billingEnd`} className="label">
              End
            </label>
            <input
              type="datetime-local"
              className="input"
              placeholder="End"
              name={`billingEnd`}
              id={`billingEnd`}
              ref={register}
            />
            {errors.edPeriodEnd && (
              <p className="error">{"Please select a date"}</p>
            )}
          </div>
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor={`tuitionAndFees`} className="label">
          Tuition and fees
        </label>
        <div className="control">
          <input
            id={`tuitionAndFees`}
            type="number"
            className="input"
            name={`tuitionAndFees`}
            ref={register}
          />
          {errors[`tuitionAndFees`] && (
            <p className="error">{"Please check the tuition and fees"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`booksAndSupplies`} className="label">
          Books and supplies
        </label>
        <div className="control">
          <input
            id={`booksAndSupplies`}
            type="number"
            className="input"
            name={`booksAndSupplies`}
            ref={register}
          />
          {errors[`booksAndSupplies`] && (
            <p className="error">{"Please check the books and supplies"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`roomAndBoard`} className="label">
          Room and board
        </label>
        <div className="control">
          <input
            id={`roomAndBoard`}
            type="number"
            className="input"
            name={`roomAndBoard`}
            ref={register}
          />
          {errors[`roomAndBoard`] && (
            <p className="error">{"Please check the room and board"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`transportation`} className="label">
          Transportation
        </label>
        <div className="control">
          <input
            id={`transportation`}
            type="number"
            className="input"
            name={`transportation`}
            ref={register}
          />
          {errors[`transportation`] && (
            <p className="error">{"Please check the transportation"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`personal`} className="label">
          Personal
        </label>
        <div className="control">
          <input
            id={`personal`}
            type="number"
            className="input"
            name={`personal`}
            ref={register}
            defaultValue={`personal`}
          />
          {errors[`personal`] && (
            <p className="error">{"Please check the personal"}</p>
          )}
        </div>
      </div>
    </>
  );
}
