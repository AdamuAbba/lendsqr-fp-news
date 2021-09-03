import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const DataLoading = () => {
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
export default DataLoading;
