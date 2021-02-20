import React from 'react'

const PostMethod = ({ isGuest, isPostHolderActive, editableCLickHandler }) => {

    return (
        <div className="post-method">
            <select className="normal-1" name="order" id="order">
                <option value="asc">ASC</option>
                <option value="desc">DESC</option>
            </select>
            <button className="normal-1" disabled={ isGuest || isPostHolderActive ? true : false } onClick={e =>editableCLickHandler(e)}>edit</button>
            <button className="normal-1" disabled={ isGuest || isPostHolderActive ? true : false }>delete</button>
        </div>
    )
}

export default PostMethod;
