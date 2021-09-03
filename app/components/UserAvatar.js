import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Icon } from "react-native-elements/dist/avatar/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { currentUser } from "../store/actions";

const UserAvatar = () => {
  useEffect(() => {
    dispatchHandler();
    return () => {};
  }, []);

  const currentUserEmail = useSelector((state) => state.email);
  const dispatch = useDispatch();

  const dispatchHandler = () => {
    dispatch(currentUser());
  };

  return (
    <View style={styles.container}>
      <Avatar rounded source={require("../assets/dummyuser.jpg")} />
      <Text style={styles.textView}>{currentUserEmail}</Text>
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
  },
});
export default UserAvatar;
