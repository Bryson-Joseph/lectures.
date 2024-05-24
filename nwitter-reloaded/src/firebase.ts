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
