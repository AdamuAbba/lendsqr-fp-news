import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserAuthStack from "./UserAuthStack";
import AppDrawerNav from "./AppDrawerNav";
import SummaryScreen from "../screens/SummaryScreen";
import AuthCheckScreen from "../screens/AuthCheckScreen";

const Stack = createStackNavigator();
const RootStackNav = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AuthCheckScreen"
            component={AuthCheckScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UserAuthStack"
            component={UserAuthStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AppDrawerNav"
            component={AppDrawerNav}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SummaryScreen"
            component={SummaryScreen}
            options={{ headerShown: true, title: "Confirm Order" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootStackNav;
