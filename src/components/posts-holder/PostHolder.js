import React from 'react'

const PostHolder = ({ id, title, content, datePosted }) => {

    return (
        <div className="post-holder normal-2">
            <span id="post-uid">UID: {id}</span>
            <span id="post-title">Title: {title}</span>
            <span id="post-date">Date: {datePosted}</span>
            <p id="post-content">Content: {content}</p>
        </div>
    )
}

export default PostHolder;
