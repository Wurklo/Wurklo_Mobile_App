// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBTHXsw4xDmX6pjP_GzjfcMHOaZbzOK7KY",
  authDomain: "wurklo-mobile-app.firebaseapp.com",
  projectId: "wurklo-mobile-app",
  storageBucket: "wurklo-mobile-app.appspot.com",
  messagingSenderId: "253776669815",
  appId: "1:253776669815:web:d545b85403a3b5b1272a72"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};