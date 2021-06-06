// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAWVPkSN6z3UA3FJURUPfQWkfXkcSFPGQ0",
  authDomain: "chat-app-6e25d.firebaseapp.com",
  projectId: "chat-app-6e25d",
  storageBucket: "chat-app-6e25d.appspot.com",
  messagingSenderId: "553167708605",
  appId: "1:553167708605:web:5805321866e108772af2d4",
  measurementId: "G-NT8FP9Y6VD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provide = new firebase.auth.GoogleAuthProvider();

export { auth, provide };
export default db;
