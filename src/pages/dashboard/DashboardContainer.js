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
    const [posts] = useShowDataFirestore();
    const [status, redirect, setType, setClicked, setIsLoggedOut, currentUser] = useAuthSignInFirestore();
    const [showNotif, setShowNotif] = useState(true);
    const [showPost, setShowPost] = useState(false);

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
        let isGuest = currentUser.isAnonymous;
        let uid = currentUser.uid;
        let disabled = isGuest ? true : false;

        return(
            <UserContext.Provider value={disabled}>
                <DashboardUI
                    posts = {posts}
                    logoutClickHandler = {logoutClickHandler}
                    showNotif = {showNotif}
                    setShowNotif = {setShowNotif}
                    showPost = {showPost}
                    setShowPost = {setShowPost}
                    uid = {uid}
                />
            </UserContext.Provider>
        )
    }
}
  

export default DashboardContainer;