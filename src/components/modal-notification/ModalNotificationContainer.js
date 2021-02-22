import React, { useEffect } from 'react';

//component
import ModalNotificationUI from './ModalNotification.js';

//utils
import Query from '../../helper/Query.js';


const ModalNotificationContainer = ({ isActive, setIsActive, setIsEditable }) => {

    const isModalActive = (target) => {
        let modalEmail =  Query.modalNotification();

        if(modalEmail){
            if(target){
                modalEmail.classList.add('active');
            }else{
                modalEmail.classList.remove('active');
            }
    
            modalEmail.addEventListener('click', (e) => {
                if(e.target === modalEmail){
                    setIsActive(false);
                    setIsEditable(false);
                }
            })
        }
    }

    useEffect(() => {
        isModalActive(isActive);

        return() => {
            isModalActive() && isModalActive()
        }

    }, [isActive])
    
    return(
        <ModalNotificationUI/>
    )
}

export default ModalNotificationContainer