import React from "react";
import Period from "./Period";
import EducationInstructorFieldsArray from "./EducationInstructorFieldsArray";

export default function EducationFields({
  register,
  watchEducation,
  watchEdOnlinePeriod,
  watchBCampPriceDeferred,
  control,
  errors
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
              <option value="COLLEGE">College</option>
              <option value="ONLINECOURSE">Online Course</option>
              <option value="COMUNITYCOLLEGE">Community College</option>
              <option value="TRAINING">Training</option>
              <option value="BOOTCAMP">Bootcamp</option>
            </select>
          </div>
          {errors.nature && (
            <p className="error">{"Please select a academic nature"}</p>
          )}
        </div>
      </div>

      {(watchEducation === "COLLEGE" ||
        watchEducation === "COMUNITYCOLLEGE") && (
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
                <select name="edProgram" id="edProgram" ref={register}>
                  <option value="">--Select--</option>
                  <option value="PHD">PhD</option>
                  <option value="MAMS">MA/MS</option>
                  <option value="BABS">BA/BS</option>
                  <option value="AAAS">AA/AS</option>
                  <option value="NONE">NONE</option>
                </select>
              </div>
              {errors.edProgram && (
                <p className="error">{"Please select a academic program"}</p>
              )}
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
              {errors.edTitle && (
                <p className="error">{"Please check the title"}</p>
              )}
            </div>
          </div>

          <div className="field">
            <label htmlFor="edNotes" className="label">
              Notes
            </label>
            <textarea className="textarea" name="edNotes" ref={register} />
            {errors.edNotes && (
              <p className="error">{"Please check the notes"}</p>
            )}
          </div>

          <Period edType={watchEducation} register={register} errors={errors} />

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
              {errors.tuitionAndFees && (
                <p className="error">{"Please check the tuition and fees"}</p>
              )}
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
              {errors.booksAndSupplies && (
                <p className="error">{"Please check the books and supplies"}</p>
              )}
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
              {errors.roomAndBoard && (
                <p className="error">{"Please check the room and board"}</p>
              )}
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
              {errors.edTransportation && (
                <p className="error">{"Please check the transportation"}</p>
              )}
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
              {errors.edPersonal && (
                <p className="error">{"Please check the personal"}</p>
              )}
            </div>
          </div>

          <div className="field">
            <label htmlFor="dueDate" className="label">
              Due Date
            </label>
            <div className="control">
              <input
                id="dueDate"
                type="date"
                className="input"
                name="dueDate"
                ref={register}
              />
              {errors.dueDate && (
                <p className="error">{"Please select the due date"}</p>
              )}
            </div>
          </div>
        </>
      )}
      {watchEducation === "TRAINING" && (
        <>
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
              {errors.edTitle && (
                <p className="error">{"Please check the title"}</p>
              )}
            </div>
          </div>

          <div className="field">
            <label htmlFor="edNotes" className="label">
              Notes
            </label>
            <div className="control">
              <textarea
                id="edNotes"
                className="textarea"
                name="edNotes"
                ref={register}
              />
              {errors.edNotes && (
                <p className="error">{"Please check the notes"}</p>
              )}
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
              {errors.amount && (
                <p className="error">{"Please check the amount"}</p>
              )}
            </div>
          </div>
          <div className="field">
            <label htmlFor="dueDate" className="label">
              Due Date
            </label>
            <div className="control">
              <input
                id="dueDate"
                type="date"
                className="input"
                name="dueDate"
                ref={register}
              />
              {errors.dueDate && (
                <p className="error">{"Please select the due date"}</p>
              )}
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
              {errors.edTrainingSchool && (
                <p className="error">{"Please check the training school"}</p>
              )}
            </div>
          </div>
          <Period edType={watchEducation} register={register} errors={errors} />
        </>
      )}

      {watchEducation === "ONLINECOURSE" && (
        <>
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
              {errors.edTitle && (
                <p className="error">{"Please check the title"}</p>
              )}
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
              {errors.edOnlineDesc && (
                <p className="error">{"Please check the online description"}</p>
              )}
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
              {errors.edOnlinePlatf && (
                <p className="error">{"Please check the platform"}</p>
              )}
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
              {errors.url && <p className="error">{"Please check the url"}</p>}
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
              {errors.amount && (
                <p className="error">{"Please check the amount"}</p>
              )}
            </div>
          </div>

          <div className="field">
            <label htmlFor="dueDate" className="label">
              Due Date
            </label>
            <div className="control">
              <input
                id="dueDate"
                type="date"
                className="input"
                name="dueDate"
                ref={register}
              />
              {errors.dueDate && (
                <p className="error">{"Please select the due date"}</p>
              )}
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
              errors={errors}
            />
          )}

          <EducationInstructorFieldsArray
            register={register}
            control={control}
            errors={errors}
          />
        </>
      )}

      {watchEducation === "BOOTCAMP" && (
        <>
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
                ref={register({ required: true })}
              />
              {errors.edTitle && (
                <p className="error">{"Please check the title"}</p>
              )}
            </div>
          </div>

          <div className="field">
            <label htmlFor="edNotes" className="label">
              Notes
            </label>
            <div className="control">
              <textarea
                className="textarea"
                name="edNotes"
                id="edNotes"
                ref={register}
              />
              {errors.edNotes && (
                <p className="error">{"Please check the notes"}</p>
              )}
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
              {errors.amount && (
                <p className="error">{"Please check the amount"}</p>
              )}
            </div>
          </div>

          <div className="field" style={{ paddingTop: ".9rem" }}>
            <div className="control">
              <label htmlFor="bCampPriceDeferred" className="label">
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
              <label htmlFor="dueDate" className="label">
                Due Date
              </label>
              <div className="control">
                <input
                  type="date"
                  className="input"
                  name="dueDate"
                  id="dueDate"
                  ref={register}
                />
                {errors.amount && (
                  <p className="error">{"Please select the date"}</p>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
