import React from 'react'

//context
import UserContext from '../../context/UserContext.js';

//component ui
import PostMethodUI from './PostMethod.js';

const PostMethodContainer = ({ isPostHolderActive, setIsEditable }) => {

    const editableCLickHandler = (e) =>{
        e.preventDefault();
        setIsEditable(true);
    }
    
    return (
        <UserContext.Consumer>
            { isGuest => (
                <PostMethodUI
                    isGuest = {isGuest}
                    isPostHolderActive =  {isPostHolderActive}
                    editableCLickHandler = {editableCLickHandler}
                />
            )}
       </UserContext.Consumer>
    )
}

export default PostMethodContainer;
