import * as firebase from "firebase/app";
import "firebase/database";
import 'firebase/auth';

 var firebaseConfig = {
  apiKey: "AIzaSyCyk0b3i8Tsn9D0oUxXQ-AyhPptEc4O-08",
  authDomain: "maxo-14a51.firebaseapp.com",
  databaseURL: "https://maxo-14a51.firebaseio.com",
  projectId: "maxo-14a51",
  storageBucket: "maxo-14a51.appspot.com",
  messagingSenderId: "1021268024023",
  appId: "1:1021268024023:web:80bf5cd7e70dacdcbe2e92"
};

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseDb = firebaseApp.database()
let firebaseAuth = firebaseApp.auth()
export { firebaseDb, firebaseAuth}