// import { createStore } from "redux";
// import { mainReducer } from "./reducer";

// export const store = createStore(mainReducer);

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    userState: userReducer,
  },
});
