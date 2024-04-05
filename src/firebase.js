
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  
   apiKey: "AIzaSyD3mxcc52KB5F3CIIh1loeaFU7UR1SoN88",
   authDomain:"netflix-react1-be53d.firebaseapp.com",
   projectId: "netflix-react1-be53d",
   storageBucket: "netflix-react1-be53d.appspot.com",
  messagingSenderId: "528351523732",
  appId: "1:528351523732:web:2f6d2d41642b0744c11581"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);