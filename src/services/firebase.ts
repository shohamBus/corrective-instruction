// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5qkSe8BcHJkNwwLl2UchGEisroLnVchE",
  authDomain: "corrective-instruction.firebaseapp.com",
  projectId: "corrective-instruction",
  storageBucket: "corrective-instruction.firebasestorage.app",
  messagingSenderId: "238048212147",
  appId: "1:238048212147:web:61b7a55f860d56d2a16cc6",
  measurementId: "G-YRPFV14K11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { auth, GoogleAuthProvider, signInWithPopup, firestore };