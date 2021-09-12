import { createSlice } from "@reduxjs/toolkit";
import firebase from "../configs/firebase/fireBaseConfig";

const initialState = {
  email: null,
  uid: null,
};

let fireUserEmail;
let fireUserUid;

export const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    currentUserEmail: (state) => {
      state.email = fireUserEmail;
    },
    currentUserUid: (state) => {
      state.uid = fireUserUid;
    },
  },
});

// Action creators are generated for each case reducer function
export const { currentUserEmail, currentUserUid } = userSlice.actions;

export default userSlice.reducer;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.email);
    fireUserEmail = user.email;
    fireUserUid = user.uid;
  } else {
    null;
  }
});
