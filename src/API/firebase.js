import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.AIzaSyCt_OjTCnKYUWK3jPzgerUXEx9ZgW8B6sQ,
  authDomain: process.env.react-file-manager-c55fb.firebaseapp.com,
  projectId: process.env.react-file-manager-c55fb,
  storageBucket: process.env.react-file-manager-c55fb.appspot.com,
  messagingSenderId: process.env.842331486811,
  appId: process.env.1:842331486811:web:8b3fff7615f274da1f9d7e,
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection("users"),
  docs: firestore.collection("docs"),
  files: firestore.collection("files"),
  date: firebase.firestore.FieldValue.serverTimestamp(),
};

export const storage = firebase.storage();

export const auth = firebase.auth();
