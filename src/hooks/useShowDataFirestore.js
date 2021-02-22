import { useEffect, useState } from 'react';

//firebase
import {database} from '../config/firebase-config.js';

const useShowDataFirestore = () => {
    const [posts, setPosts] = useState([]);
    const [order, setOrder] = useState('asc');

    const postsCollection = (target) => {
        console.log(target)
        database.collection('posts')
            .orderBy('datePosted', target)
            .onSnapshot((snap) => {
                let documents = [];

                snap.forEach((doc) => {
                    documents.push({...doc.data(), id: doc.id});
                });

                setPosts(documents);
            })
    }
    
    useEffect(() => {
        if(order){
            postsCollection(order);
        }

    }, [order])

    return [posts, setOrder];
}

export {useShowDataFirestore};