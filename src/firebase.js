import firebase from 'firebase/app'

import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDrd5IL4rE8fHu2HIl4WpEEIGJ5cIuulgw",
    authDomain: "my-tube-clone.firebaseapp.com",
    projectId: "my-tube-clone",
    storageBucket: "my-tube-clone.appspot.com",
    messagingSenderId: "468197383646",
    appId: "1:468197383646:web:754641303dfe487359514f"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()