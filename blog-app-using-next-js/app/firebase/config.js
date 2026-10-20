// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBt6idjtR7Hg9Ohx-zn9pUe0h6aIfSo7yA",
  authDomain: "next-js-blog-53497.firebaseapp.com",
  projectId: "next-js-blog-53497",
  storageBucket: "next-js-blog-53497.firebasestorage.app",
  messagingSenderId: "66036476740",
  appId: "1:66036476740:web:14f975b02dc4d659fac511"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore()