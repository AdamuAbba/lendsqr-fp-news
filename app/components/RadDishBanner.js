import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

const RadDishBanner = () => {
  return (
    <>
      <Image
        containerStyle={styles.bannerContainer}
        style={styles.bannerImage}
        source={require("./../assets/radDishLogo1.gif")}
      />
    </>
  );
};
const styles = StyleSheet.create({
  bannerImage: {
    height: "100%",
    width: "100%",
  },
  bannerContainer: {
    borderRadius: 30,
    elevation: 10,
  },
});
export default RadDishBanner;
