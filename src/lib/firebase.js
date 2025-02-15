// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5CVy-pf6fLe3BFhFCOwWE9yzyP_uTp30",
  authDomain: "health-app-b4ea3.firebaseapp.com",
  projectId: "health-app-b4ea3",
  storageBucket: "health-app-b4ea3.firebasestorage.app",
  messagingSenderId: "459746208479",
  appId: "1:459746208479:web:938c299f03d00900c0176a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
