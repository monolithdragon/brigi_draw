import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCanyh0LfzbMg5zJ11PkSC8W3u1K81gPH8",
    authDomain: "brigidraw-d68c8.firebaseapp.com",
    projectId: "brigidraw-d68c8",
    storageBucket: "brigidraw-d68c8.appspot.com",
    messagingSenderId: "350802799634",
    appId: "1:350802799634:web:258a57af4e5e25d8f6fccb",
    measurementId: "G-B6RK28792Y"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);