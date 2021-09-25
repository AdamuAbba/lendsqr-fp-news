import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RadDishLogo from "../components/RadDishLogo";
import colors from "../configs/colors";
import { globalStyles } from "../configs/GlobalStyle";

const Stack = createStackNavigator();

const UserAuthStack = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: colors.radBlack },
          headerTitleStyle: { ...globalStyles.routeHeaderStyles },
        }}
      >
        <Stack.Screen
          name="WELCOME"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="REGISTER"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LOGIN"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};

export default UserAuthStack;
