// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2G-e_O7mDOmJ_YFmdnGx_pn3FhiycWFI",
  authDomain: "giphy-api-65a87.firebaseapp.com",
  projectId: "giphy-api-65a87",
  storageBucket: "giphy-api-65a87.appspot.com",
  messagingSenderId: "869775145138",
  appId: "1:869775145138:web:bb74bba2ae6af2ef1531ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);