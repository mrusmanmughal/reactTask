import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import * as firebase from "@firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDn3bOD6UEk00rsVLc4fXYjv9dObOSDYcU",
  authDomain: "otptest-a415a.firebaseapp.com",
  projectId: "otptest-a415a",
  storageBucket: "otptest-a415a.appspot.com",
  messagingSenderId: "608336835811",
  appId: "1:608336835811:web:71923b792595a891e4c1d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);

export default { firebase, Auth };
