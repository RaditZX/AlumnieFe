// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import 'firebase/compat/firestore';;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHUS4xSBLwegSQBI4zOKxWRL-LQRA64Bo",
  authDomain: "alumniebe.firebaseapp.com",
  projectId: "alumniebe",
  storageBucket: "alumniebe.appspot.com",
  messagingSenderId: "523362050031",
  appId: "1:523362050031:web:54bc8c3728b4e734b4a01a",
  measurementId: "G-6L9B71FCXG"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const storage = getStorage(app)

export default app;