// Firebase configuration and authentication setup.
// Exports auth and Google provider for use in the app.

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8gYUFyPu0LOhOIZknbjf4jlZTTrJgNKM",
  authDomain: "capstone-0630-bsit.firebaseapp.com",
  projectId: "capstone-0630-bsit",
  storageBucket: "capstone-0630-bsit.appspot.com",
  messagingSenderId: "487897853864",
  appId: "1:487897853864:web:59548f6a0c74d8ffc3b79d",
  measurementId: "G-LGYQ75SS5G"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
