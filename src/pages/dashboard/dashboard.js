import React from 'react';

//assets
import BackgroundImage from '../../assets/img/hero-image.png';

//components
import ProfileContainer from '../../components/profile/ProfileContainer.js';
import PostMethodContainer from '../../components/post-method/PostMethodContainer.js';
import PostHolderContainer from '../../components/posts-holder/PostHolderContainer.js';
import ModalNotificationContainer from '../../components/modal-notification/ModalNotificationContainer.js';

const Dashboard = ({ posts, logoutClickHandler, showNotif, setShowNotif, showPost, setShowPost, uid }) => {

    if(!uid){
        return <span></span>
    }else{
        return(
            <div className="dashboard">
                <img className="dashboard-bg" src={BackgroundImage} alt="background profile"/>
                <div className="dashboard-top">
                    <span onClick={e => logoutClickHandler(e)} className="normal-1">Logout</span>
                </div>
                <div className="dashboard-cont">
                    <div className="dashboard-cont-content">
                        <ProfileContainer
                            setShowPost = {setShowPost}
                            showPost = {showPost}
                        />
    
                        <div className="dashboard-cont-content__info">
                            <PostMethodContainer/>
                            <div className="dashboard-cont-content__info__posts">
                                {showPost && (
                                    posts.length > 0 ? posts.map(post => 
                                        <PostHolderContainer 
                                            key = {post.id}
                                            id = {post.id}
                                            title = {post.title}
                                            content = {post.content}
                                            datePosted = {new Date(post.datePosted.seconds * 1000 + post.datePosted.nanoseconds/1000000).toLocaleDateString()}
                                        />
                                    ): <p>Loading . . .</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <ModalNotificationContainer
                    isActive = {showNotif}
                    setIsActive = {setShowNotif}
                />
            </div>
        )
    }
    
}

export default Dashboard;