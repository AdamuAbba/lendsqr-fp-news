import React, { useEffect } from "react";
import { Text, Button, Image } from "react-native-elements";
import { View, ImageBackground, StyleSheet } from "react-native";
import { globalStyles } from "../configs/GlobalStyle";
import firebase from "../configs/firebase/fireBaseConfig";
import RadDishLogo from "../components/RadDishLogo";
import colors from "../configs/colors";

const image =
  "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const cardImage =
  "https://i.pinimg.com/originals/98/2e/bc/982ebc7d69e8f9fcdbf30306425a58b4.gif";

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    return () => {
      null;
    };
  });

  return (
    <>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={{ uri: image }}>
          <View style={styles.firstView}>
            <Text style={styles.welcomeTitle}>Food & More</Text>
            <Text style={styles.greeting}>WELCOME</Text>
            <View style={{ marginBottom: 8 }}>
              <RadDishLogo />
            </View>
            <View style={styles.buttonView}>
              <Button
                type="outline"
                title="Register"
                titleStyle={{ color: colors.radGreen }}
                buttonStyle={styles.buttonConfig}
                onPress={() => navigation.navigate("REGISTER")}
                containerStyle={[styles.button, { marginRight: 10 }]}
              />

              <Button
                type="outline"
                title="Login"
                titleStyle={{ color: colors.radGreen }}
                buttonStyle={styles.buttonConfig}
                onPress={() => navigation.navigate("LOGIN")}
                containerStyle={styles.button}
              />
            </View>
          </View>
          {/* <View style={styles.banner}>
            <RadDishBanner />
          </View> */}
          <View style={styles.secondView}>
            <Text style={styles.text}>
              easy and stress-free online catering solution
            </Text>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonConfig: {
    backgroundColor: "#ffff",
    borderColor: colors.radGreen,
  },
  welcomeTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
  },
  firstView: {
    alignItems: "flex-start",
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
    fontSize: 50,
    color: colors.radRed,
  },
  text: {
    color: "#fff",
    fontStyle: "italic",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  button: {
    width: "32%",
    elevation: 10,
  },
  secondView: {
    flex: 1,
    position: "absolute",
    bottom: 20,
  },
  greetingTwo: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  banner: {
    position: "absolute",
    top: 300,
    right: 2,
    alignSelf: "center",
    height: "25%",
    width: "60%",
  },
});
export default WelcomeScreen;
