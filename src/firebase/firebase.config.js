// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHsaCa6sBkg25XjRQPT23MbvvRby5p9UY",
  authDomain: "tourism-management-websi-c0728.firebaseapp.com",
  projectId: "tourism-management-websi-c0728",
  storageBucket: "tourism-management-websi-c0728.appspot.com",
  messagingSenderId: "886703253327",
  appId: "1:886703253327:web:66651005b9210e077f473a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;