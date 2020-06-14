import React from "react";

export default function CommuteFields({
  register,
  watchCommuteService,
  errors,
}) {
  let rideTitle = watchCommuteService !== "OWN" ? "Ride" : "Cost";
  return (
    <>
      <div className="field">
        <label htmlFor="commuteService" className="label">
          Service
        </label>
        <div className="control">
          <div className="select">
            <select
              name="commuteService"
              id="commuteService"
              ref={register({ required: true })}
            >
              <option value="">--Select--</option>
              <option value="OWN">Own</option>
              <option value="UBER">Uber</option>
              <option value="LYFT">Lyft</option>
              <option value="TAXI">Taxi</option>
              <option value="SCOOTER">Scooter</option>
              <option value="BUS">Bus</option>
              <option value="FRIEND">Friend</option>
              <option value="PLANE">Plane</option>
              <option value="TRAIN">Train</option>
              <option value="SHIP">Ship</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          {errors.commuteService && (
            <p className="error">{"Please select a commute service"}</p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="dueDate" className="label">
          Date
        </label>
        <div className="control">
          <input
            id="dueDate"
            type="date"
            className="input"
            name="dueDate"
            ref={register}
          />
          {errors.dueDate && <p className="error">{"Please select a date"}</p>}
        </div>
      </div>

      {watchCommuteService !== "OWN" && (
        <div className="field">
          <label htmlFor="amount" className="label">
            {rideTitle}
          </label>
          <div className="control">
            <input
              id="amount"
              type="number"
              className="input"
              name="amount"
              ref={register({ required: true })}
            />
            {errors.amount && <p className="error">{"Please select a date"}</p>}
          </div>
        </div>
      )}

      {watchCommuteService === "OWN" && (
        <>
          <div className="field">
            <label htmlFor="commuteEvent" className="label">
              Event
            </label>
            <div className="control">
              <div className="select">
                <select
                  name="commuteEvent"
                  id="commuteEvent"
                  ref={register({ required: true })}
                >
                  <option value="">--Select--</option>
                  <option value="GAS">Gas</option>
                  <option value="LICENCING">Licencing</option>
                  <option value="REPAIR">Repair</option>
                  <option value="MAINTENANCE">Maintenance</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
              {errors.commuteEvent && (
                <p className="error">{"Please select an event"}</p>
              )}
            </div>
          </div>

          <div className="field">
            <label htmlFor="amount" className="label">
              {rideTitle}
            </label>
            <div className="control">
              <input
                id="amount"
                type="number"
                className="input"
                name="amount"
                ref={register({ required: true })}
              />
              {errors.amount && (
                <p className="error">{"Please select a date"}</p>
              )}
            </div>
          </div>
        </>
      )}

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
    </>
  );
}
