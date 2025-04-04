import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4YQv3nJzVC8TZ_L5elpfPGNOPmbeqWjI",
  authDomain: "backend-75915.firebaseapp.com",
  projectId: "backend-75915",
  storageBucket: "backend-75915.firebasestorage.app",
  messagingSenderId: "681657993018",
  appId: "1:681657993018:web:e0d7541deb693ad2b97203"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);