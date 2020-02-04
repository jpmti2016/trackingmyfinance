import React from "react";
import "./InsuranceBeneficiariesFieldsArray.css";

export default function InsuranceBeneficiariesFieldsArray({
  register,
  fields,
  append,
  remove
}) {
  return (
    <>
      {fields.length > 0 && (
        <div className="field">
          <div className="control">
            <label htmlFor="" className="label">
              Beneficiaries List
            </label>
          </div>
        </div>
      )}
      <ul className="field">
        {fields.map((item, index) => {
          let fieldName = `beneficiaries[${index}]`;
          return (
            <fieldset key={fieldName} name={fieldName}>
              <legend>{`Benefiary ${index + 1}`}</legend>
              <div className="field">
                <label htmlFor={`${fieldName}.name`} className="label">
                  Name
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name={`${fieldName}.name`}
                    ref={register({})}
                    defaultValue={`${item.name}`}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor={`${fieldName}.lastName`} className="label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="input"
                  name={`${fieldName}.lastName`}
                  ref={register({})}
                  defaultValue={`${item.lastName}`}
                />
              </div>

              <button
                type="button"
                className="button is-danger is-outlined"
                onClick={() => remove(index)}
              >
                Delete
              </button>
            </fieldset>
          );
        })}
      </ul>
      <div className="buttoms">
        <button
          type="button"
          className="button is-outlined cta-sec"
          onClick={() =>
            append({
              name: `$beneficiaries{fields.length}.name`
            })
          }
        >
          Add Beneficiary
        </button>

        {fields.length > 0 && (
          <button
            type="button"
            className="button is-danger is-outlined"
            onClick={() => remove()}
          >
            Empty List
          </button>
        )}
      </div>
    </>
  );
  // const [indexes, setIndexes] = React.useState([]);
  // const [counter, setCounter] = React.useState(0);
  // const addBeneficiaries = () => {
  //   setIndexes(prevIndexes => [...prevIndexes, counter]);
  //   setCounter(prevCounter => prevCounter + 1);
  // };
  // const removeBeneficiaries = index => () => {
  //   setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
  //   setCounter(prevCounter => prevCounter - 1);
  // };
  // const clearBeneficiaries = () => {
  //   setIndexes([]);
  // };
  // return (
  //   <>
  //     {counter > 0 && (
  //       <div className="field">
  //         <div className="control">
  //           <label className="label" htmlFor="">
  //             Beneficiaries List
  //           </label>
  //         </div>
  //       </div>
  //     )}
  //     {indexes.map(index => {
  //       const fieldName = `beneficiaries${index}`;
  //       return (
  //         <fieldset name={fieldName} key={fieldName}>
  //           <legend>{`Beneficiaries ${index + 1}`}</legend>
  //           <div className="field">
  //             <label htmlFor={`${fieldName}.name`} className="label">
  //               Name
  //             </label>
  //             <div className="control">
  //               <input
  //                 id={`${fieldName}.name`}
  //                 type="text"
  //                 className="input"
  //                 name={`${fieldName}.name`}
  //                 ref={register({ required: true })}
  //               />
  //             </div>
  //           </div>
  //           <div className="field">
  //             <label htmlFor={`${fieldName}.lastName`} className="label">
  //               Last Name
  //             </label>
  //             <div className="control">
  //               <input
  //                 id={`${fieldName}.lastName`}
  //                 type="text"
  //                 className="input"
  //                 name={`${fieldName}.lastName`}
  //                 ref={register({ required: true })}
  //               />
  //             </div>
  //           </div>
  //           <button
  //             type="button"
  //             className="button is-danger is-outlined"
  //             onClick={removeBeneficiaries(index)}
  //           >
  //             Remove
  //           </button>
  //         </fieldset>
  //       );
  //     })}
  //     <div className="buttoms">
  //       <button
  //         type="button"
  //         className="button is-outlined cta-sec"
  //         onClick={addBeneficiaries}
  //       >
  //         Add Beneficiaries
  //       </button>
  //       {counter > 0 && (
  //         <button
  //           type="button"
  //           className="button is-danger is-outlined"
  //           onClick={clearBeneficiaries}
  //         >
  //           Empty List
  //         </button>
  //       )}
  //     </div>
  //   </>
  // );
}
