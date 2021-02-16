import React, { useState } from 'react'

//component ui
import AdminLoginUI from './AdminLogin.js';

const AdminLoginContainer = () => {
    const [input, setInput] = useState({
        username: '',
        password: ''
    });

    const formClickhandler = (e) => {
        e.preventDefault();
        console.log(input);
    }
    
    const inputChangeHandler = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.id]: e.target.value
        })  
    }

    return (
        <AdminLoginUI
            formClickhandler = {formClickhandler}
            inputChangeHandler = {inputChangeHandler}
        />
    )
}

export default AdminLoginContainer;
