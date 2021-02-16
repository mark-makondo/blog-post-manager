import React from 'react'

//context
import UserContext from '../../context/UserContext.js';

const PostMethod = () => {
    return (
        <UserContext.Consumer>
            { isDisabled => (
                <div className="post-method">
                    <select className="normal-1" name="order" id="order">
                        <option value="asc">ASC</option>
                        <option value="desc">DESC</option>
                    </select>
                    <button  className="normal-1" disabled={isDisabled}>edit</button>
                    <button  className="normal-1" disabled={isDisabled}>delete</button>
                </div>
            )}
        </UserContext.Consumer>
    )
}

export default PostMethod;
