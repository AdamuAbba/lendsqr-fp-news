// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import {
  addDoc,
  collection,
  doc,
  Firestore,
  getFirestore,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyChkZ_uGd8QQ-nfkG0o8JY5IqbiIU31x4c',
  authDomain: 'rad-dish-536a8.firebaseapp.com',
  projectId: 'rad-dish-536a8',
  storageBucket: 'rad-dish-536a8.appspot.com',
  messagingSenderId: '486899785331',
  appId: '1:486899785331:web:8a5672a8c922ce8d069406',
  measurementId: 'G-9ZQ4DTJ2MR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);
const auth = getAuth(app);
const uid = auth.currentUser?.uid;
const usersColRef = collection(db, 'users');
const userDocRef = doc(db, 'users', `${uid}`);
export { auth, usersColRef, userDocRef, db };
