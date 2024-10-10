import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyA_VuOYRSnHi6r5UDv50l4qu6q2wMK7ZE0',
  authDomain: 'nwitter-reloaded-fe241.firebaseapp.com',
  projectId: 'nwitter-reloaded-fe241',
  storageBucket: 'nwitter-reloaded-fe241.appspot.com',
  messagingSenderId: '627979898787',
  appId: '1:627979898787:web:68b58e7adb2fd1612c9416',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const storage = getStorage(app)

export const db = getFirestore(app)

// firebase.js
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'YOUR_API_KEY',
//   authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
//   projectId: 'YOUR_PROJECT_ID',
//   storageBucket: 'YOUR_PROJECT_ID.appspot.com',
//   messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
//   appId: 'YOUR_APP_ID',
// };

// // Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
