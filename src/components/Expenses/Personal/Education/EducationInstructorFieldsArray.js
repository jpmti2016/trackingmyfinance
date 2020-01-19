import React from "react";
import "./EducationInstructorFieldsArray.css";

export default function EducationInstructorFieldsArray({ register }) {
    const [indexes, setIndexes] = React.useState([]);
    const [counter, setCounter] = React.useState(0);

    const addInstructor = () => {
        setIndexes(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeInstructor = index => () => {
        setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
        setCounter(prevCounter => prevCounter - 1);
    };

    const clearInstructor = () => {
        setIndexes([]);
    };

    return (
        <>
            {counter > 0 && (
                <div className="field">
                    <div className="control">
                        <label className="label" htmlFor="">
                            Instructor List
                        </label>
                    </div>
                </div>
            )}

            {indexes.map(index => {
                const fieldName = `Instructor[${index}]`;
                return (
                    <fieldset name={fieldName} key={fieldName}>
                        <legend>{`Instructor ${index + 1}`}</legend>

                        <div className="field">
                            <label htmlFor={`${fieldName}.name`} className="label">
                                Name
                            </label>
                            <div className="control">
                                <input
                                    id={`${fieldName}.name`}
                                    type="text"
                                    className="input"
                                    name={`${fieldName}.name`}
                                    ref={register({ required: true })}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor={`${fieldName}.email`} className="label">
                                Email
                            </label>
                            <div className="control">
                                <input
                                    id={`${fieldName}.email`}
                                    type="email"
                                    className="input"
                                    name={`${fieldName}.email`}
                                    ref={register({ required: true })}
                                />
                            </div>
                        </div>


                        <div className="field">
                            <label htmlFor={`${fieldName}.personalWeb`} className="label">
                                Personal Web Page
                            </label>
                            <div className="control">
                                <input
                                    id={`${fieldName}.personalWeb`}
                                    type="text"
                                    className="input"
                                    name={`${fieldName}.personalWeb`}
                                    ref={register({ required: true })}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor={`${fieldName}.tweeter`} className="label">
                                Tweeter
                            </label>
                            <div className="control">
                                <input
                                    id={`${fieldName}.tweeter`}
                                    type="text"
                                    className="input"
                                    name={`${fieldName}.tweeter`}
                                    ref={register({ required: true })}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor={`${fieldName}.phone`} className="label">
                                Phone
                            </label>
                            <div className="control">
                                <input
                                    id={`${fieldName}.phone`}
                                    type="tel"
                                    className="input"
                                    name={`${fieldName}.phone`}
                                    ref={register({ required: true })}
                                />
                            </div>
                        </div>

                        <button
                            type="button"
                            className="button is-danger is-outlined"
                            onClick={removeInstructor(index)}
                        >
                            Remove
            </button>
                    </fieldset>
                );
            })}

            <div className="buttoms">
                <button
                    type="button"
                    className="button is-outlined cta-sec"
                    onClick={addInstructor}
                >
                    Add Instructor
        </button>

                {counter > 0 && (
                    <button
                        type="button"
                        className="button is-danger is-outlined"
                        onClick={clearInstructor}
                    >
                        Empty List
          </button>
                )}
            </div>
        </>
    );
}
