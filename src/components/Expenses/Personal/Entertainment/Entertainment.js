import React from "react";
import EnterMentOther from "./EnterMentOther";

export default function EntertainmentFields({
  register,
  watchEnterMent,
  errors,
}) {
  return (
    <>
      <div className="field">
        <label htmlFor="nature" className="label">
          Nature
        </label>
        <div className="control">
          <div className="select">
            <select
              name="nature"
              id="nature"
              ref={register({ required: true })}
            >
              <option value="">--Select--</option>
              <option value="CONCERT">Concerts</option>
              <option value="SPORTINGEVENTS">Sporting Events</option>
              <option value="LIVETHEATER">Live Theater</option>
              <option value="MOVIES">Movies</option>
              <option value="SUBSCRIPTION">Subscription</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          {errors.nature && (
            <p className="error">{"Please check the nature"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="title" className="label">
          Title
        </label>
        <div className="control">
          <input
            id="title"
            type="text"
            className="input"
            name="title"
            ref={register({ required: true })}
          />
          {errors.title && <p className="error">{"Please check the title"}</p>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="notes" className="label">
          Notes
        </label>
        <div className="control">
          <textarea
            id="notes"
            className="textarea"
            name="notes"
            ref={register}
          />
        </div>
        {errors.notes && <p className="error">{"Please check the notes"}</p>}
      </div>

      <div className="field">
        <label htmlFor="amount" className="label">
          Amount
        </label>
        <div className="control">
          <input
            id="amount"
            type="text"
            className="input"
            name="amount"
            ref={register}
          />
          {errors.amount && (
            <p className="error">{"Please check the amount"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="dueDate" className="label">
          {watchEnterMent === "Subscription" ? `Due Date` : "Date"}
        </label>
        <div className="control">
          <input
            id="dueDate"
            type="datetime-local"
            className="input"
            name="dueDate"
            ref={register}
          />
          {errors.dueDate && <p className="error">{"Please check the date"}</p>}
        </div>
      </div>

      {/* {watchEnterMent === "OTHER" && (
        <EnterMentOther register={register} watchEnterMent={watchEnterMent} />
      )} */}
    </>
  );
}
