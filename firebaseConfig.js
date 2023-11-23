// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEH5mayGgC4dV-o05xfCRn8GzyJgV9zVU",
  authDomain: "celesshoe-6121f.firebaseapp.com",
  projectId: "celesshoe-6121f",
  storageBucket: "celesshoe-6121f.appspot.com",
  messagingSenderId: "486569006889",
  appId: "1:486569006889:web:eb3755bd31b984f618c938",
  measurementId: "G-YTCY3QSFX1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
