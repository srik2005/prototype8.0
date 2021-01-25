

import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyBErzTvwHtg34sdGODaFD_4ySPGDFOdvu8",
    authDomain: "studysure-a7f8a.firebaseapp.com",
    projectId: "studysure-a7f8a",
    storageBucket: "studysure-a7f8a.appspot.com",
    messagingSenderId: "673534947272",
    appId: "1:673534947272:web:e5ce064b0a2fcc6a965afd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  export default firebase.database();