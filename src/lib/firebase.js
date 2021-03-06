import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBc_RqnLfMtlv5zWr8QKEYr9KwwB8Iv_vQ",
  authDomain: "new-project-310316.firebaseapp.com",
  projectId: "new-project-310316",
  storageBucket: "new-project-310316.appspot.com",
  messagingSenderId: "132011574998",
  appId: "1:132011574998:web:ee1c8c98ff978cf655eb77",
  measurementId: "G-8BPDR0Z926",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
