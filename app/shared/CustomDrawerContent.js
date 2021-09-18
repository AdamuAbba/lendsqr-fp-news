import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Icon } from "react-native-elements";
import firebase from "../configs/firebase/fireBaseConfig";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import colors from "../configs/colors";

import CustomAvatarComp from "../components/CustomAvatarComp";

const CustomDrawerContent = ({ ...props }) => {
  const logoutPressHandler = () => {
    Alert.alert("Sign Out ?", "Are you sure you want to sign out ?", [
      { text: "yes", onPress: () => logOut() },
      { text: "no", style: "cancel" },
    ]);
  };
  const logOut = async () => {
    try {
      await firebase
        .auth()
        .signOut()
        .then(() => {
          props.navigation.navigate("UserAuthStack", { screen: "WELCOME" });
        });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContainer}
      >
        {/* avatar component */}
        <View style={{ flex: 1, paddingTop: 30 }}>
          <CustomAvatarComp navigation={props.navigation} />
        </View>

        {/* drawer Items */}
        <View style={{ flex: 3, justifyContent: "space-between" }}>
          <View>
            <DrawerItemList {...props} />
          </View>
          <View>
            <DrawerItem
              icon={() => (
                <Icon
                  name="logout"
                  type="material"
                  size={23}
                  color={colors.radWhite}
                />
              )}
              label="Sign out"
              labelStyle={{ fontFamily: "AbrilFatface-Regular" }}
              inactiveTintColor="#fff"
              onPress={() => logoutPressHandler()}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "#1f1f1f",
  },
});
export default CustomDrawerContent;
