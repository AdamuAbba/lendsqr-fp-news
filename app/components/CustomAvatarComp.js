import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Alert,
} from "react-native";
import { Divider } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { currentUserEmail, currentUserUid } from "../store/userSlice";
import { Icon, Avatar, Accessory } from "react-native-elements";

import colors from "../configs/colors";
const CustomAvatarComp = ({ navigation }) => {
  useEffect(() => {
    dispatchHandler();
    return () => {
      null;
    };
  }, []);

  const { email, uid } = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  const dispatchHandler = () => {
    dispatch(currentUserEmail());
    dispatch(currentUserUid());
  };

  const closeAppDrawer = () => {
    navigation.closeDrawer();
  };

  return (
    <View style={{ flex: 1, marginLeft: 4, justifyContent: "space-evenly" }}>
      <Icon
        name="cancel"
        type="material"
        size={20}
        color={colors.radRed}
        containerStyle={styles.closeDrawer}
        onPress={() => closeAppDrawer()}
      />
      <Avatar
        size="large"
        avatarStyle={{ borderRadius: 20 }}
        source={{
          uri: "https://cdn.dribbble.com/users/3844750/screenshots/10729124/media/2523facfa3e436b8331c316dcc4998f2.jpg?compress=1&resize=800x600",
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Icon
          name="email"
          type="material"
          color="#fff"
          size={17}
          containerStyle={{ marginRight: 5 }}
        />
        <Text style={styles.emailText}>{email}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Icon
          name="verified"
          type="material"
          color={colors.radGreen}
          size={17}
          containerStyle={{ marginRight: 5 }}
        />
        <Text style={styles.emailText}>{uid}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
    marginBottom: "30%",
  },
  emailText: {
    color: "#fff",
    fontFamily: "AbrilFatface-Regular",
  },
  avatarAccessory: {
    height: 20,
    width: 20,
    borderRadius: 25,
    elevation: 9,
  },
  closeDrawer: {
    alignSelf: "flex-start",
  },
});

export default CustomAvatarComp;
