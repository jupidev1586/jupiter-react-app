import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Need to update below config
const config = {
    apiKey: "AIzaSyBzZ_jaj0rWSNsJbqyZGhHtGzEkg2jHvHc",
    authDomain: "react-livani.firebaseapp.com",
    databaseURL: "https://react-livani.firebaseio.com",
    projectId: "react-livani",
    storageBucket: "react-livani.appspot.com",
    messagingSenderId: "536895805045",
    appId: "1:536895805045:web:8625c61037881e8ba54a3c"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
const auth = firebase.auth();
export {
    auth,
    firebase
};