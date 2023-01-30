// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjXHmRGFO-M6T-5LoDfnW3t5H6HSindoc",
    authDomain: "netflex-clone-app.firebaseapp.com",
    projectId: "netflex-clone-app",
    storageBucket: "netflex-clone-app.appspot.com",
    messagingSenderId: "805324374602",
    appId: "1:805324374602:web:9807a4086dbcd2f2f41cb3"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }