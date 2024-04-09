import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBDK2sdlXQw4OhCO9hRC9RGjHPanQVl_f0",
    authDomain: "kaobro-shopping.firebaseapp.com",
    projectId: "kaobro-shopping",
    storageBucket: "kaobro-shopping.appspot.com",
    messagingSenderId: "542236626761",
    appId: "1:542236626761:web:bd9474b9c576892d465498",
    measurementId: "G-WFJBXWQZ69"
  };

firebase.initializeApp(firebaseConfig);


export default firebase;