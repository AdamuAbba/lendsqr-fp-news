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
        initialRouteName="HomeNav"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        drawerContentOptions={{
          activeBackgroundColor: colors.radOrange,
          activeTintColor: "#fff",
          inactiveTintColor: "#000",
        }}
      >
        <Drawer.Screen
          name="HomeNav"
          component={HomeNav}
          options={{
            title: "Home",
            headerShown: true,
            headerRight: () => <UserAvatar />,
            headerStyle: { height: "14%" },
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
