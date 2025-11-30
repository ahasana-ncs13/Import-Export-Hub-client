// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcVlUCPEFjBswczwPwxFlZUEZT9xIa32Q",
  authDomain: "import-export-hub-f5488.firebaseapp.com",
  projectId: "import-export-hub-f5488",
  storageBucket: "import-export-hub-f5488.firebasestorage.app",
  messagingSenderId: "990123514458",
  appId: "1:990123514458:web:80445cc6745e44fdda1663"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);