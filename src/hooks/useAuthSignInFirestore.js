import { useEffect, useState } from 'react';

//firebase
import {auth} from '../config/firebase-config.js';

const useAuthSignInFirestore = () => {
    const [clicked, setClicked] = useState(false);
    const [type, setType] = useState();
    const [currentUser, setCurrentUser] = useState({});
    const [isLoggedOut, setIsLoggedOut] = useState(false);
    const [redirect, setRedirect] = useState(null);
    const [status, setStatus] = useState('');

    //exclusive for admin
    const [credentials, setCredentials] = useState({});

    const signIn = async () => {
        try{
            if(type === 'guest'){
                if(isLoggedOut){
                    await auth.currentUser.delete();
                    await auth.signOut();
                    // console.log('Guest logged out success')
                }else{
                    await auth.signInAnonymously();
                    setRedirect('/dashboard');
                }
            }else if(type === 'admin'){
                if(isLoggedOut){
                    await auth.signOut();
                    // console.log('Admin logged out success')
                }else{
                    const admin = await auth.signInWithEmailAndPassword(
                        credentials.email,
                        credentials.password
                    )
                        
                    if(admin){
                        setRedirect('/dashboard');
                        // console.log('success', admin)
                    }
                }
            }
            
        }catch (err){
            // console.log(err, 'Login Failed');
            setStatus('Login Failed');
        }
    }

    useEffect(() => {
        if(clicked){
            signIn();
            if(type === 'admin') {
                setClicked(false);
            }
        }

        return () => {
            signIn() && signIn();
        }
    }, [clicked])

    useEffect(() => {
        let isMounted = true;
      
        auth.onAuthStateChanged(user => {
            if(isMounted){
                if(user){
                    // console.log('Current User Data' , user);
                    setCurrentUser(user);
                }else{
                    // console.log('Logged Out', user);
                    setStatus('')
                }
            }
        })

        return () => {
            isMounted = false
        }
    }, [currentUser])

    return [status, redirect, setType, setClicked, setIsLoggedOut, currentUser, setCredentials];
}

export {useAuthSignInFirestore};