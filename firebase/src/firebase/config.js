// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAt8AdSWd-Hx5wiJApfcUFM83jai8E9dT0",
  authDomain: "fir-1f104.firebaseapp.com",
  projectId: "fir-1f104",
  storageBucket: "fir-1f104.appspot.com",
  messagingSenderId: "705321911745",
  appId: "1:705321911745:web:80488edf7ab9d714f99b40",
  measurementId: "G-R8V9LV56HW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };