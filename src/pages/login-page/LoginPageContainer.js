import React from 'react';
import { Redirect  } from "react-router-dom";

// component
import LoginPageUI from './LoginPage.js';

//custom hooks
import {useAuthSignInFirestore} from '../../hooks/useAuthSignInFirestore.js';

const LoginPageContainer = () => {
    const [status, redirect, setType, setClicked, setIsLoggedOut] = useAuthSignInFirestore();
    
    const guestClickHandler = (e) => {
        e.preventDefault();
        setType('guest');
        setClicked(true);
        setIsLoggedOut(false);
    }

    if(redirect) return <Redirect to={redirect} />

    return(
        <LoginPageUI
            guestClickHandler = {guestClickHandler}
        />
    )
}

export default LoginPageContainer;