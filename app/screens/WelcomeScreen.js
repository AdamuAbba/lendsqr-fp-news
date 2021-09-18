import React, { useEffect } from "react";
import { Text, Button, Chip } from "react-native-elements";
import { View, ImageBackground, StyleSheet } from "react-native";
import { View as MotiView, Text as MotiText } from "moti";
import { StatusBar } from "expo-status-bar";
import { globalStyles } from "../configs/GlobalStyle";
import firebase from "../configs/firebase/fireBaseConfig";
import colors from "../configs/colors";
import LottieView from "lottie-react-native";
const image =
  "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    return () => {
      null;
    };
  });

  return (
    <>
      <MotiView
        from={{ rotateY: "90deg", opacity: 0 }}
        transition={{ type: "spring", duration: 1000 }}
        animate={{ rotateY: "0deg", opacity: 1 }}
        style={styles.container}
      >
        <View style={styles.firstView}>
          <MotiView
            transition={{ type: "spring", duration: 500 }}
            from={{ translateX: -100, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            style={{ flexDirection: "row" }}
          >
            <Text style={[styles.welcomeTitle]}>Food </Text>
            <Text style={{ ...styles.welcomeTitle, color: colors.radGreen }}>
              &{" "}
            </Text>
            <Text style={[styles.welcomeTitle]}>More...</Text>
          </MotiView>

          <MotiView
            style={{ flexDirection: "row" }}
            transition={{ type: "spring", duration: 500, delay: 500 }}
            from={{ translateX: -100, opacity: 0 }}
            animate={{ translateX: 20, opacity: 1 }}
            style={{ flexDirection: "row" }}
          >
            <Text style={styles.greeting}>Welc</Text>

            <MotiView
              from={{ translateY: -100, opacity: 0 }}
              animate={{ translateY: 14, opacity: 1 }}
              transition={{ type: "spring", duration: 1000, delay: 3000 }}
            >
              <LottieView
                style={{ height: 35, alignSelf: "center" }}
                source={require("../assets/images/finalBoilingPot.json")}
                autoPlay
              />
            </MotiView>
            <Text style={styles.greeting}>me</Text>
          </MotiView>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <MotiView
            from={{ translateY: -100, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1000, delay: 1000 }}
          >
            <LottieView
              style={styles.lottieStyle}
              source={require("../assets/images/aGirlHasNoface.json")}
              autoPlay
            />
          </MotiView>
          <View style={{ marginBottom: 8 }}>
            <MotiText
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "timing", duration: 1000, delay: 2000 }}
              style={{
                ...styles.welcomeText,
              }}
            >
              want to eat but don't have the time to cook?
            </MotiText>
            <MotiText
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "timing", duration: 1000, delay: 2500 }}
              style={styles.welcomeText}
            >
              let us cook your next meal for you
            </MotiText>
            <MotiText
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "timing", duration: 1000, delay: 3000 }}
              style={{ ...styles.welcomeText, color: colors.radRed }}
            >
              "you go lick hand taya"
            </MotiText>
          </View>
          <View style={styles.buttonView}>
            <MotiView
              from={{
                transform: [{ translateX: -100 }, { rotateY: "180deg" }],
                opacity: 0,
              }}
              animate={{
                transform: [{ translateX: 0 }, { rotateY: "360deg" }],
                opacity: 1,
              }}
              transition={{ type: "timing", duration: 500, delay: 1000 }}
            >
              <Chip
                title="Register"
                titleStyle={globalStyles.buttonTitle}
                type="solid"
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
                onPress={() => navigation.navigate("REGISTER")}
              />
            </MotiView>

            <MotiView
              from={{
                transform: [{ translateY: 100 }, { rotateX: "180deg" }],
                opacity: 0,
              }}
              animate={{
                transform: [{ translateY: 0 }, { rotateX: "360deg" }],
                opacity: 1,
              }}
              transition={{ type: "spring", duration: 500, delay: 1500 }}
            >
              <Chip
                title="Login"
                titleStyle={globalStyles.buttonTitle}
                type="solid"
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
                onPress={() => navigation.navigate("LOGIN")}
              />
            </MotiView>
          </View>
        </View>
      </MotiView>
    </>
  );
};

const styles = StyleSheet.create({
  welcomeTitle: {
    color: colors.radWhite,
    fontSize: 25,
    fontFamily: "AbrilFatface-Regular",
    textShadowColor: "#000",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  lottieStyle: {
    height: 190,
    width: 180,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    backgroundColor: colors.radBlack,
  },
  firstView: {
    flex: 1,
    position: "absolute",
    top: 50,
    left: 10,
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  greeting: {
    fontSize: 40,
    color: colors.radRed,
    fontFamily: "AbrilFatface-Regular",
    textShadowColor: "#000",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  buttonView: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    backgroundColor: colors.radRed,
  },
  buttonTitle: {
    fontFamily: "AbrilFatface-Regular",
  },
  welcomeText: {
    fontSize: 16,
    color: colors.radWhite,
    textAlign: "center",
    fontFamily: "AbrilFatface-Regular",
    textShadowColor: "#000",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  buttonContainer: { marginHorizontal: 3 },
});
export default WelcomeScreen;
