import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import AboutUsScreen from "../screens/AboutUsScreen";
import RequestServiceScreen from "../screens/RequestService";
import CustomDrawerContent from "../shared/CustomDrawerContent";
import colors from "../configs/colors";
import UserAvatar from "../components/UserAvatar";
import HomeNav from "./HomeNav";
import { View } from "react-native";
import { View as MotiView } from "moti";
const Drawer = createDrawerNavigator();

const AppDrawerNav = () => {
  return (
    <>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          width: "70%",
        }}
        screenOptions={{
          headerStyle: {
            backgroundColor: "#1f1f1f",
            height: "13%",
          },

          headerTitleStyle: { fontFamily: "AbrilFatface-Regular" },
          headerTintColor: "#fff",
        }}
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        initialRouteName="HomeNav"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        drawerContentOptions={{
          activeBackgroundColor: colors.radWhite,
          labelStyle: {
            fontFamily: "AbrilFatface-Regular",
            fontSize: 15,
          },
          activeTintColor: colors.radOrange,
          inactiveTintColor: colors.radWhite,
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
              <Icon name="home" type="material" size={size} color={color} />
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
                name="storefront"
                type="material"
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
