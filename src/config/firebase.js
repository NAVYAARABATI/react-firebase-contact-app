import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0WEDAmDbnqdczN2rO5LdKR_tOdwZzesI",
  authDomain: "vite-contact-a7d4e.firebaseapp.com",
  projectId: "vite-contact-a7d4e",
  storageBucket: "vite-contact-a7d4e.firebasestorage.app",
  messagingSenderId: "705652010353",
  appId: "1:705652010353:web:f59d85a8e9c0ecb199dad0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore DB
export const db = getFirestore(app);