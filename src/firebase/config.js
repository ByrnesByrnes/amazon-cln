import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyB1bMax59X_ecI9Qjxub4lKAuw_XLq-KqE",
  authDomain: "amzn-cln-ed1f8.firebaseapp.com",
  projectId: "amzn-cln-ed1f8",
  storageBucket: "amzn-cln-ed1f8.appspot.com",
  messagingSenderId: "1074674710028",
  appId: "1:1074674710028:web:aea352ccee639637866029"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export { db, auth }