import React, { useEffect, useState } from 'react'

// utils
import Query from '../../helper/Query.js';

//component ui
import PostMethodUI from './PostMethod.js';

// custom hooks
import {useShowDataFirestore} from '../../hooks/useShowDataFirestore.js';

const PostMethodContainer = ({ isGuest, isPostHolderActive, isEditable, setIsEditable }) => {
    const [posts, setOrder] = useShowDataFirestore();
    const [isDisabled, setIsDisabled] = useState(true);
    const [selected, setSelected] = useState('asc');

    const orderOnChangeHandler = (e) => {
        e.preventDefault();
        setSelected(e.currentTarget.value);
    }

    const editableClickHandler = (e) =>{
        e.preventDefault();
        setIsEditable(!isEditable);
    }

    const methodDisabled = (isDisabled) => {
        let postEdit = Query.postMethodEdit();

        postEdit.disabled = isDisabled;
    }

    useEffect(() => {
        let admin = !isGuest;

        if(admin){
            if(isPostHolderActive){
                setIsDisabled(true);
            }else{
                setIsDisabled(false);
            }
        }else if(isGuest){
            setIsDisabled(true)
        }

        methodDisabled(isDisabled);
    }, [isPostHolderActive])

    useEffect(() => {
        setOrder(selected);
     
    }, [selected])
    return (
        <PostMethodUI
            editableClickHandler = {editableClickHandler}
            orderOnChangeHandler = {orderOnChangeHandler}
        />
    )
}

export default PostMethodContainer;
