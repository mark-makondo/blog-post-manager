import React, { useEffect, useState } from 'react'

// utils
import Query from '../../helper/Query.js';

//component ui
import PostMethodUI from './PostMethod.js';

const PostMethodContainer = ({ isGuest, isPostHolderActive, isEditable, setIsEditable }) => {
    const [isDisabled, setIsDisabled] = useState(true);

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

    return (
        <PostMethodUI
            editableClickHandler = {editableClickHandler}
        />
    )
}

export default PostMethodContainer;
