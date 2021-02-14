import firebase from 'firebase/app';
import 'firebase/firestore'; // database
import 'firebase/analytics'; // database

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4E7IKoh-BZOdMOhDHHe9cpPUrFscp4Qk",
    authDomain: "portfolio-blog-f7a26.firebaseapp.com",
    projectId: "portfolio-blog-f7a26",
    storageBucket: "portfolio-blog-f7a26.appspot.com",
    messagingSenderId: "810706913569",
    appId: "1:810706913569:web:c64005872086fc5b701660",
    measurementId: "G-1XE5NBVTMS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// initialize Firestore
const database = firebase.firestore();
// const analytics = firebase.analytics();
const timestamp = firebase.firestore.FieldValue.serverTimeStamp;

export { database, timestamp};