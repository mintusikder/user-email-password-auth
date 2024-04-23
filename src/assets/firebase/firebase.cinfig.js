// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpPjw9U8OSa8JGIpkpUSZ7UlgVERiqHIY",
  authDomain: "user-email-password-auth-9647d.firebaseapp.com",
  projectId: "user-email-password-auth-9647d",
  storageBucket: "user-email-password-auth-9647d.appspot.com",
  messagingSenderId: "459671106504",
  appId: "1:459671106504:web:edb18ebb941e5143ef06fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth