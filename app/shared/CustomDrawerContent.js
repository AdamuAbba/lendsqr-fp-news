import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import firebase from "../configs/firebase/fireBaseConfig";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import colors from "../configs/colors";
import AwesomeAlert from "react-native-awesome-alerts";
import CustomAvatarComp from "../components/CustomAvatarComp";
import { globalStyles } from "../configs/GlobalStyle";

const { width, height } = Dimensions.get("window");

const CustomDrawerContent = ({ ...props }) => {
  const [visible, setVisible] = useState(false);
  const logoutPressHandler = () => {
    setVisible(true);
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
          <AwesomeAlert
            show={visible}
            showProgress={false}
            Animated
            title="Signing out ?"
            titleStyle={{
              ...globalStyles.buttonTitle,
              color: colors.radBlack,
            }}
            message="are you sure you want to sign out?"
            messageStyle={styles.alertText}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showCancelButton
            onConfirmPressed={() => logOut()}
            showConfirmButton
            cancelButtonColor={colors.radWhite}
            confirmButtonColor={colors.radOrange}
            cancelText="Cancel"
            cancelButtonTextStyle={{
              ...globalStyles.buttonTitle,
              fontSize: 14,
              color: "#4287f5",
            }}
            cancelButtonStyle={{
              ...globalStyles.button,
              width: 100,
              borderRadius: 12,
            }}
            confirmText="Yes"
            confirmButtonTextStyle={{
              ...globalStyles.buttonTitle,
              fontSize: 14,
            }}
            confirmButtonStyle={{
              ...globalStyles.button,
              width: 100,
              borderRadius: 12,
            }}
            contentContainerStyle={styles.alertBox}
            useNativeDriver={true}
            onCancelPressed={() => {
              setVisible(false);
            }}
          />

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
  alertText: { fontFamily: "AbrilFatface-Regular", color: colors.radBlack },
  alertBox: {
    width: width / 1.5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});
export default CustomDrawerContent;
