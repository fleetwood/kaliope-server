
import { initializeApp, FirebaseApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  Auth, getAuth 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

console.log("FIREBASE:::", firebaseConfig);

export const firebaseApp:FirebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth:Auth = getAuth(firebaseApp);

const googleAuth = new GoogleAuthProvider();
    googleAuth.addScope('profile');
    googleAuth.addScope('email');

export const createUser = (email: string, password: string) => createUserWithEmailAndPassword(firebaseAuth, email,password)
export const login = (email: string, password: string) => signInWithEmailAndPassword(firebaseAuth, email,password)
export const googleLogin = async () => signInWithPopup(firebaseAuth, googleAuth);
export const logout = () => signOut(firebaseAuth)
  
