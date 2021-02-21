import React, { createRef, useEffect, useState } from 'react'

// utils
import Query from '../../helper/Query.js';

// component 
import PostHolderUI from './PostHolder.js';

const PostHolderContainer = ({ index, id, title, content, datePosted, setIsPostHolderActive, isEditable, setIsEditable }) => {
  
    const refs = {
        title: createRef(),
        content: createRef(),
        datePosted: createRef()
    }

    const [clickedSubmit, setClickedSubmit] = useState(false);

    const [postData, setPostData] = useState({
        uid: id,
        title: title,
        content: content,
        datePosted: datePosted.substr(0,10)
    });

    const editableEvent = () => {
        let activeElement = Query.postHolderActive();
       
        if(activeElement){
            let title = activeElement.querySelector('.post-title input');
            let content = activeElement.querySelector('.post-content textarea');
            let date = activeElement.querySelector('.post-date input');

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
    }

    const getInputData = (data) =>{
        let uid = data.querySelector('.post-uid input').value;
        let title = data.querySelector('.post-title input').value;
        let content = data.querySelector('.post-content textarea');
        let date = data.querySelector('.post-date input');
    }

    const postHolderClickHandler = (e) => {
        e.preventDefault();

        let current = e.currentTarget;
        let noActiveClass = !current.classList.contains('active');

        if(e.target === current){
            current.classList.toggle('active');
            noActiveClass ? setIsPostHolderActive(true) : setIsPostHolderActive(false);

            Query.postHolder().forEach(item => {
                let title = item.querySelector('.post-title input');
                let content = item.querySelector('.post-content textarea');
                let date = item.querySelector('.post-date input');
    
                if(item != current){
                    item.classList.remove('active');
    
                    setIsEditable(false);
    
                    title.disabled = true;
                    content.disabled = true;
                    date.disabled = true;
                }else{
                    if(!item.classList.contains('active')){
                        setIsEditable(false);
    
                        title.disabled = true;
                        content.disabled = true;
                        date.disabled = true;
                    }
                }
            });
            getInputData(current);
        }
    }

    const postHolderSubmitHandler = (e) => {
        e.preventDefault();
        setClickedSubmit(true);

        setPostData({ 
            uid: postData.uid,
            title: refs.title.current.value,
            content: refs.content.current.value,
            datePosted: refs.datePosted.current.value 
        })
        console.log('casdsad')

    }

    useEffect(() => {
        if(clickedSubmit){
            setClickedSubmit(false);
        } 

    }, [postData])

    useEffect(() => {
        editableEvent();

    }, [isEditable])

    return (
        <PostHolderUI
            index = {index}
            postData = {postData}
            refs = {refs}
            postHolderClickHandler= {postHolderClickHandler}
            postHolderSubmitHandler = {postHolderSubmitHandler}
        />
    )
}

export default PostHolderContainer;
