import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-y5u2kxTJ1wkudNB33Ph4ppxjHUjCBHc",
  authDomain: "rad-dish.firebaseapp.com",
  projectId: "rad-dish",
  storageBucket: "rad-dish.appspot.com",
  messagingSenderId: "788629927898",
  appId: "1:788629927898:web:f95154e77db0b1c618f2e3",
  measurementId: "G-6JT5GV2Q17",
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
