import firebase from "firebase/app"
import "firebase/auth"
import "firebase/storage"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyCcWWHGnTqJBxzvAnFar1ErNyq6zlGgeAM",
    authDomain: "greenedis.firebaseapp.com",
    projectId: "greenedis",
    storageBucket: "greenedis.appspot.com",
    messagingSenderId: "931547277694",
    appId: "1:931547277694:web:58e73d4d17d41a2ff0ab2f",
    measurementId: "G-8TCBNPLY73"
  };

  const app = firebase.initializeApp(firebaseConfig)
  export const bucket = app.storage().ref()
  export const auth = app.auth()
  export const store = app.firestore()
  export default app
