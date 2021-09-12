import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Alert,
} from "react-native";
import { Icon, Divider } from "react-native-elements";
import firebase from "../configs/firebase/fireBaseConfig";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import colors from "../configs/colors";
import { DrawerActions } from "@react-navigation/native";
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
        <CustomAvatarComp navigation={props.navigation} />
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View style={{ flex: 1 }}>
            <Divider width={2} color={colors.radOrange} />
            <DrawerItemList {...props} />
          </View>
          <View>
            <Divider width={2} color={colors.radOrange} />
            <DrawerItem
              icon={() => (
                <Icon
                  name="exit-to-app"
                  type="material"
                  size={25}
                  color={colors.radRed}
                />
              )}
              label="sign out"
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
    justifyContent: "flex-start",
    paddingTop: 0,
    backgroundColor: "#1f1f1f",
  },
});
export default CustomDrawerContent;
