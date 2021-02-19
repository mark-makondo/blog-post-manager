import React from 'react'

//context
import UserContext from '../../context/UserContext.js';

//component ui
import PostMethodUI from './PostMethod.js';

const PostMethodContainer = ({ isPostHolderActive, setIsEditable }) => {

    
    return (
        <UserContext.Consumer>
            { isGuest => (
                <PostMethodUI
                    isGuest = {isGuest}
                />
            )}
       </UserContext.Consumer>
    )
}

export default PostMethodContainer;
