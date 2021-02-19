import React from 'react'

const PostMethod = ({ isGuest }) => {
    return (
        <div className="post-method">
            <select className="normal-1" name="order" id="order">
                <option value="asc">ASC</option>
                <option value="desc">DESC</option>
            </select>
            <button  className="normal-1" disabled={isGuest}>edit</button>
            <button  className="normal-1" disabled={isGuest}>delete</button>
        </div>
    )
}

export default PostMethod;
