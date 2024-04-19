import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCqD-ezi3N45iIG1Tjb33tlfOM-mJzv2C4",
    authDomain: "matopuzzle.firebaseapp.com",
    projectId: "matopuzzle",
    storageBucket: "matopuzzle.appspot.com",
    messagingSenderId: "710851604382",
    appId: "1:710851604382:web:0f83ec9df5f4dc2f87f08f",
    measurementId: "G-KXHLNS5D1N"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
