// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjqkgnrGSRK689jMPLyi5rRV82UpUI_yw",
  authDomain: "auth-dev-courseportal.firebaseapp.com",
  projectId: "auth-dev-courseportal",
  storageBucket: "auth-dev-courseportal.appspot.com",
  messagingSenderId: "512598964849",
  appId: "1:512598964849:web:5d4c9ecd8bf58dd7a8f9d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
