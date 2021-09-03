import React from "react";
import { View, Text, ImageBackground, StyleSheet, Button } from "react-native";
import FormModal from "./FormModal";
const image = require("./../assets/ofadaSauce.jpg");
function Banner({
  firstCaption,
  description,
  buttonTitle,
  onPressTrigger,
  bannerImage,
}) {
  return (
    <ImageBackground style={styles.image} source={bannerImage}>
      {/* <View style={styles.overlay}></View> */}

      <Text style={styles.bannerTitle}>{firstCaption}</Text>
      <Text style={styles.bannerDescription}>{description}</Text>
      <FormModal />
    </ImageBackground>
  );
}

export default Banner;

const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    marginTop: 10,
    opacity: 0.8,
  },
  bannerTitle: {
    color: "#000",
    fontSize: 40,
    fontWeight: "bold",
  },
  bannerDescription: {
    color: "#000",
    fontSize: 30,
    fontStyle: "italic",
  },
});
