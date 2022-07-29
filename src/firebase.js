
import {initializeApp} from 'firebase/app'
import { getFirestore } from "firebase/firestore";

 const firebaseConfig=
    {
        apiKey: "AIzaSyAhhD4Gl7jCA91CqK4LnlJJD9dIPxtwy6E",
        authDomain: "contact-19f7a.firebaseapp.com",
        projectId: "contact-19f7a",
        storageBucket: "contact-19f7a.appspot.com",
        messagingSenderId: "509385589692",
        appId: "1:509385589692:web:776893daf8f46eae0f21b9"
      }
      
const app =initializeApp(firebaseConfig)
export const db = getFirestore(app);
