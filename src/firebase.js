import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBIbzjVy8mvNBondLmeDpkwnYiNoAYWyQc",
    authDomain: "clone-55e91.firebaseapp.com",
    projectId: "clone-55e91",
    storageBucket: "clone-55e91.appspot.com",
    messagingSenderId: "746359535966",
    appId: "1:746359535966:web:55a69dcb0dfa5211b537cf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;