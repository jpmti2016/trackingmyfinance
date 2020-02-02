import React from "react";

export default function UtiliyFields({ watchUtility, register, errors, expense, isUpdating }) {
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
          ref={register({ required: true })}
          defaultValue={isUpdating && expense && expense.dueDate ? expense.dueDate : ""}
        />
        {(errors && errors[`${watchUtility}DueDate`]) && <p className="error">{"Please select a due date"}</p>}
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
            ref={register({ required: true, min: 1 })}
            defaultValue={isUpdating && expense && expense.amount ? expense.amount : ""}
          />
          {(errors && errors[`${watchUtility}Bill`]) && <p className="error">{"Please enter the amount"}</p>}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${watchUtility}Company`} className="label">
          Company
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Late water bill"
            name={`${watchUtility}Company`}
            id={`${watchUtility}Company`}
            ref={register({ min: 2 })}
            defaultValue={isUpdating && expense && expense.utility ? expense.utility.company : ""}
          />
          {(errors && errors[`${watchUtility}Company`]) && <p className="error">{"Please check the company"}</p>}

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
            placeholder="Title"
            name={`${watchUtility}Title`}
            id={`${watchUtility}Title`}
            ref={register({ min: 2 })}
            defaultValue={isUpdating && expense && expense.utility ? expense.utility.title : ""}

          />
          {(errors && errors[`${watchUtility}Title`]) && <p className="error">{"Please check the title"}</p>}

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
            defaultValue={isUpdating && expense && expense.utility ? expense.utility.notes : ""}

          />
        </div>
        {(errors && errors[`${watchUtility}Notes`]) && <p className="error">{"Please check the notes"}</p>}
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
            defaultValue={isUpdating && expense && expense.utility && expense.utility.period ? expense.utility.period.billigStart : ""}

          />
          {(errors && errors[`${watchUtility}PeriodStart`]) && <p className="error">{"Please check the Start Period"}</p>}
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
            defaultValue={isUpdating && expense && expense.utility && expense.utility.period ? expense.utility.period.billigEnd : ""}
          />
          {(errors && errors[`${watchUtility}PeriodEnd`]) && <p className="error">{"Please check the End Period"}</p>}
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
            {(errors && errors[`${watchUtility}Reading`]) && <p className="error">{"Please check the Reading"}</p>}
          </div>
        )}
    </>
  );
}
