import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyB8g-b4tS6Kkuysw5tcg98OB0Z0XNhA85I",
    authDomain: "invitation-1379b.firebaseapp.com",
    databaseURL: "https://invitation-1379b.firebaseio.com",
    projectId: "invitation-1379b",
    storageBucket: "invitation-1379b.appspot.com",
    messagingSenderId: "638185580870",
    appId: "1:638185580870:web:fd84d59dd381c2987d5d47",
    measurementId: "G-KDJSXRYD31"
}
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const recordRef = databaseRef.child("record");