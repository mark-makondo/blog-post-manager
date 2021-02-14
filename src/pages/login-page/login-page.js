import React from 'react';

// assets 
import BackgroundImage from '../../assets/img/hero-image.png';

const loginPage = () => {
    return(
        <div className="login-page">
           <div className="login-page-cont">
               <img src={BackgroundImage} alt="background profile"/>
               <div className="login-page-cont__info">
                   <button className="normal-1">Guest</button>
                   <button className="normal-1">Admin</button>
               </div>
           </div>
        </div>
    )
}

export default loginPage;