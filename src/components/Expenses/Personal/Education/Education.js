import React from "react";
import Period from "./Period";
import EducationInstructorFieldsArray from './EducationInstructorFieldsArray'

export default function EducationFields({
  register,
  watchEducation,
  watchEdOnlinePeriod,
  watchBCampPriceDeferred
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
              <option value="Select">Select</option>
              <option value="College">College</option>
              <option value="Online Curse">Online Curse</option>
              <option value="Community College">
                Community College
              </option>
              <option value="Training">Training</option>
              <option value="Bootcamp">Bootcamp</option>
            </select>
          </div>
        </div>
      </div>

      {(watchEducation === "College" ||
        watchEducation === "Community College") && (
          <>
            {/* <div className="field">
                           <label htmlFor="edMajor" className="label">
                             Major
                           </label>
                           <div className="control">
                             <input
                               id="edMajor"
                               type="text"
                               className="input"
                               name="edMajor"
                               ref={register}
                             />
                           </div>
                         </div>

                         <div className="field">
                           <label htmlFor="edMinor" className="label">
                             Minor
                           </label>
                           <div className="control">
                             <input
                               id="edMinor"
                               type="text"
                               className="input"
                               name="edMinor"
                               ref={register}
                             />
                           </div>
                         </div>

                         <div className="field">
                           <label htmlFor="edSpecialty" className="label">
                             Specialty
                           </label>
                           <div className="control">
                             <input
                               id="edSpecialty"
                               type="text"
                               className="input"
                               name="edSpecialty"
                               ref={register}
                             />
                           </div>
                         </div> */}

            <div className="field">
              <label htmlFor="edProgram" className="label">
                Program
                           </label>
              <div className="control">
                <div className="select">
                  <select
                    name="edProgram"
                    id="edProgram"
                    ref={register}
                  >
                    <option value="Select">Select</option>
                    <option value="PhD">PhD</option>
                    <option value="MAMS">MA/MS</option>
                    <option value="BABS">BA/BS</option>
                    <option value="AAAS">AA/AS</option>
                    <option value="NONE">NONE</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label htmlFor="edTitle" className="label">
                Title
              </label>
              <div className="control">
                <input
                  id="edTitle"
                  type="text"
                  className="input"
                  name="edTitle"
                  ref={register}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="edNotes" className="label">
                Notes
              </label>
              <textarea
                className="textarea"
                name="edNotes"
                ref={register}
              />
            </div>

            <Period
              edType={watchEducation}
              register={register}
            />

            <div className="field">
              <label htmlFor="" className="label">
                Fees
              </label>
            </div>

            <div className="field">
              <label htmlFor="tuitionAndFees" className="label">
                Tuition and fees
              </label>
              <div className="control">
                <input
                  id="tuitionAndFees"
                  type="number"
                  className="input"
                  name="tuitionAndFees"
                  ref={register}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="booksAndSupplies" className="label">
                Books and supplies
              </label>
              <div className="control">
                <input
                  id="booksAndSupplies"
                  type="number"
                  className="input"
                  name="booksAndSupplies"
                  ref={register}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="roomAndBoard" className="label">
                Room and board
              </label>
              <div className="control">
                <input
                  id="roomAndBoard"
                  type="number"
                  className="input"
                  name="roomAndBoard"
                  ref={register}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="edTransportation" className="label">
                Transportation
              </label>
              <div className="control">
                <input
                  id="edTransportation"
                  type="number"
                  className="input"
                  name="edTransportation"
                  ref={register}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="edPersonal" className="label">
                Personal
              </label>
              <div className="control">
                <input
                  id="edPersonal"
                  type="number"
                  className="input"
                  name="edPersonal"
                  ref={register}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="edDueDate" className="label">
                Due Date
                           </label>
              <div className="control">
                <input
                  id="edDueDate"
                  type="date"
                  className="input"
                  name="edDueDate"
                  ref={register}
                />
              </div>
            </div>
          </>
        )}
      {watchEducation === "Training" && (
        <>
          <div className="field">
            <label htmlFor="edTrainingTitle" className="label">
              Title
            </label>
            <div className="control">
              <input
                id="edTrainingTitle"
                type="number"
                className="input"
                name="edTrainingTitle"
                ref={register}
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

          <div className="field">
            <label htmlFor="amount" className="label">
              Cost
            </label>
            <div className="control">
              <input
                id="amount"
                type="number"
                className="input"
                name="amount"
                ref={register}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="edTrainingDueDate" className="label">
              Due Date
            </label>
            <div className="control">
              <input
                id="edTrainingDueDate"
                type="date"
                className="input"
                name="edTrainingDueDate"
                ref={register}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="edTrainingSchool" className="label">
              School
            </label>
            <div className="control">
              <input
                id="edTrainingSchool"
                type="text"
                className="input"
                name="edTrainingSchool"
                ref={register}
              />
            </div>
          </div>
          <Period
            edType={watchEducation}
            register={register}
          />
        </>
      )}

      {watchEducation === "Online Curse" && (
        <>
          <div className="field">
            <label htmlFor="edOnlineTitle" className="label">
              Title
            </label>
            <div className="control">
              <input
                id="edOnlineTitle"
                type="text"
                className="input"
                name="edOnlineTitle"
                ref={register}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="edOnlineDesc" className="label">
              Description
            </label>
            <div className="control">
              <textarea
                id="edOnlineDesc"
                className="textarea"
                name="edOnlineDesc"
                ref={register}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="edOnlinePlatf" className="label">
              Platform
            </label>
            <div className="control">
              <input
                id="edOnlinePlatf"
                type="text"
                className="input"
                name="edOnlinePlatf"
                ref={register}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="url" className="label">
              Web Page
            </label>
            <div className="control">
              <input
                id="url"
                type="text"
                className="input"
                name="url"
                ref={register}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="amount" className="label">
              Cost
            </label>
            <div className="control">
              <input
                id="amount"
                type="number"
                className="input"
                name="amount"
                ref={register}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="edOnlineDueDate" className="label">
              Due Date
            </label>
            <div className="control">
              <input
                id="edOnlineDueDate"
                type="date"
                className="input"
                name="edOnlineDueDate"
                ref={register}
              />
            </div>
          </div>


          <div className="field" style={{ paddingTop: ".9rem" }}>
            <div className="control">
              <label htmlFor="edOnlinePeriod" className="label">
                <input
                  type="checkbox"
                  id="edOnlinePeriod"
                  className="checkbox"
                  name="edOnlinePeriod"
                  ref={register}
                />
                Class Period
              </label>
            </div>
          </div>

          {watchEdOnlinePeriod && (
            <Period
              edType={watchEducation}
              register={register}
            />
          )}

          <EducationInstructorFieldsArray register={register} />

        </>
      )}

      {watchEducation === "Bootcamp" && (
        <>
          <div className="field">
            <label htmlFor="bCampTitle" className="label">
              Title
            </label>
            <div className="control">
              <input
                id="bCampTitle"
                type="text"
                className="input"
                name="bCampTitle"
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
                className="textarea"
                name="notes"
                id="notes"
              ></textarea>
            </div>
          </div>

          <div className="field">
            <label htmlFor="amount" className="label">
              Cost
            </label>
            <div className="control">
              <input
                id="amount"
                type="number"
                className="input"
                name="amount"
                ref={register}
              />
            </div>
          </div>

          <div className="field" style={{ paddingTop: ".9rem" }}>
            <div className="control">
              <label
                htmlFor="bCampPriceDeferred"
                className="label"
              >
                <input
                  type="checkbox"
                  id="bCampPriceDeferred"
                  className="checkbox"
                  name="bCampPriceDeferred"
                  ref={register}
                />
                Cost deferred after first job?
              </label>
            </div>
          </div>

          {!watchBCampPriceDeferred && (
            <div className="field">
              <label htmlFor="bCampDueDate" className="label">
                Due Date
              </label>
              <div className="control">
                <input
                  type="date"
                  className="input"
                  name="bCampDueDate"
                  ref={register}
                />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
