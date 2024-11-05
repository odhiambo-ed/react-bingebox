// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase configuration
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
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), { // Ensure collection name is correct
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        // console.error("Signup error:", error);
        // alert(error.message); // Use error.message for a more descriptive alert
        toast.error(error.message);
    }
}

const signin = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password); // Await the call
    } catch (error) {
        // console.error("Signin error:", error);
        // alert(error.message);
        toast.error(error.message);
    }
}

const logout = () => {
    signOut(auth).catch(error => {
        // console.error("Logout error:", error);
        // alert(error.message);
        toast.error(error.message);
    });
}

export { signup, signin, logout, auth, db };