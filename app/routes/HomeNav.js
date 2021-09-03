import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ContactUsScreen from "../screens/ContactUsScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../configs/colors";
import { Icon } from "react-native-elements";
import { HeaderTitle } from "@react-navigation/stack";
const Tab = createMaterialBottomTabNavigator();

const HomeNav = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        shifting={true}
        activeColor="#fff"
        inactiveColor="#000"
        barStyle={{ backgroundColor: "#fff" }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name == "Home") {
              iconName = focused ? "home" : "door-closed-lock";
            } else if (route.name == "contactUs") {
              iconName = focused ? "email-newsletter" : "email-lock";
            }
            return (
              <Icon
                name={iconName}
                color={color}
                size={24}
                type="material-community"
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home", tabBarColor: colors.radOrange }}
        />
        <Tab.Screen
          name="contactUs"
          component={ContactUsScreen}
          options={{ title: "contact us", tabBarColor: colors.radGreen }}
        />
      </Tab.Navigator>
    </>
  );
};

export default HomeNav;
