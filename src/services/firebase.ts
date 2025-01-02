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
  apiKey: "AIzaSyBx-wUQ_DXbLhUY8QbqBjSVF3oSNSit0uk",
  authDomain: "lets-fly-4f81b.firebaseapp.com",
  projectId: "lets-fly-4f81b",
  storageBucket: "lets-fly-4f81b.firebasestorage.app",
  messagingSenderId: "139821416824",
  appId: "1:139821416824:web:9c7573b465dae0bf61488d",
  measurementId: "G-BK3CS2XJ98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { auth, GoogleAuthProvider, signInWithPopup, firestore };