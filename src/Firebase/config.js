import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7w0R8j3QFKgZ5g4TkD1ER-wmQ05p65l0",
  authDomain: "l-a-comic.firebaseapp.com",
  projectId: "l-a-comic",
  storageBucket: "l-a-comic.appspot.com",
  messagingSenderId: "702225547615",
  appId: "1:702225547615:web:e82a8c641814df8916f6ea",
  measurementId: "G-V0WQCZLD2P"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);