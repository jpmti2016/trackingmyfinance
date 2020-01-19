import React from "react";
import "./LegalLawyerFieldsArray.css";

export default function LegalLawyerFieldsArray({ register }) {
    const [indexes, setIndexes] = React.useState([]);
    const [counter, setCounter] = React.useState(0);

    const addLawyer = () => {
        setIndexes(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeLawyer = index => () => {
        setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
        setCounter(prevCounter => prevCounter - 1);
    };

    const clearLawyer = () => {
        setIndexes([]);
    };

    return (
        <>
            {counter > 0 && (
                <div className="field">
                    <div className="control">
                        <label className="label" htmlFor="">
                            Lawyer List
                        </label>
                    </div>
                </div>
            )}

            {indexes.map(index => {
                const fieldName = `Lawyer[${index}]`;
                return (
                    <fieldset name={fieldName} key={fieldName}>
                        <legend>{`Lawyer ${index + 1}`}</legend>

                        <div className="field">
                            <label htmlFor={`${fieldName}.fee`} className="label">
                                Fee
                            </label>
                            <div className="control">
                                <input
                                    id={`${fieldName}.fee`}
                                    type="number"
                                    className="input"
                                    name={`${fieldName}.fee`}
                                    ref={register({ required: true })}
                                />
                            </div>
                        </div>

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
                            <label htmlFor={`${fieldName}.firm`} className="label">
                                Firm
                            </label>
                            <div className="control">
                                <input
                                    id={`${fieldName}.firm`}
                                    type="text"
                                    className="input"
                                    name={`${fieldName}.firm`}
                                    ref={register({ required: true })}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor={`${fieldName}.address`} className="label">
                                Address
                            </label>
                            <div className="control">
                                <input
                                    id={`${fieldName}.address`}
                                    type="text"
                                    className="input"
                                    name={`${fieldName}.address`}
                                    ref={register({ required: true })}
                                />
                            </div>
                        </div>

                        <button
                            type="button"
                            className="button is-danger is-outlined"
                            onClick={removeLawyer(index)}
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
                    onClick={addLawyer}
                >
                    Add Lawyer
        </button>

                {counter > 0 && (
                    <button
                        type="button"
                        className="button is-danger is-outlined"
                        onClick={clearLawyer}
                    >
                        Empty List
          </button>
                )}
            </div>
        </>
    );
}
