import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkzuI1V_47You8xmDLYksMQ_aOjvnQkmU",
  authDomain: "logins-from.firebaseapp.com",
  projectId: "logins-from",
  storageBucket: "logins-from.firebasestorage.app",
  messagingSenderId: "659652265295",
  appId: "1:659652265295:web:1e30b20178e59077e4b13a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialized auth
const db = getFirestore(app); // Initialized Firestore

// Authentication providers for Google and Facebook
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Sign-in methods using popup
const googleSignIn = () => signInWithPopup(auth, googleProvider);
const facebookSignIn = () => signInWithPopup(auth, facebookProvider);

// Exporting Firebase services and methods for use in other parts of the app
export {
  auth,
  db,
  googleSignIn,
  facebookSignIn,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  setDoc,
  doc,
};
