import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "idea-vault-project-22cff.firebaseapp.com",
  projectId: "idea-vault-project-22cff",
  storageBucket: "idea-vault-project-22cff.firebasestorage.app",
  messagingSenderId: "856838482059",
  appId: "1:856838482059:web:99f2721672001372facc8e",
  measurementId: "G-7XFEMXMB50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;