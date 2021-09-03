import firebase from "../firebase/fireBaseConfig";
export const authCheck = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user.email);
    } else {
      null;
    }
  });
};
