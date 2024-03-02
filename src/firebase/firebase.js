import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCijYYC_nMqtocKNF_1-Yr1G86JGwx3xsg",
  authDomain: "travel-planner-10b0f.firebaseapp.com",
  projectId: "travel-planner-10b0f",
  storageBucket: "travel-planner-10b0f.appspot.com",
  messagingSenderId: "641360213038",
  appId: "1:641360213038:web:19f76b7edb6e22697edbbf",
  measurementId: "G-T5SB04WLZ7"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 
const db = getFirestore(app);

export { auth,db };