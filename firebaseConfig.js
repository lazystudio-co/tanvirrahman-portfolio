// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_Jepla-fYRcZnfETe54pL-EQ9np-4Wqo",
  authDomain: "tanvirrahman-fd91e.firebaseapp.com",
  databaseURL: "https://tanvirrahman-fd91e-default-rtdb.firebaseio.com",
  projectId: "tanvirrahman-fd91e",
  storageBucket: "tanvirrahman-fd91e.firebasestorage.app",
  messagingSenderId: "570173326568",
  appId: "1:570173326568:web:c23fb74e16b2a037a2b55d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
