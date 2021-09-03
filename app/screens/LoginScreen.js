import React from "react";
import { Text, Divider } from "react-native-elements";
import { StyleSheet, ImageBackground, View } from "react-native";
import Banner from "../components/Banner";
import LogInForm from "../components/LogInForm";
import colors from "../configs/colors";
import { globalStyles } from "../configs/GlobalStyle";
const image =
  "https://images.pexels.com/photos/255501/pexels-photo-255501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
function LoginScreen() {
  return (
    <ImageBackground style={styles.container} source={{ uri: image }}>
      <View style={globalStyles.bannerTextView}>
        <Text style={[globalStyles.globalTitleFont, { color: "#fff" }]}>
          we work and you chill
        </Text>
        <Divider
          orientation="horizontal"
          width={10}
          style={[globalStyles.dividerIcon, { borderRadius: 0 }]}
          color={colors.radOrange}
        />
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
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
  },
  textView: {
    flex: 1,
  },
  formContainer: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
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
