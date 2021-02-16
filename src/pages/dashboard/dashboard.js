import React from 'react';

//assets
import BackgroundImage from '../../assets/img/hero-image.png';

//components
import ProfileContainer from '../../components/profile/ProfileContainer.js';
import PostMethodContainer from '../../components/post-method/PostMethodContainer.js';
import PostHolderContainer from '../../components/posts-holder/PostHolderContainer.js';

const Dashboard = () => {

    return(
        <div className="dashboard">
            <img className="dashboard-bg" src={BackgroundImage} alt="background profile"/>
            <div className="dashboard-top">
                <span className="normal-1">Logout</span>
            </div>
            <div className="dashboard-cont">
                <div className="dashboard-cont-content">
                    <ProfileContainer/>

                    <div className="dashboard-cont-content__info">
                        <PostMethodContainer/>
                        <div className="dashboard-cont-content__info__posts">
                            <PostHolderContainer/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;