import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import RequestServiceScreen from "../screens/RequestService";
import RadDishLogo from "../components/RadDishLogo";
import CustomDrawerContent from "../shared/CustomDrawerContent";
import colors from "../configs/colors";
const Drawer = createDrawerNavigator();

const AppDrawerNav = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        drawerContentOptions={{
          activeBackgroundColor: colors.radOrange,
          activeTintColor: "#fff",
          inactiveTintColor: "#000",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: true,
            headerRight: () => <RadDishLogo />,
            drawerIcon: ({ color, size }) => (
              <Icon
                name="home-outline"
                type="material-community"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutUsScreen}
          options={{
            headerShown: true,
            headerRight: () => <RadDishLogo />,
            drawerIcon: ({ color, size }) => (
              <Icon
                name="information-outline"
                type="material-community"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Request"
          component={RequestServiceScreen}
          options={{
            headerShown: true,
            headerRight: () => <RadDishLogo />,
            drawerIcon: ({ color, size }) => (
              <Icon
                name="shopping-cart"
                type="font-awesome"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default AppDrawerNav;
