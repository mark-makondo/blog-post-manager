import React, { useEffect, useState } from 'react';

//component
import ModalEmailUI from './ModalNewPost.js';

//utils
import Query from '../../helper/Query.js';

//custom hooks
import {useAddDataFirestore} from '../../hooks/useAddDataFirestore.js';

const ModalNewPostContainer = ({ isActive, setIsActive }) => {

    const [setNewPost, setClicked] = useAddDataFirestore();
    const [formInput, setFormInput] = useState({
        title: '',
        content: '',
        datePosted: ''
    });

    const formClickHandler = (e) =>{
        e.preventDefault();
        setClicked(true);
        setNewPost(formInput);
        setIsActive(false);
    }

    const handleTextOnChange = (e) => {
        e.preventDefault();
        setFormInput({
            ...formInput,
            [e.target.id] : e.target.value
        })
    }

    const isModalActive = (isActive) => {

        let modalNewPost =  Query.modalNewPost();

        if(isActive){
            modalNewPost.classList.add('active');
        }else{
            modalNewPost.classList.remove('active');
        }

        modalNewPost.addEventListener('click', (e) => {
            if(e.target === modalNewPost){
                setIsActive(false);
            }
        })

    }

    useEffect(() => {
        isModalActive(isActive);

    }, [isActive])
    
    return(
        <ModalEmailUI
            handleTextOnChange = {handleTextOnChange}
            formClickHandler = {formClickHandler}
        />
    )
}

export default ModalNewPostContainer