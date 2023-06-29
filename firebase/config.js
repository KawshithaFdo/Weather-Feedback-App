// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA13Tt3pBfaztcrHW27oHRGIHtBs55D27U",
  authDomain: "app-one-5d826.firebaseapp.com",
  projectId: "app-one-5d826",
  storageBucket: "app-one-5d826.appspot.com",
  messagingSenderId: "770529868657",
  appId: "1:770529868657:web:8b3231563bcbef52d1d4d0",
  measurementId: "G-EWYTN19C99"
};



if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export { firebase }; 