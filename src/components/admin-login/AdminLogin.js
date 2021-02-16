import React from 'react'
import {Link} from 'react-router-dom';

// assets 
import BackgroundImage from '../../assets/img/hero-image.png';

const AdminLogin = ({formClickhandler, inputChangeHandler}) => {

    return (
        <div className="admin-login">
            <img src={BackgroundImage} alt="background profile"/>
            <form onSubmit={e => formClickhandler(e)} >
                <div> 
                    <input id="username" onChange={e => inputChangeHandler(e)} className="normal-1" type="text" autoComplete="off" name="username" required/>
                    <label className="normal-2" htmlFor="username">Username</label>
                </div>
                <div>
                    <input id="password" onChange={e => inputChangeHandler(e)} className="normal-1" type="password" name="password" required/>
                    <label className="normal-2" htmlFor="password">Password</label>
                </div>
                <button className="normal-2" type="submit">Login</button>
                <Link to="/"><span className="normal-2">Not an Admin? Click Me!</span></Link>
            </form>
        </div>
    )
}

export default AdminLogin;
