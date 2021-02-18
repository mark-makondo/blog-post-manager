import React, { useState } from 'react'
import { Redirect  } from "react-router-dom";

//component
import AdminLoginUI from './AdminLogin.js';

//custom hooks
import {useAuthSignInFirestore} from '../../hooks/useAuthSignInFirestore.js';

const AdminLoginContainer = () => {
    const [status, redirect, setType, setClicked, setIsLoggedOut, currentUser, setCredentials] = useAuthSignInFirestore();

    const [input, setInput] = useState({
        email: '',
        password: ''
    });

    const formClickhandler = (e) => {
        e.preventDefault();
        
        setType('admin')
        setClicked(true);
        setCredentials(input);
        setIsLoggedOut(false);
    }
    
    const inputChangeHandler = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.id]: e.target.value
        })  
    }
    
    if(redirect) return <Redirect to={redirect} />
    return (
        <AdminLoginUI
            formClickhandler = {formClickhandler}
            inputChangeHandler = {inputChangeHandler}
            status = {status}
        />
    )
}

export default AdminLoginContainer;
