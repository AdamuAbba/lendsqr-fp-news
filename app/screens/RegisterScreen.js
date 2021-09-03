import React from "react";
import { Text, Divider } from "react-native-elements";
import { StyleSheet, ImageBackground, View, ScrollView } from "react-native";
import SignUpForm from "../components/SignUpForm";
import { globalStyles } from "../configs/GlobalStyle";
import colors from "../configs/colors";
const image =
  "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?cs=srgb&dl=pexels-pixabay-361184.jpg&fm=jpg";
function RegisterScreen() {
  return (
    <ImageBackground style={styles.container} source={{ uri: image }}>
      <View style={globalStyles.bannerTextView}>
        <Text style={[globalStyles.globalTitleFont, { color: "#fff" }]}>
          Customized meals with regards to your allergies
        </Text>
        <Divider
          orientation="horizontal"
          width={10}
          style={[globalStyles.dividerIcon, { borderRadius: 0 }]}
          color={colors.radOrange}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.text}>Join us</Text>
        <View style={styles.form}>
          <ScrollView>
            <SignUpForm />
          </ScrollView>
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
    height: " 85%",
  },
});
export default RegisterScreen;
