import React from 'react'

const PostMethod = ({ editableClickHandler }) => {

    return (
        <div className="post-method">
            <select className="normal-1" name="order" id="order">
                <option value="asc">ASC</option>
                <option value="desc">DESC</option>
            </select>
            <button className="post-method__edit normal-1" onClick={e => editableClickHandler(e)}>edit</button>
            <button className="post-method__delete normal-1">delete</button>
        </div>
    )
}

export default PostMethod;
