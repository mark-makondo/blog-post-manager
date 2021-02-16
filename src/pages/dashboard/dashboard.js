import React from 'react';

//assets
import BackgroundImage from '../../assets/img/hero-image.png';

//components
import ProfileContainer from '../../components/profile/ProfileContainer.js';
import PostMethodContainer from '../../components/post-method/PostMethodContainer.js';
import PostHolderContainer from '../../components/posts-holder/PostHolderContainer.js';

const Dashboard = ({showPosts}) => {
   
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
                            {showPosts.length > 0 ? showPosts.map(post => 
                                <PostHolderContainer 
                                    key = {post.id}
                                    id = {post.id}
                                    title = {post.title}
                                    content = {post.content}
                                    datePosted = {new Date(post.datePosted.seconds * 1000 + post.datePosted.nanoseconds/1000000).toLocaleDateString()}
                                />
                            ): <p>Loading . . .</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;