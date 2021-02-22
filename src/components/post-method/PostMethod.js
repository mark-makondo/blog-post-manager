import React from 'react'

const PostMethod = ({ editableClickHandler,orderOnChangeHandler }) => {

    return (
        <div className="post-method">
            <select className="normal-1" name="order" id="order" onChange={e => orderOnChangeHandler(e)}>
                <option value="asc">ASC</option>
                <option value="desc">DESC</option>
            </select>
            <button className="post-method__edit normal-1" onClick={e => editableClickHandler(e)}>edit</button>
        </div>
    )
}

export default PostMethod;
