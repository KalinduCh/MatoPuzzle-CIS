import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqD-ezi3N45iIG1Tjb33tlfOM-mJzv2C4",
  authDomain: "matopuzzle.firebaseapp.com",
  projectId: "matopuzzle",
  storageBucket: "matopuzzle.appspot.com",
  messagingSenderId: "710851604382",
  appId: "1:710851604382:web:0f83ec9df5f4dc2f87f08f",
  measurementId: "G-KXHLNS5D1N"
};

// Initialize Firebase app
const app = firebase.initializeApp(firebaseConfig);

// Export Firebase services
export const auth = app.auth();
export const firestore = app.firestore();

// Export the Firebase app itself
export default app;
