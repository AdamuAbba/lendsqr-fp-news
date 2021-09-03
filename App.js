import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { LogBox } from "react-native";
import RootStackNav from "./app/routes/RootStackNav";
import firebase from "./app/configs/firebase/fireBaseConfig";
//Redux store imports
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import AuthCheckScreen from "./app/screens/AuthCheckScreen";
//silent logBox error
LogBox.ignoreLogs(["Setting a timer for a long period of time"]);
import HomeNav from "./app/routes/HomeNav";
import ProfileImage from "./app/components/ProfileImage";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <RootStackNav />
      </Provider>
    </>
  );
};

export default App;
