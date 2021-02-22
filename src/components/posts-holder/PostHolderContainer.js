import React, { createRef, useEffect, useState } from 'react'

// utils
import Query from '../../helper/Query.js';

// component 
import PostHolderUI from './PostHolder.js';

// custom hooks
import {usePostMethodFirestore} from '../../hooks/usePostMethodFirestore.js';

const PostHolderContainer = (props) => {
    //#region initialize values: useState, refs, props
    let index = props.index;
    let id = props.id;
    let title = props.title;
    let content = props.content; 
    let datePosted = props.datePosted;
    let setIsPostHolderActive = props.setIsPostHolderActive;
    let isEditable = props.isEditable;
    let setIsEditable = props.setIsEditable;

    const refs = {
        title: createRef(),
        content: createRef(),
        datePosted: createRef()
    }

    const [clickedSubmit, setClickedSubmit] = useState(false);
    const [clickedDelete, setclickedDelete] = useState(false);

    const [postData, setPostData] = useState({
        uid: id,
        title: title,
        content: content,
        datePosted: datePosted
    });

    const [setType, setData] = usePostMethodFirestore();
    //#endregion

    const disableFormInputs = (data, value) => {
        let title = data.querySelector('.post-title input');
        let content = data.querySelector('.post-content textarea');
        let submit = data.querySelector('button');
       
        title.disabled = value;
        content.disabled = value;
        submit.disabled = value;
    } // just a form input queries function for DRY.

    const editableEvent = () => {
        Query.postHolder().forEach(item => {
            let activeElement = Query.postHolderActive();
            
            disableFormInputs(item, true);

            if(activeElement){
                if(isEditable){
                    disableFormInputs(activeElement, false);
                }else{
                    disableFormInputs(activeElement, true);
                }
            }
        });
    } // if we are on active post & isEditable is true, enable form inputs otherwise disable it.

    const postHolderClickHandler = (e) => {
        e.preventDefault();

        let current = e.currentTarget;
        let noActiveClass = !current.classList.contains('active');

        if(e.target === current){
            current.classList.toggle('active');
            noActiveClass ? setIsPostHolderActive(true) : setIsPostHolderActive(false);
            
            Query.postHolder().forEach(item => {
                if(item !== current){

                    item.classList.remove('active');
    
                    setIsEditable(false);
                    disableFormInputs(item, true);
                }else{
                    if(!item.classList.contains('active')){
            
                        setIsEditable(false);
                        disableFormInputs(item, true);
                    } // if we are on the current and it is not active , disable edit & delete & form inputs.
                }

            }); // it runs if we clicked a different post.
        } // determines if clicked container is the parent.
    } // set logic if we clicked the post parent container for form inputs, edit & delete.

    const postHolderSubmitClickHandler = (e) => {
        e.preventDefault();
        setClickedSubmit(true);

        setPostData({ 
            ...postData,
            title: refs.title.current.value,
            content: refs.content.current.value,
        })
    } // set post data when submit is clicked.

    const postHolderDeleteClickHandler = (e) => {
        e.preventDefault();
        setclickedDelete(true);
        
        setPostData({ 
            ...postData,
            title: refs.title.current.value,
            content: refs.content.current.value,
        })
    } // set post data when delete is clicked.

    useEffect(() => {
        if(clickedSubmit){
            setType('edit');
            setData(postData);
            setClickedSubmit(false);
        } //if submit is clicked run usePostMethodFirestore custom hook.

        if(clickedDelete){
            setType('delete');
            setData(postData);
            setclickedDelete(false);
        } //if delete is clicked run usePostMethodFirestore custom hook.

    }, [postData]) // this only runs if postData changes.

    useEffect(() => {
        //set input values whenever post data changes.
        refs.title.current.value = postData.title;
        refs.content.current.value = postData.content;

        editableEvent();

    }, [isEditable]) // this runs everytime isEditable is set.

    return (
        <PostHolderUI
            index = {index}
            postData = {postData}
            refs = {refs}
            postHolderClickHandler= {postHolderClickHandler}
            postHolderSubmitClickHandler = {postHolderSubmitClickHandler}
            postHolderDeleteClickHandler = {postHolderDeleteClickHandler}
        />
    )
}

export default PostHolderContainer;
