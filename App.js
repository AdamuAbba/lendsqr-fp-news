import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { LogBox } from "react-native";
import RootStackNav from "./app/routes/RootStackNav";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
//Redux store imports
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import AuthCheckScreen from "./app/screens/AuthCheckScreen";
//silent logBox error
import { Text } from "react-native";
LogBox.ignoreLogs(["Setting a timer for a long period of time"]);
import HomeNav from "./app/routes/HomeNav";
import ProfileImage from "./app/components/ProfileImage";

const App = () => {
  let [fontLoaded] = useFonts({
    "AbrilFatface-Regular": require("./app/assets/fonts/AbrilFatface-Regular.ttf"),
  });
  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <RootStackNav />
      </Provider>
    );
  }
};

export default App;
