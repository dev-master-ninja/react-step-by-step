import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyC9E1XX5eVcN6j8avMgXcGPaTZRODXpKjs",
  authDomain: "frontend-project-3401b.firebaseapp.com",
  projectId: "frontend-project-3401b",
  storageBucket: "frontend-project-3401b.appspot.com",
  messagingSenderId: "385311062675",
  appId: "1:385311062675:web:0fd3e702d7e85c018f6b66"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getFirestore(app)


export { app, database }