import React from "react";
import { Text } from "react-native-elements";
import { StyleSheet, ImageBackground, View } from "react-native";
import Banner from "../components/Banner";
import LogInForm from "../components/LogInForm";

const image =
  "https://images.pexels.com/photos/255501/pexels-photo-255501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
function LoginScreen() {
  return (
    <ImageBackground style={styles.container} source={{ uri: image }}>
      <View style={styles.text}>
        <Text>test</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.textView}>
          <Text style={styles.textTitle}>Welcome Back</Text>
          <Text style={styles.textSubtitle}>
            lets us cook your next meal...
          </Text>
        </View>
        <View style={styles.form}>
          <LogInForm />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
  },
  text: {
    flex: 1,
  },
  formContainer: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  textView: {
    flex: 1,
  },
  textTitle: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  form: {
    flex: 4,
  },
  textSubtitle: {
    justifyContent: "center",
    alignSelf: "center",

    fontWeight: "bold",
    fontStyle: "italic",
  },
});
export default LoginScreen;
