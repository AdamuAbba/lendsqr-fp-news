import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Alert,
} from "react-native";
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
    <View style={styles.avatarView}>
      <Icon
        name="cancel"
        type="material"
        size={30}
        color={colors.radRed}
        containerStyle={styles.closeDrawer}
        onPress={() => closeAppDrawer()}
      />

      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, marginLeft: 4 }}>
          <Avatar
            size="large"
            rounded
            source={{
              uri: "https://cdn.dribbble.com/users/3844750/screenshots/10729124/media/2523facfa3e436b8331c316dcc4998f2.jpg?compress=1&resize=800x600",
            }}
          >
            <Avatar.Accessory
              size={20}
              icon={<Icon name="edit" type="material" size={20} />}
              style={styles.avatarAccessory}
            />
          </Avatar>
        </View>
        <View style={{ justifyContent: "flex-end", flex: 2.5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5,
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
              marginLeft: 5,
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
    alignSelf: "flex-end",
    marginRight: 10,
  },
});

export default CustomAvatarComp;
