// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZyvzSOQlwcU0Ho0HryWCyAFTJiGFOcb4",
  authDomain: "art-and-craft-project-6f4a2.firebaseapp.com",
  projectId: "art-and-craft-project-6f4a2",
  storageBucket: "art-and-craft-project-6f4a2.appspot.com",
  messagingSenderId: "552472162899",
  appId: "1:552472162899:web:27e10bb87cc4d7f648cca6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;