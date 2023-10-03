// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0OdN2DgFs2MhvP7R4c2Bv86GGpE_RMK4",
  authDomain: "auth-context-moha-milon.firebaseapp.com",
  projectId: "auth-context-moha-milon",
  storageBucket: "auth-context-moha-milon.appspot.com",
  messagingSenderId: "858424189903",
  appId: "1:858424189903:web:8ce6b795971689adbfa8ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;