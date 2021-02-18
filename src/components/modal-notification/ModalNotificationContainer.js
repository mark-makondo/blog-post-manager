import React, { useEffect } from 'react';

//component
import ModalNotificationUI from './ModalNotification.js';

//utils
import Query from '../../helper/Query.js';


const ModalNotificationContainer = ({ isActive, setIsActive }) => {

    const isModalActive = (isActive) => {

        let modalEmail =  Query.modalNotification();

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
        <ModalNotificationUI/>
    )
}

export default ModalNotificationContainer