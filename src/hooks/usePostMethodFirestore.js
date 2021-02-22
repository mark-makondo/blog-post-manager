import { useEffect, useState } from 'react';

//firebase
import {database} from '../config/firebase-config.js';

const usePostMethodFirestore = () => {
    const [type, setType] = useState();
    const [postData, setPostData] = useState({});

    const postMethod = async () => {
        try{
            if(type === 'edit'){
                await database.collection('posts').doc(postData.uid).set({
                    title: postData.title,
                    content: postData.content,
                    datePosted: new Date(postData.datePosted)
                });
            }else if(type === 'delete'){
                await database.collection('posts').doc(postData.uid).delete();
            }
            
        }catch (err){
        }
    }

    useEffect(() => {
        postMethod();

        return () => {
            postMethod() && postMethod();
        }
    }, [postData])

    return [setType, setPostData];
}

export {usePostMethodFirestore};