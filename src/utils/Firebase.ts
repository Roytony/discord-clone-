import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBNMkwLFDb3wzcfm146wQ1sJE9vLOuqtfA',

  authDomain: 'discord-clone-7cecd.firebaseapp.com',

  projectId: 'discord-clone-7cecd',

  storageBucket: 'discord-clone-7cecd.appspot.com',

  messagingSenderId: '295544715085',

  appId: '1:295544715085:web:2abb1791fd50cf5a412904',
}

// Initialize Firebase

if (!getApps.length) {
  initializeApp(firebaseConfig)
} else {
  getApp()
}

export const auth = getAuth()
export const db = getFirestore()
export const provider = new GoogleAuthProvider()
