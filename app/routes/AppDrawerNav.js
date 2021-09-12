import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import RequestServiceScreen from "../screens/RequestService";
import CustomDrawerContent from "../shared/CustomDrawerContent";
import colors from "../configs/colors";
import UserAvatar from "../components/UserAvatar";
import HomeNav from "./HomeNav";
const Drawer = createDrawerNavigator();

const AppDrawerNav = () => {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#1f1f1f",
          },
          headerTitleStyle: { fontFamily: "AbrilFatface-Regular" },
          headerTintColor: "#fff",
        }}
        initialRouteName="HomeNav"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        drawerContentOptions={{
          activeBackgroundColor: colors.radOrange,
          labelStyle: {
            fontFamily: "AbrilFatface-Regular",
            fontSize: 19,
          },
          activeTintColor: "#fff",
          inactiveTintColor: colors.radOrange,
        }}
      >
        <Drawer.Screen
          name="HomeNav"
          component={HomeNav}
          options={{
            title: "Home",
            headerShown: true,
            headerRight: () => <UserAvatar />,
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
            headerShown: false,
            headerRight: () => <UserAvatar />,
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
            headerRight: () => <UserAvatar />,
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
