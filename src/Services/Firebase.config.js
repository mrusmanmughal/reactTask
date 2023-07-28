import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2EVgJt0dADYd80OR85ewpJEEpc3Y_-J8",
  authDomain: "testet-305f1.firebaseapp.com",
  projectId: "testet-305f1",
  storageBucket: "testet-305f1.appspot.com",
  messagingSenderId: "7354877098",
  appId: "1:7354877098:web:b6939dc80dbd2f2caa3cd3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
export { Auth };
export const db = getFirestore(app);
