import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

//cvrrchatrooms, first //chatrooms used because of oauth in this app problem using that just for chatapp-mern1 oauth usecase
var firebaseConfig = {
  apiKey: "AIzaSyDY5h5C9Qad_J_NHNdYnIyMA5CxRGu8fUs",
  authDomain: "chatrooms-2dbf2.firebaseapp.com",
  databaseURL: "https://chatrooms-2dbf2.firebaseio.com",
  projectId: "chatrooms-2dbf2",
  storageBucket: "chatrooms-2dbf2.appspot.com",
  messagingSenderId: "777546442092",
  appId: "1:777546442092:web:faa93647906cd8ff1bbf49",
  measurementId: "G-7MG7CJ0F12",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default firebase;
