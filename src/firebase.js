import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyClvQIgg9HnIh3TD9A-Tz67WybixGlGdJg",
    authDomain: "linkedin-clone-2b09b.firebaseapp.com",
    projectId: "linkedin-clone-2b09b",
    storageBucket: "linkedin-clone-2b09b.appspot.com",
    messagingSenderId: "371557934226",
    appId: "1:371557934226:web:765102259b078af416724b"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
