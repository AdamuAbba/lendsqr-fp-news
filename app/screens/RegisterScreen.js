import React from "react";
import { Text } from "react-native-elements";
import { StyleSheet, ImageBackground, View } from "react-native";
import Banner from "../components/Banner";
import SignUpForm from "../components/SignUpForm";

const image =
  "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?cs=srgb&dl=pexels-pixabay-361184.jpg&fm=jpg";
function RegisterScreen(props) {
  return (
    <ImageBackground style={styles.container} source={{ uri: image }}>
      <View style={styles.text}>
        <Text>test</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.text}>Join us</Text>
        <View style={styles.form}>
          <SignUpForm />
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
  formContainer: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  text: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
  },

  form: {
    flex: 4,
  },
});
export default RegisterScreen;
