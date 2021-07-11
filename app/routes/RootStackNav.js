import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserAuthStack from "./UserAuthStack";
import AppDrawerNav from "./AppDrawerNav";

const Stack = createStackNavigator();
const RootStackNav = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootStackNav;
