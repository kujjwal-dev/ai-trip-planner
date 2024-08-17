// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-travel-planner-9d030.firebaseapp.com",
  projectId: "ai-travel-planner-9d030",
  storageBucket: "ai-travel-planner-9d030.appspot.com",
  messagingSenderId: "717226108931",
  appId: "1:717226108931:web:5ba5f08778edebe944c636",
  measurementId: "G-R5KNVE2J3H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);