import React from 'react';
import {Link} from 'react-router-dom';

// assets 
import BackgroundImage from '../../assets/img/hero-image.png';

const LoginPage = () => {
    return(
        <div className="login-page">
            <div className="login-page-cont">
                <img src={BackgroundImage} alt="background profile"/>
                <div className="login-page-cont__info">
                    <Link to ="/dashboard/0"><button className="normal-1">Guest</button></Link>
                    <Link to ="/admin-login"><button className="normal-1">Admin</button></Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;