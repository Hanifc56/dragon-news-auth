// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi2hNWo0ZtJp_nmLGMPP6rSQbSh0OtUq4",
  authDomain: "simple-dragon-news-auth.firebaseapp.com",
  projectId: "simple-dragon-news-auth",
  storageBucket: "simple-dragon-news-auth.appspot.com",
  messagingSenderId: "807335214533",
  appId: "1:807335214533:web:4cc7cd4e0f3d75aacddfac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
