import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import firebase from "../configs/firebase/fireBaseConfig";
const AuthCheckScreen = ({ navigation }) => {
  useEffect(() => {
    authPageSelect();
    return () => {
      null;
    };
  }, []);
  const authPageSelect = () => {
    firebase.auth().onAuthStateChanged((user) => {
      navigation.navigate(user ? "AppDrawerNav" : "UserAuthStack");
    });
  };
  return (
    <>
      <View style={styles.container}>
        <LottieView
          style={styles.lottieStyle}
          source={require("../assets/loadingFood.json")}
          autoPlay
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
  lottieStyle: {
    height: "50%",
    width: "50%",
    alignSelf: "center",
  },
});
export default AuthCheckScreen;
