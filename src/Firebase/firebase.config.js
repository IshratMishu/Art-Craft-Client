// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_ME_APIKEY,
    authDomain: import.meta.env.VITE_ME_AUTHDOMAIN,
    projectId: import.meta.env.VITE_ME_PROJECTID,
    storageBucket: import.meta.env.VITE_ME_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_ME_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_ME_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;