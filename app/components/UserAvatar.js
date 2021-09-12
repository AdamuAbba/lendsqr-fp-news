import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Icon } from "react-native-elements/dist/avatar/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { currentUserEmail } from "../store/userSlice";

const UserAvatar = () => {
  useEffect(() => {
    dispatchHandler();
    return () => {};
  }, []);

  const { email } = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const image =
    "https://cdn.dribbble.com/users/3844750/screenshots/10729124/media/2523facfa3e436b8331c316dcc4998f2.jpg?compress=1&resize=800x600";
  const dispatchHandler = () => {
    dispatch(currentUserEmail());
  };

  return (
    <View style={styles.container}>
      <Avatar rounded source={{ uri: image }} />
      <Text style={styles.textView}>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  textView: {
    fontSize: 12,
    color: "#fff",
  },
});
export default UserAvatar;
