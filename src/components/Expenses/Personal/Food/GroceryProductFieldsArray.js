import React from "react";
import "./GroceryProductFieldsArray.css";

export default function GroceryProductFieldsArray({ register }) {
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  const addProduct = () => {
    setIndexes(prevIndexes => [...prevIndexes, counter]);
    setCounter(prevCounter => prevCounter + 1);
  };

  const removeProduct = index => () => {
    setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
    setCounter(prevCounter => prevCounter - 1);
  };

  const clearProducts = () => {
    setIndexes([]);
  };

  return (
    <>
      {counter > 0 && (
        <div className="field">
          <div className="control">
            <label className="label" htmlFor="">
              Product List
            </label>
          </div>
        </div>
      )}

      {indexes.map(index => {
        const fieldName = `product[${index}]`;
        return (
          <fieldset name={fieldName} key={fieldName}>
            <legend>{`Product ${index + 1}`}</legend>

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
              <label htmlFor={`${fieldName}.price`} className="label">
                Price
              </label>
              <div className="control">
                <input
                  id={`${fieldName}.price`}
                  type="number"
                  className="input"
                  name={`${fieldName}.price`}
                  ref={register({ required: true })}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor={`${fieldName}.count`} className="label">
                Quantity
              </label>
              <div className="control">
                <input
                  id={`${fieldName}.count`}
                  type="number"
                  className="input"
                  name={`${fieldName}.count`}
                  ref={register({ required: true })}
                />
              </div>
            </div>

            <button
              type="button"
              className="button is-danger is-outlined"
              onClick={removeProduct(index)}
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
          onClick={addProduct}
        >
          Add Product
        </button>

        {counter > 0 && (
          <button
            type="button"
            className="button is-danger is-outlined"
            onClick={clearProducts}
          >
            Empty List
          </button>
        )}
      </div>
    </>
  );
}
