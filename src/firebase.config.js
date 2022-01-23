import firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDZ1hq6ZfR5BXMzOmcm9H3MfIFo4f8NkuI",
    authDomain: "photo-gallery-unnamed.firebaseapp.com",
    projectId: "photo-gallery-unnamed",
    storageBucket: "photo-gallery-unnamed.appspot.com",
    messagingSenderId: "11254561398",
    appId: "1:11254561398:web:69cf1e09878e54352ebd57"
}

const app = firebase.initializeApp(firebaseConfig)

const appStorage = app.storage()
const appFirestore = app.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {
    appStorage,
    appFirestore,
    timestamp
}