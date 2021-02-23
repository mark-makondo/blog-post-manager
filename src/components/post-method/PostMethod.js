import React from 'react'

const PostMethod = ({ editableClickHandler }) => {

    return (
        <div className="post-method">
            <button className="post-method__edit normal-1" onClick={e => editableClickHandler(e)}>edit</button>
        </div>
    )
}

export default PostMethod;
