// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCvL72ZoYLzqp7hB9VbZSe3NqR6kxRKy5E",
  authDomain: "referral-dashboard-f158f.firebaseapp.com",
  projectId: "referral-dashboard-f158f",
  storageBucket: "referral-dashboard-f158f.firebasestorage.app",
  messagingSenderId: "407870406093",
  appId: "1:407870406093:web:49d9f06bcf732cf8155884",
  measurementId: "G-TTG325X6ZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
// import { initializeFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCvL72ZoYLzqp7hB9VbZSe3NqR6kxRKy5E",
//   authDomain: "referral-dashboard-f158f.firebaseapp.com",
//   projectId: "referral-dashboard-f158f",
//   storageBucket: "referral-dashboard-f158f.firebasestorage.app",
//   messagingSenderId: "407870406093",
//   appId: "1:407870406093:web:49d9f06bcf732cf8155884",
//   measurementId: "G-TTG325X6ZF"
// };

// // 1. Initialize Firebase App
// const app = initializeApp(firebaseConfig);

// // 2. Initialize Firestore مع تفعيل كشف Long Polling التلقائي لتجاوز حظر الشبكة
// export const db = initializeFirestore(app, {
//   experimentalAutoDetectLongPolling: true,
// });