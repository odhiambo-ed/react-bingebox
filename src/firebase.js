// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyD4d6hCkTULeevALmMVKLNLJonfQS-nbLo",
    authDomain: "netflix-clone-4c59b.firebaseapp.com",
    projectId: "netflix-clone-4c59b",
    storageBucket: "netflix-clone-4c59b.firebasestorage.app",
    messagingSenderId: "793117292161",
    appId: "1:793117292161:web:66c7011e3198a6ba1cff80",
    measurementId: "G-KEFHG4GNPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const sig