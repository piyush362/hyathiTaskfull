// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBb7p6HOr07vjfD_lFIsJScgcESL2E_75M",
    authDomain: "hyatitech.firebaseapp.com",
    projectId: "hyatitech",
    storageBucket: "hyatitech.appspot.com",
    messagingSenderId: "417160742539",
    appId: "1:417160742539:web:57293ff334eafc36fdf68e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };


