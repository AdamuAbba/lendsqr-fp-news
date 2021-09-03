import * as actionVariables from "./actionTypes";
import firebase from "../configs/firebase/fireBaseConfig";

const initialUserState = {
  email: null,
  uid: null,
};

let fireUserEmail;
let fireUserUid;

export const mainReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case actionVariables.CURRENTUSER:
      return { ...state, email: fireUserEmail, uid: fireUserUid };
    default:
      return state;
  }
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.email);
    fireUserEmail = user.email;
    fireUserUid = user.uid;
  } else {
    null;
  }
});
