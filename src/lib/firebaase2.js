import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkzuI1V_47You8xmDLYksMQ_aOjvnQkmU",
  authDomain: "logins-from.firebaseapp.com",
  projectId: "logins-from",
  storageBucket: "logins-from.firebasestorage.app",
  messagingSenderId: "659652265295",
  appId: "1:659652265295:web:c2bba3668eb864dfe4b13a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword };
