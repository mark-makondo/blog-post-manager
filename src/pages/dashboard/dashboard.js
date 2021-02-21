import React from 'react';

//context
import UserContext from '../../context/UserContext.js';

//assets
import BackgroundImage from '../../assets/img/hero-image.png';

//components
import ProfileContainer from '../../components/profile/ProfileContainer.js';
import PostMethodContainer from '../../components/post-method/PostMethodContainer.js';
import PostHolderContainer from '../../components/posts-holder/PostHolderContainer.js';
import ModalNotificationContainer from '../../components/modal-notification/ModalNotificationContainer.js';

const Dashboard = (props) => {

    let posts = props.posts;
    let logoutClickHandler = props.logoutClickHandler;
    let showNotif = props.showNotif;
    let setShowNotif = props.setShowNotif;
    let showPost = props.showPost;
    let setShowPost = props.setShowPost;
    let uid = props.uid;
    let isEditable = props.isEditable;
    let setIsEditable = props.setIsEditable;
    let isPostHolderActive = props.isPostHolderActive;
    let setIsPostHolderActive = props.setIsPostHolderActive;

    if(!uid){
        return <span></span>
    }else{
        return(
            <UserContext.Consumer>
            {isGuest => (
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
                                <PostMethodContainer
                                    isGuest = {isGuest}
                                    isPostHolderActive = {isPostHolderActive}
                                    isEditable = {isEditable}
                                    setIsEditable = {setIsEditable}
                                />
                                <div className="dashboard-cont-content__info__posts">
                                    {showPost && (
                                        posts.length > 0 ? posts.map((post,i) => 
                                            <PostHolderContainer 
                                                index = {i}
                                                key = {post.id}
                                                id = {post.id}
                                                title = {post.title}
                                                content = {post.content}
                                                datePosted = {new Date(post.datePosted.seconds * 1000 + post.datePosted.nanoseconds/1000000).toISOString()}
                                                setIsPostHolderActive = {setIsPostHolderActive}
                                                isEditable = {isEditable}
                                                setIsEditable = {setIsEditable}
                                            />
                                        ): <p>Loading . . .</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    {isGuest && (
                        <ModalNotificationContainer
                        isActive = {showNotif}
                        setIsActive = {setShowNotif}
                        />
                    )}
                   
                </div>
            )}
            </UserContext.Consumer>
           
        )
    }
    
}

export default Dashboard;