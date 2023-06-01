import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
import "firebase/compat/storage";
import firebase from 'firebase/compat/app';
import "firebase/storage";
import { getStorage } from "firebase/storage";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCm37A1Oqth1Q3mAgF3GNlCq3AvRHo-B8g",
    authDomain: "gujaratimat.firebaseapp.com",
    projectId: "gujaratimat",
    storageBucket: "gujaratimat.appspot.com",
    messagingSenderId: "347662042663",
    appId: "1:347662042663:web:34edba676be3f86546b002",
    measurementId: "G-7V8YFM5N9Z"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const storage = getStorage(app);

//export { auth, db, storage, firebase };
export { auth, db, firebase, storage };