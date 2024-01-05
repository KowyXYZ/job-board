// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfHCmUsjhJmMo4E5QCAIRryRfHntJtlRI",
  authDomain: "job-board-32d3f.firebaseapp.com",
  projectId: "job-board-32d3f",
  storageBucket: "job-board-32d3f.appspot.com",
  messagingSenderId: "584460167519",
  appId: "1:584460167519:web:6eec1478c592183a9d6eea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
