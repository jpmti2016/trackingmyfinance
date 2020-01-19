import React from "react";
import EnterMentOther from "./EnterMentOther";

export default function EntertainmentFields({ register, watchEnterMent }) {
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
              <option value="Select">Select</option>
              <option value="Concerts">Concerts</option>
              <option value="Sporting Events">Sporting Events</option>
              <option value="Live Theater">Live Theater</option>
              <option value="Movies">Movies</option>
              <option value="Subscription">Subscription</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {(watchEnterMent === "Subscription" ||
        watchEnterMent === "Concerts" ||
        watchEnterMent === "Sporting Events" ||
        watchEnterMent === "Live Theater" ||
        watchEnterMent === "Movies") && (
          <>
            {watchEnterMent === "Subscription" && (
              <div className="field">
                <label htmlFor="enterMentSubcripTitle" className="label">
                  Title
              </label>
                <div className="control">
                  <input
                    id="enterMentSubcripTitle"
                    type="text"
                    className="input"
                    name="enterMentSubcripTitle"
                    ref={register}
                  />
                </div>
              </div>
            )}

            <div className="field">
              <label htmlFor="enterMentAmount" className="label">
                Amount
            </label>
              <div className="control">
                <input
                  id="enterMentAmount"
                  type="text"
                  className="input"
                  name="enterMentAmount"
                  ref={register}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="enterMentDate" className="label">
                {watchEnterMent === "Subscription" ? `Due Date` : "Date"}
              </label>
              <div className="control">
                <input
                  id="enterMentDate"
                  type="date"
                  className="input"
                  name="enterMentDate"
                  ref={register}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="enterMentDesc" className="label">
                Notes
            </label>
              <div className="control">
                <textarea
                  name="enterMentDesc"
                  id="enterMentDesc"
                  className="textarea"
                ></textarea>
              </div>
            </div>
          </>
        )}

      {watchEnterMent === "Other" && (
        <EnterMentOther register={register} watchEnterMent={watchEnterMent} />
      )}
    </>
  );
}
