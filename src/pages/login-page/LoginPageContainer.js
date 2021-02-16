import React from 'react';

//firebase
import { database } from '../../firebase/config.js';

// component ui
import LoginPageUI from './LoginPage.js';

const LoginPageContainer = () => {
    return(
        <LoginPageUI/>
    )
}

export default LoginPageContainer;