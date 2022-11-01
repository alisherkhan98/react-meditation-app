import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuQRk-6A_Wsjnd9MvOroSkrDg-2Pp1PMI",
  authDomain: "meditation-app-f289d.firebaseapp.com",
  projectId: "meditation-app-f289d",
  storageBucket: "meditation-app-f289d.appspot.com",
  messagingSenderId: "443959139699",
  appId: "1:443959139699:web:0a4baa0e300d26f826b906",
  measurementId: "G-W9CL92X1HL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//   Auth
const auth = getAuth();
const db = getFirestore(app);

export default db;
export { auth };