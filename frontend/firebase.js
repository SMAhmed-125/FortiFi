// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx0xUkfOgJCZS8quqKxraVLjsgRzaIdwc",
  authDomain: "fortifi-373a0.firebaseapp.com",
  projectId: "fortifi-373a0",
  storageBucket: "fortifi-373a0.firebasestorage.app",
  messagingSenderId: "361549583771",
  appId: "1:361549583771:web:50be2343568eebbc9dfd3e",
  measurementId: "G-NHR8D8L6S0"
};

// Initialize Firebase
const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);

