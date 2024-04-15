// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzINYnUzhkMObyFsKzVuoNsX4dWHOE7mE",
  authDomain: "sjsu-collab-4a48e.firebaseapp.com",
  projectId: "sjsu-collab-4a48e",
  storageBucket: "sjsu-collab-4a48e.appspot.com",
  messagingSenderId: "425547947116",
  appId: "1:425547947116:web:1f2070f65f6e09165d8c49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;