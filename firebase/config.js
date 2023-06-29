// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBUtTigHxHj8kIyi8Mfsveyj2vTjAHFUrU',
  authDomain: 'myapp-9d608.firebaseapp.com',
  projectId: 'myapp-9d608',
  storageBucket: 'myapp-9d608.appspot.com',
  messagingSenderId: '607151861467',
  appId: '1:607151861467:web:1f8bdb9d00fefceed326fe',
  measurementId: 'G-VL90WXTBYS',
};



if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export { firebase }; 