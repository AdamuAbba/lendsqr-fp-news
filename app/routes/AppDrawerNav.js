import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import RequestServiceScreen from "../screens/RequestService";
import SignOut from "../components/SignOut";
import RadDishLogo from "../components/RadDishLogo";
const Drawer = createDrawerNavigator();
const AppDrawerNav = () => {
  return (
    <>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: true, headerRight: () => <SignOut /> }}
        />
        <Drawer.Screen
          name="About"
          component={AboutUsScreen}
          options={{ headerShown: true, headerRight: () => <RadDishLogo /> }}
        />
        <Drawer.Screen
          name="Request"
          component={RequestServiceScreen}
          options={{ headerShown: true, headerRight: () => <RadDishLogo /> }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default AppDrawerNav;
