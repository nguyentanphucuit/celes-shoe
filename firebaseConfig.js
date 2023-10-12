// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGFbr_tApeZYgYZLTan4pOTXpKMAK-XLs",
  authDomain: "celesshoe.firebaseapp.com",
  projectId: "celesshoe",
  storageBucket: "celesshoe.appspot.com",
  messagingSenderId: "389198239219",
  appId: "1:389198239219:web:cce289f3457a1d5e266e86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
