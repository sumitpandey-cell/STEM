// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4y-HWYCq62oQBwDinR92n5JWUMpFj6DE",
  authDomain: "studio-7716399800-caaff.firebaseapp.com",
  projectId: "studio-7716399800-caaff",
  storageBucket: "studio-7716399800-caaff.firebasestorage.app",
  messagingSenderId: "659990592520",
  appId: "1:659990592520:web:85bdce7fe9fabcf5cde5bd"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
