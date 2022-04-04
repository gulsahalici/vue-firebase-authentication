import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
}

const firebaseApp = firebase.initializeApp(config)

export const createUser = user => {
    
  return firebaseApp.auth().createUserWithEmailAndPassword(user.email, user.password)

}

export const loginUser = user => {
 
    return firebaseApp.auth().signInWithEmailAndPassword(user.email, user.password)

}

export const logoutUser = () => {
    return firebase.auth().signOut()
}



