import React from 'react'

//assets
import DevPic from '../../assets/img/dev-pic.jpg';
import {ReactComponent as Logo} from '../../assets/svg/logo.svg';

//context
import UserContext from '../../context/UserContext.js';

const Profile = () => {
    return (
        <UserContext.Consumer>
            { isDisabled => (
                <div className="profile">
                    <h2>blog post manager</h2>
                    <div className="profile__image">
                        <img src={DevPic} alt="developer profile"/>
                    </div>
                    <div className="profile__post-handler">
                        <button className="normal-1" disabled={isDisabled}>new post</button>
                        <button className="normal-1">show posts</button>
                    </div>
                    <div className="profile__logo">
                        <Logo/>
                    </div>
                </div>
            )}
        </UserContext.Consumer>
    )
}

export default Profile;
