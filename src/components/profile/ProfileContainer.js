import React, { useState } from 'react'

//component
import ProfileUI from './Profile.js';

const ProfileContainer = ({setShowPost, showPost}) => {
    const [showNewPost, setShowNewPost] = useState(false);

    const newPostClickHandler = (e) => {
        e.preventDefault();
        setShowNewPost(true);
    }
    
    const showPostClickHandler = (e) => {
        e.preventDefault();
        setShowPost(!showPost);
        e.currentTarget.classList.toggle('active');
    }
    return (
        <ProfileUI
            newPostClickHandler ={newPostClickHandler}
            isActive = {showNewPost}
            setIsActive = {setShowNewPost}
            showPostClickHandler = {showPostClickHandler}
        />
    )
}

export default ProfileContainer;
