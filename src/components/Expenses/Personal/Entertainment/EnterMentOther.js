import React from "react";

export default function EnterMentOther({ register, watchEnterMent }) {
  return (
    <>
      <div className="field">
        <label htmlFor={`${watchEnterMent}Title`} className="label">
          Title
        </label>
        <input
          id={`${watchEnterMent}Title`}
          type="text"
          className="input"
          name={`${watchEnterMent}Title`}
          ref={register({ required: true })}
        />
      </div>

      <div className="field">
        <label htmlFor={`${watchEnterMent}amount`} className="label">
          Amount
        </label>
        <input
          id={`${watchEnterMent}amount`}
          type="number"
          step="0.01"
          className="input"
          name={`${watchEnterMent}amount`}
          ref={register({ required: true })}
        />
      </div>

      <div className="field">
        <label htmlFor={`${watchEnterMent}date`} className="label">
          Date
        </label>
        <div className="control">
          <input
            id={`${watchEnterMent}date`}
            type="datetime-local"
            className="input"
            name={`${watchEnterMent}date`}
            ref={register}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${watchEnterMent}notes`} className="label">
          Notes
        </label>
        <textarea
          id={`${watchEnterMent}notes`}
          className="textarea"
          name={`${watchEnterMent}notes`}
          ref={register}
        />
      </div>
    </>
  );
}
