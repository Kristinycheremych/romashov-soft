import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyA0kl28R0-fmUU5jAgY9PU3fa2iVKEIx3E",
  authDomain: "romashov-soft-e3708.firebaseapp.com",
  databaseURL: "https://romashov-soft-e3708-default-rtdb.firebaseio.com",
  projectId: "romashov-soft-e3708",
  storageBucket: "romashov-soft-e3708.appspot.com",
  messagingSenderId: "401907821768",
  appId: "1:401907821768:web:158be266ee45125a3209fd"
  
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();

