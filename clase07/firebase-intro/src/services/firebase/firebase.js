import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: "AIzaSyDeMYvgwrjw3I7M9yE69TgSa8W_ehTscPc",
  authDomain: "curso-89720.firebaseapp.com",
  projectId: "curso-89720",
  storageBucket: "curso-89720.firebasestorage.app",
  messagingSenderId: "636013650660",
  appId: "1:636013650660:web:d227c8e1fbe03ddd43c2f1",
}; */

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
