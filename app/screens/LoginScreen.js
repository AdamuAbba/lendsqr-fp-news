import React from "react";
import { Text, Divider } from "react-native-elements";
import { StyleSheet, ImageBackground, View, ScrollView } from "react-native";
import LoginInForm from "../components/LogInForm";
import { globalStyles } from "../configs/GlobalStyle";
import { View as MotiView, Text as MotiText, AnimatePresence } from "moti";
import { StatusBar } from "expo-status-bar";
import colors from "../configs/colors";
const image =
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGZvb2R8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
function RegisterScreen() {
  return (
    <MotiView
      from={{ rotateY: "90deg", opacity: 0 }}
      transition={{ type: "spring", duration: 1000 }}
      animate={{ rotateY: "0deg", opacity: 1 }}
      style={styles.container}
    >
      <StatusBar hidden />
      <ImageBackground
        style={{ ...StyleSheet.absoluteFillObject }}
        source={{ uri: image }}
        resizeMode="cover"
      >
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "rgba(250, 171, 100,0.3)",
          }}
        >
          <View
            style={{
              ...globalStyles.bannerTextView,
            }}
          >
            <MotiText
              from={{ translateX: 100, opacity: 0 }}
              transition={{ type: "spring", delay: 250, duration: 1000 }}
              animate={{ translateX: 0, opacity: 1 }}
              style={{
                ...globalStyles.globalTitleFont,
                color: colors.radWhite,
                textAlign: "center",
                textShadowColor: "#000",
                textShadowOffset: { width: 0.5, height: 0.5 },
                textShadowRadius: 1,
              }}
            >
              Yes! we'll do the hard-work for you
            </MotiText>

            <Divider
              orientation="horizontal"
              width={3}
              style={[globalStyles.dividerIcon, { borderRadius: 0 }]}
              color={colors.radOrange}
            />
          </View>
          <MotiView
            from={{ translateX: 100, opacity: 0 }}
            transition={{ type: "spring", delay: 500, duration: 1000 }}
            animate={{ translateX: 0, opacity: 1 }}
            style={{ flex: 1 }}
          >
            <LoginInForm />
          </MotiView>
        </View>
      </ImageBackground>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
  },

  form: {
    height: " 85%",
  },
});
export default RegisterScreen;
