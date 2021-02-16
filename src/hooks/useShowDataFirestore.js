import { useEffect, useState } from 'react';

//firebase
import Database from '../config/firebase-config.js';

const useShowDataFirestore = () => {
    const [showPosts, setShowPosts] = useState([]);

    const showPostsHandler = () => {
        Database.collection('posts')
            .orderBy('datePosted', 'desc')
            .onSnapshot((snap) => {
                let documents = [];

                snap.forEach((doc) => {
                    documents.push({...doc.data(), id: doc.id});
                });

                setShowPosts(documents);
            })
    }

    useEffect(() => {
        showPostsHandler();

    }, [])

    return [showPosts];
}

export {useShowDataFirestore};