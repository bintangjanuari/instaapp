import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDwMZTDRpfFYoYDeSmPRdE4z9P8UUoQp6o",
  authDomain: "insta-app-b641c.firebaseapp.com",
  projectId: "insta-app-b641c",
  storageBucket: "insta-app-b641c.appspot.com",
  messagingSenderId: "654244735983",
  appId: "1:654244735983:web:f809e535d47e64fe9da41a",
  measurementId: "G-26KZMW42NC"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
