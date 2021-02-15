import React from 'react';

//assets
import DevPic from '../../assets/img/dev-pic.jpg';
import {ReactComponent as Logo} from '../../assets/svg/logo.svg';
import BackgroundImage from '../../assets/img/hero-image.png';

const dashboard = () => {
    return(
        <div className="dashboard">
            <img className="dashboard-bg" src={BackgroundImage} alt="background profile"/>
            <div className="dashboard-top">
                <span className="normal-1">Logout</span>
            </div>
            <div className="dashboard-cont">
                <div className="dashboard-cont-content">
                    <div className="dashboard-cont-content__profile">
                        <h2>blog post manager</h2>
                        <div className="dashboard-cont-content__profile__image">
                            <img src={DevPic} alt="developer profile"/>
                        </div>
                        <div className="dashboard-cont-content__profile__post-handler">
                            <button className="normal-1">new post</button>
                            <button className="normal-1">show posts</button>
                        </div>
                        <div className="dashboard-cont-content__profile__logo">
                            <Logo/>
                        </div>
                    </div>

                    <div className="dashboard-cont-content__info">
                        <div className="dashboard-cont-content__info__post-method">
                            <select name="order" id="order">
                                <option value="asc">ASC</option>
                                <option value="desc">DESC</option>
                            </select>
                            <button>edit</button>
                            <button>delete</button>
                        </div>
                        <div className="dashboard-cont-content__info__posts">
                            <div className="dashboard-cont-content__info__posts-box">
                                <span id="post_uid">UID:</span>
                                <span id="post_title">Title:</span>
                                <span id="post_date">Date:</span>
                                <p id="post_content">Content:</p>
                            </div>
                            <div className="dashboard-cont-content__info__posts-box">
                                <span id="post_uid">UID:</span>
                                <span id="post_title">Title:</span>
                                <span id="post_date">Date:</span>
                                <p id="post_content">Content:</p>
                            </div>
                            <div className="dashboard-cont-content__info__posts-box">
                                <span id="post_uid">UID:</span>
                                <span id="post_title">Title:</span>
                                <span id="post_date">Date:</span>
                                <p id="post_content">Content:</p>
                            </div>
                            <div className="dashboard-cont-content__info__posts-box">
                                <span id="post_uid">UID:</span>
                                <span id="post_title">Title:</span>
                                <span id="post_date">Date:</span>
                                <p id="post_content">Content:</p>
                            </div>
                            <div className="dashboard-cont-content__info__posts-box">
                                <span id="post_uid">UID:</span>
                                <span id="post_title">Title:</span>
                                <span id="post_date">Date:</span>
                                <p id="post_content">Content:</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default dashboard;