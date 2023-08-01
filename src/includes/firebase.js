import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA6S9UFraEC_dwaxNapp6HmnkHiGNhSwTA',
  authDomain: 'cloe-mart.firebaseapp.com',
  databaseURL: 'https://cloe-mart-default-rtdb.firebaseio.com',
  projectId: 'cloe-mart',
  storageBucket: 'cloe-mart.appspot.com',
  // messagingSenderId: '973478766327',
  appId: '1:973478766327:web:2a20f7b333b071eb6f95f2',
  measurementId: 'G-4S2GF8G7HQ'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users')

export { auth, db, usersCollection }

//--------------- Import the functions you need from the SDKs you need ---------------
// import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
//--------------- TODO: Add SDKs for Firebase products that you want to use ---------------
// --------------- https://firebase.google.com/docs/web/setup#available-libraries ---------------

// --------------- Your web app's Firebase configuration ---------------
//--------------- For Firebase JS SDK v7.20.0 and later, measurementId is optional ---------------
// const firebaseConfig = {
//   apiKey: 'AIzaSyA6S9UFraEC_dwaxNapp6HmnkHiGNhSwTA',
//   authDomain: 'cloe-mart.firebaseapp.com',
//   databaseURL: 'https://cloe-mart-default-rtdb.firebaseio.com',
//   projectId: 'cloe-mart',
//   storageBucket: 'cloe-mart.appspot.com',
//   messagingSenderId: '973478766327',
//   appId: '1:973478766327:web:2a20f7b333b071eb6f95f2',
//   measurementId: 'G-4S2GF8G7HQ'
// }

//--------------- Initialize Firebase ---------------
// const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
