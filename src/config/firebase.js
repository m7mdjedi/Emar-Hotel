// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs-C4Yqak-pfTCC8J9LEQAmJU1qE3NVZM",
  authDomain: "virtual-school-26e52.firebaseapp.com",
  projectId: "virtual-school-26e52",
  storageBucket: "virtual-school-26e52.appspot.com",
  messagingSenderId: "133878544018",
  appId: "1:133878544018:web:db35a75e2f832c3a19184b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth=getAuth(); 