import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCsyQY1rAapit_HPjBE5FmvdNjkxS3zex8",
    authDomain: "clone-785df.firebaseapp.com",
    projectId: "clone-785df",
    storageBucket: "clone-785df.appspot.com",
    messagingSenderId: "160405558559",
    appId: "1:160405558559:web:d2c76e3d0d36121d4c4c2a"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
