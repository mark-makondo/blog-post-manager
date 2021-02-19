import React, { createRef, useEffect, useState } from 'react'

// component 
import PostHolderUI from './PostHolder.js';

const PostHolderContainer = ({ id, title, content, datePosted, setIsPostHolderActive, isEditable }) => {
    
    const refs = {
        title: createRef(),
        content: createRef(),
        datePosted: createRef()
    }

    const [clicked, setClicked] = useState(false);
    const [postData, setPostData] = useState({
        uid: id,
        title: title,
        content: content,
        datePosted: datePosted.substr(0,10)
    });

    const isEditableHandler = (data) =>{

        let title = data.querySelector('.post-title input');
        let content = data.querySelector('.post-content textarea');
        let date = data.querySelector('.post-date input');

        if(isEditable){
            title.disabled = false;
            content.disabled = false;
            date.disabled = false;
        }else{
            title.disabled = true;
            content.disabled = true;
            date.disabled = true;
        }
    }

    const postHolderClickHandler = (e) => {
        e.preventDefault();

        let current = e.currentTarget;
        let uid = current.querySelector('.post-uid input').value;
        let noActiveClass = !current.classList.contains('active');

        current.classList.toggle('active');

        noActiveClass ? setIsPostHolderActive(false) : setIsPostHolderActive(true);

        isEditableHandler(current);
    }

    const postHolderSubmitHandler = (e) => {
        e.preventDefault();
        setClicked(true);

        setPostData({ 
            uid: postData.uid,
            title: refs.title.current.value,
            content: refs.content.current.value,
            datePosted: refs.datePosted.current.value 
        })
    }

    const inputOnchangeHandler = () => {}

    useEffect(() => {
        if(clicked){
            console.log(postData)
            setClicked(false);
        }

    }, [postData])

    return (
        <PostHolderUI
            postData = {postData}
            refs = {refs}
            postHolderClickHandler= {postHolderClickHandler}
            postHolderSubmitHandler = {postHolderSubmitHandler}
            inputOnchangeHandler = {inputOnchangeHandler}
            isEditable = {isEditable}
        />
    )
}

export default PostHolderContainer;
