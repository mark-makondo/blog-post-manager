import React from 'react'

// component 
import PostHolderUI from './PostHolder.js';

const PostHolderContainer = ({ id, title, content, datePosted }) => {
   
    return (
        <PostHolderUI
            id = {id}
            title = {title}
            content = {content}
            datePosted = {datePosted}
        />
    )
}

export default PostHolderContainer;
