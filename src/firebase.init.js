// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHg3ADabroXeKSROiErwQKojeX9zw-bdY",
  authDomain: "gozzby-client-side.firebaseapp.com",
  projectId: "gozzby-client-side",
  storageBucket: "gozzby-client-side.appspot.com",
  messagingSenderId: "530016654057",
  appId: "1:530016654057:web:d70bed7879470db8ba1678"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;