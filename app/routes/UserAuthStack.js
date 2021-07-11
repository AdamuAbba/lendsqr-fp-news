import React from "react";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RadDishLogo from "../components/RadDishLogo";
const Stack = createStackNavigator();
const UserAuthStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="WELCOME"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="REGISTER"
          component={RegisterScreen}
          options={{
            headerRight: () => <RadDishLogo />,
          }}
        />
        <Stack.Screen
          name="LOGIN"
          component={LoginScreen}
          options={{
            headerRight: () => <RadDishLogo />,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default UserAuthStack;
