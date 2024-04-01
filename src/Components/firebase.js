// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC7H6wUC7OZBPGw3OW05M23kSWEX_Vj5Tg",
  authDomain: "instagram-clone-95f40.firebaseapp.com",
  projectId: "instagram-clone-95f40",
  storageBucket: "instagram-clone-95f40.appspot.com",
  messagingSenderId: "763129445067",
  appId: "1:763129445067:web:6b0301e451fde3e28cf94e",
  measurementId: "G-ZQ8C7B3HKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, storage };

//cant get the firebase authentication to work