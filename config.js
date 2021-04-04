import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyA1YoRKwr4y4yYj1szt0V3PeAEZew1Y4xw",
  authDomain: "wily-app-4cf20.firebaseapp.com",
  projectId: "wily-app-4cf20",
  storageBucket: "wily-app-4cf20.appspot.com",
  messagingSenderId: "265096111881",
  appId: "1:265096111881:web:bf31b7a3133a3b563ed5d8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
