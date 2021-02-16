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

        let modalEmail =  Query.modalEmail();

        if(isActive){
            modalEmail.classList.add('active');
        }else{
            modalEmail.classList.remove('active');
        }

        modalEmail.addEventListener('click', (e) => {
            if(e.target === modalEmail){
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