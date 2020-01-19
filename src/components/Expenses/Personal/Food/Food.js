import React from 'react';

import GroceryFields from './Grocery';
import DinningOut from './DinningOut'
export default function FoodFields({ register, watchFood, watchGroceryCost }) {
    return (
        <>
            <div className="field">
                <label htmlFor="nature" className="label">
                    Nature
                </label>
                <div className="control">
                    <div className="select">
                        <select name="nature" ref={register({ required: true })}>
                            <option value="Select">Select</option>
                            <option value="Grocery">Grocery</option>
                            <option value="DinningOut">DinningOut</option>
                        </select>
                    </div>
                </div>
            </div>
            {
                watchFood === 'DinningOut' && <DinningOut register={register} />
            }

            {
                watchFood === 'Grocery' && <GroceryFields register={register} watchGroceryCost={watchGroceryCost} />
            }
        </>
    )
}