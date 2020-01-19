import React from 'react'

export default function DinningOut({ register }) {
    return (
        <>
            <div className="field">
                <label htmlFor="place" className="label">Place</label>
                <div className="control">
                    <input type="text" className="input" name="place" id="place" ref={register({ required: true })} />
                </div>
            </div>

            <div className="field">
                <label htmlFor="title" className="label">Title</label>
                <div className="control">
                    <input type="text" className="input" name="title" id="title" ref={register({ required: true })} />
                </div>
            </div>

            <div className="field">
                <label htmlFor="notes" className="label">Notes</label>
                <div className="control">
                    <textarea className="textarea" name="notes" id="notes" ref={register({ required: true })} />
                </div>
            </div>

        </>
    )

}
