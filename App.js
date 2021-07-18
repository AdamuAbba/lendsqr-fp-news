import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import HomeScreen from "./app/screens/HomeScreen";
import AboutUsScreen from "./app/screens/AboutUsScreen";
import ContactUsScreen from "./app/screens/ContactUsScreen";
import Form from "./app/components/Form";
import DropDown from "./app/components/DropDown";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import RequestServiceScreen from "./app/screens/RequestService";
import RegisterScreen from "./app/screens/RegisterScreen";
import LoginScreen from "./app/screens/LoginScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import UserAuthStack from "./app/routes/UserAuthStack";
import AppDrawerNav from "./app/routes/AppDrawerNav";
import RootStackNav from "./app/routes/RootStackNav";

const App = () => {
  return (
    <>
      <RootStackNav />
    </>
  );
};

// const StackNavigator = createStackNavigator({
//   WELCOME: WelcomeScreen,
//   REGISTER: RegisterScreen,
//   LOGIN: LoginScreen,
// });

// const App = createAppContainer(StackNavigator);
export default App;
