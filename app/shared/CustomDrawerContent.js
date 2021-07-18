import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Alert,
} from "react-native";
import { Icon, Divider, Avatar, Accessory } from "react-native-elements";
import firebase from "../configs/firebase/fireBaseConfig";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import colors from "../configs/colors";
import { DrawerActions } from "@react-navigation/native";

const CustomDrawerContent = ({ ...props }) => {
  useEffect(() => {
    userLogCheck();
  });

  const [signedInUser, setSignedInUser] = useState("");
  const closeAppDrawer = () => {
    props.navigation.dispatch(DrawerActions.closeDrawer());
  };

  const logoutPressHandler = () => {
    props.navigation.dispatch(DrawerActions.closeDrawer());
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

  function userLogCheck() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setSignedInUser(user);
      } else {
        null;
      }
    });
  }

  return (
    <>
      <DrawerContentScrollView
        contentContainerStyle={styles.drawerContainer}
        {...props}
      >
        <View style={styles.avatarView}>
          <Icon
            name="close-box-multiple-outline"
            type="material-community"
            size={30}
            color={colors.radRed}
            containerStyle={styles.closeDrawer}
            onPress={() => closeAppDrawer()}
          />
          <Avatar
            containerStyle={{
              borderWidth: 2,
              borderColor: colors.radOrange,
              elevation: 9,
            }}
            size="xlarge"
            rounded
            source={{
              uri: "https://cdn.dribbble.com/users/2419380/screenshots/6910552/baesisymotion_1080x1080_04.gif",
            }}
          >
            <Avatar.Accessory
              size={50}
              icon={<Icon name="edit" type="material" size={50} />}
              style={styles.avatarAccessory}
            />
          </Avatar>
          {signedInUser ? <Text>{signedInUser.email}</Text> : null}
        </View>
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
              onPress={() => logoutPressHandler()}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  avatarView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
  },
  drawerContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 0,
  },
  avatarAccessory: {
    height: 50,
    width: 50,
    borderRadius: 25,
    elevation: 9,
  },
  closeDrawer: {
    alignSelf: "flex-end",
    marginRight: 10,
  },
});
export default CustomDrawerContent;
