import React, { useState } from 'react'

//component
import ProfileUI from './Profile.js';

const ProfileContainer = () => {
    const [showNewPost, setShowNewPost] = useState(false);

    const newPostClickHandler = (e) => {
        e.preventDefault();
        setShowNewPost(true);
    }
   
    
    return (
        <ProfileUI
            newPostClickHandler ={newPostClickHandler}
            isActive = {showNewPost}
            setIsActive = {setShowNewPost}
        />
    )
}

export default ProfileContainer;
