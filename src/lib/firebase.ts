// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "studio-8859462964-66021",
  "appId": "1:70674293217:web:2044ed2bb478cc5108b2a0",
  "apiKey": "AIzaSyAN0CoXOH3nRt98dCC4Vh1vmeVwA6Ldrh8",
  "authDomain": "studio-8859462964-66021.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "70674293217"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
