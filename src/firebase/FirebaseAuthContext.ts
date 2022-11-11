import { initializeApp, FirebaseApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  // signInWithPopup,
  signInWithCustomToken,
  GoogleAuthProvider,
  Auth,
  getAuth,
} from "firebase/auth";
import { log } from "./../helpers";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth: Auth = getAuth(firebaseApp);

const googleAuth = new GoogleAuthProvider();
googleAuth.addScope("profile");
googleAuth.addScope("email");

export const firebaseUserCreate = (email: string, password: string) =>{
  log('FirebaseAuthContext.firebaseUserCreate', email, password)
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
}
export const firebaseUserLogin = (args: {
  email: string;
  password: string;
}) => {
  return signInWithEmailAndPassword(firebaseAuth, args.email!, args.password!);
};
export const firebaseGoogleLogin = async (token:string) =>
signInWithCustomToken(firebaseAuth, token)
// signInWithPopup(firebaseAuth, googleAuth);
export const firebaseLogout = () => signOut(firebaseAuth);

export type IFirebaseErrorCode = {
  code: string;
  message: string;
};

export type IFirebaseErrorCodes = {
  [key: string]: any;
  code: IFirebaseErrorCode;
};

export const FirebaseErrors: IFirebaseErrorCodes = {
  wrongPassword: {
    code: "auth/wrong-password",
    message: "Password incorrect",
  },
  notFound: {
    code: "auth/user-not-found",
    message: "User not found",
  },
  loginSubmit: {
    code: "auth/login-submit-handler",
    message: "Login hook exception",
  },
  loginGoogle: {
    code: "auth/login-google-handler",
    message: "Google authentication failed",
  },
  registerSubmit: {
    code: "auth/register-submit-handler",
    message: "Registration failed",
  },
  duplicateUser: {
    code: "auth/email-already-in-use",
    message: "Unable to complete registration",
  },
  weakPassword: {
    code: "auth/weak-password",
    message: " Password must be at least 6 characters",
  },
  generic: {
    code: "unknown",
    message: "An unknown error has ocurred",
  },
  code: {
    code: "",
    message: "",
  },
};

export const firebaseError = (error?: any, defaultTo?: IFirebaseErrorCode) => {
  try {
    const e = Object.values(FirebaseErrors).filter(
      (e) => JSON.stringify(e).indexOf(error.code) >= 0
    )[0];
    if (e) return e;
  } catch (e) {}

  return defaultTo || FirebaseErrors.generic;
};
