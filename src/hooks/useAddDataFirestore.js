import { useEffect, useState } from 'react';

//firebase
import {database} from '../config/firebase-config.js';

const useAddDataFirestore = () => {
    const [newPost, setNewPost] = useState({});
    const [clicked, setClicked] = useState(false);

    const addPostHandler = async () => {
        try{
            await database.collection('posts').add({
                ...newPost,
                authorId: 1234,
                datePosted: new Date()
            })
            alert('New Post Added Succesfully');
            setClicked(false);
        }catch (err){
            alert(err);
        }
    }

    useEffect(() => {
        if(clicked){
            addPostHandler();
        }

    }, [clicked])

    return [setNewPost, setClicked];
}

export {useAddDataFirestore};