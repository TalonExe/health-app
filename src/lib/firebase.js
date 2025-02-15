import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyA5CVy-pf6fLe3BFhFCOwWE9yzyP_uTp30",
    authDomain: "health-app-b4ea3.firebaseapp.com",
    projectId: "health-app-b4ea3",
    storageBucket: "health-app-b4ea3.firebasestorage.app",
    messagingSenderId: "459746208479",
    appId: "1:459746208479:web:938c299f03d00900c0176a"
  
};
const app = initializeApp(firebaseConfig, {
  automaticDataCollectionEnabled: false, // ⛔️ Prevents auto-loading init.json
});
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithRedirect, signOut };
