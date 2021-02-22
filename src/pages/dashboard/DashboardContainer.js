import React, { useState } from 'react';
import { Redirect  } from "react-router-dom";

//component 
import DashboardUI from './Dashboard.js';

//context
import UserContext from '../../context/UserContext.js';

// custom hooks
import {useShowDataFirestore} from '../../hooks/useShowDataFirestore.js';
import {useAuthSignInFirestore} from '../../hooks/useAuthSignInFirestore.js';

const DashboardContainer = () => {
    const [posts, setOrder] = useShowDataFirestore();
    const [status, redirect, setType, setClicked, setIsLoggedOut, currentUser] = useAuthSignInFirestore();
    const [showNotif, setShowNotif] = useState(true);
    const [showPost, setShowPost] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const [isPostHolderActive, setIsPostHolderActive] = useState(false); 

    // redirectToHome was used here instead of using the 
    // redirect from custom hook because of a weird behaviour
    // where it shows an error about it being not able
    // to read the delete property inside guest function
    const [redirectToHome, setRedirectToHome] = useState(null);

    const logoutClickHandler = (e) => {
        e.preventDefault();

        if(currentUser.isAnonymous){
            setType('guest')
            setClicked(true);
            setIsLoggedOut(true);
            setRedirectToHome('/')
        }else{
            setType('admin')
            setClicked(true);
            setIsLoggedOut(true);   
            setRedirectToHome('/') 
        }
    }

    if(redirectToHome) return <Redirect to={redirectToHome} /> 

    if(currentUser){
        let guest = currentUser.isAnonymous;
        let uid = currentUser.uid;
        let isGuest = guest ? true : false;

        return(
            <UserContext.Provider value={isGuest}>
                <DashboardUI
                    posts = {posts}
                    logoutClickHandler = {logoutClickHandler}
                    showNotif = {showNotif}
                    setShowNotif = {setShowNotif}
                    showPost = {showPost}
                    setShowPost = {setShowPost}
                    uid = {uid}
                    isEditable = {isEditable}
                    setIsEditable = {setIsEditable}
                    isPostHolderActive ={isPostHolderActive}
                    setIsPostHolderActive = {setIsPostHolderActive}
                />
            </UserContext.Provider>
        )
    }
}
  

export default DashboardContainer;