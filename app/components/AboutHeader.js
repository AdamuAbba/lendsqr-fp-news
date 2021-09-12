import React from "react";
import { View, Text, StyleSheet, StatusBar, Platform } from "react-native";
import colors from "../configs/colors";
import { Header } from "react-native-elements";
import { DrawerActions } from "react-navigation-drawer";
const AboutHeader = ({ navigation }) => {
  return (
    <Header
      leftComponent={{
        icon: "menu",
        color: "#fff",
        size: 30,
        onPress: () => {
          navigation.openDrawer();
        },
      }}
      barStyle="default"
      statusBarProps={{ backgroundColor: colors.radBlack }}
      containerStyle={styles.container}
      elevated={true}
      centerComponent={{
        text: "About",
        style: {
          color: "#fff",
          fontSize: 23,
          fontFamily: "AbrilFatface-Regular",
        },
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: colors.radBlack, height: 80 },
});

export default AboutHeader;
