import React from "react";

export default function CommuteFields({ register, watchCommuteService }) {
  let rideTitle = watchCommuteService !== 'Own' ? 'Ride' : 'Cost';
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
              <option value="Select">Select</option>
              <option value="Own">Own</option>
              <option value="Uber">Uber</option>
              <option value="Lift">Lift</option>
              <option value="Taxi">Taxi</option>
              <option value="Scooter">Scooter</option>
              <option value="Bus">Bus</option>
              <option value="Friend">Friend</option>
              <option value="Plane">Plane</option>
              <option value="Train">Train</option>
              <option value="Ship">Ship</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="commuteDate" className="label">
          Date
        </label>
        <div className="control">
          <input
            id="commuteDate"
            type="date"
            className="input"
            name="commuteDate"
            ref={register}
          />
        </div>
      </div>

      {watchCommuteService !== "Own" && (
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
          </div>
        </div>
      )}

      {watchCommuteService === "Own" && (
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
                  <option value="Select">Select</option>
                  <option value="Gas">Gas</option>
                  <option value="Licencing">Licencing</option>
                  <option value="Repair">Repair</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Other">Other</option>
                </select>
              </div>
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
      </div>
    </>
  );
}
