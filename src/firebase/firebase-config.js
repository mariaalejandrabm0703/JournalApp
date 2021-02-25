import firebase from 'firebase/app'; 
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyC2g2i4E5dE52jVQqH9G65AuKEJyGIw85E",
    authDomain: "journalapp-9c518.firebaseapp.com",
    databaseURL: "https://journalapp-9c518-default-rtdb.firebaseio.com",
    projectId: "journalapp-9c518",
    storageBucket: "journalapp-9c518.appspot.com",
    messagingSenderId: "1024210156963",
    appId: "1:1024210156963:web:e94ac1ef3d8a275adaae16",
    measurementId: "G-N8RZ9SN5WD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //base de datos
  const db = firebase.firestore();
  // conectarse a la manera de la autenticacion de Google
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }