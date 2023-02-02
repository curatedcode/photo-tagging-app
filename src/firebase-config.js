// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWkqgjwkFXiQQ7zMqAWNbysAATt6sTJ0k",
  authDomain: "photo-tagging-app-ee3ad.firebaseapp.com",
  projectId: "photo-tagging-app-ee3ad",
  storageBucket: "photo-tagging-app-ee3ad.appspot.com",
  messagingSenderId: "1095748117668",
  appId: "1:1095748117668:web:c4791fcedf5738f803f231"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)