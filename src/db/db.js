import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCph0W6cb7Ye0rVxWu15bZL5C-rL7mKTNM",
  authDomain: "ecommerce-tobiasrueda.firebaseapp.com",
  projectId: "ecommerce-tobiasrueda",
  storageBucket: "ecommerce-tobiasrueda.firebasestorage.app",
  messagingSenderId: "638996547356",
  appId: "1:638996547356:web:f3a2a479f47901c737dcd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;