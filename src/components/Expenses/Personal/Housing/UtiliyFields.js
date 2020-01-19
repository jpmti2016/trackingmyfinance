import React from "react";

export default function UtiliyFields({ watchUtility, register }) {
  return (
    <>
      <div className="field">
        <label htmlFor={`${watchUtility}DueDate`} className="label">
          Due Date
        </label>
        <input
          type="date"
          className="input"
          name={`${watchUtility}DueDate`}
          id={`${watchUtility}DueDate`}
          ref={register}
        />
      </div>
      <div className="field">
        <label htmlFor={`${watchUtility}Bill`} className="label">
          Amount
        </label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="25"
            name={`${watchUtility}Bill`}
            id={`${watchUtility}Bill`}
            ref={register({ required: true, min: 10 })}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor={`${watchUtility}Title`} className="label">
          Title
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Late water bill"
            name={`${watchUtility}Title`}
            id={`${watchUtility}Title`}
            ref={register({ required: true, min: 10 })}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${watchUtility}Notes`} className="label">
          Notes
        </label>
        <div className="control">
          <textarea
            className="textarea"
            name={`${watchUtility}Notes`}
            id={`${watchUtility}Notes`}
            ref={register}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="" className="label">
          Billing Period
        </label>

        <div className="control">
          <label htmlFor={`${watchUtility}PeriodStart`} className="label">
            Start
          </label>
          <input
            type="date"
            className="input"
            placeholder="Start"
            name={`${watchUtility}PeriodStart`}
            id={`${watchUtility}PeriodStart`}
            ref={register}
          />
        </div>

        <div className="control">
          <label htmlFor={`${watchUtility}PeriodEnd`} className="label">
            End
          </label>
          <input
            type="date"
            className="input"
            placeholder="End"
            name={`${watchUtility}PeriodEnd`}
            id={`${watchUtility}PeriodEnd`}
            ref={register}
          />
        </div>
      </div>
      {(watchUtility === "water" ||
        watchUtility === "power" ||
        watchUtility === "gas") && (
          <div className="field">
            <label htmlFor={`${watchUtility}Reading`} className="label">
              Reading
          </label>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="123"
                name={`${watchUtility}Reading`}
                id={`${watchUtility}Reading`}
                ref={register}
              />
            </div>
          </div>
        )}
    </>
  );
}
