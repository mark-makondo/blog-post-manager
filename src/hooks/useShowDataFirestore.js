import { useEffect, useState } from 'react';

//firebase
import {database} from '../config/firebase-config.js';

const useShowDataFirestore = () => {
    const [posts, setPosts] = useState([]);

    const showPostsHandler = () => {
        database.collection('posts')
            .orderBy('datePosted', 'desc')
            .onSnapshot((snap) => {
                let documents = [];

                snap.forEach((doc) => {
                    documents.push({...doc.data(), id: doc.id});
                });

                setPosts(documents);
            })
    }

    useEffect(() => {
        showPostsHandler();

    }, [])

    return [posts];
}

export {useShowDataFirestore};