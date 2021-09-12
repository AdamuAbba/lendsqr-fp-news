import React, { useEffect } from "react";
import { Text, Button, Image } from "react-native-elements";
import { View, ImageBackground, StyleSheet } from "react-native";
import { globalStyles } from "../configs/GlobalStyle";
import firebase from "../configs/firebase/fireBaseConfig";
import RadDishLogo from "../components/RadDishLogo";
import colors from "../configs/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

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
            {/* //todo add boiling plat lottie to welcome*/}
            <Text style={styles.greeting}>Welcome</Text>
            <View style={{ marginBottom: 8 }}>
              <RadDishLogo />
            </View>
            <View style={styles.buttonView}>
              <Button
                type="solid"
                title="Register"
                raised
                buttonStyle={{ backgroundColor: colors.radGreen }}
                titleStyle={{
                  fontFamily: "AbrilFatface-Regular",
                }}
                onPress={() => navigation.navigate("REGISTER")}
                containerStyle={[styles.button, { marginRight: 10 }]}
              />

              <Button
                type="solid"
                raised
                title="Login"
                buttonStyle={{ backgroundColor: colors.radGreen }}
                titleStyle={{
                  fontFamily: "AbrilFatface-Regular",
                }}
                onPress={() => navigation.navigate("LOGIN")}
                containerStyle={styles.button}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  welcomeTitle: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "AbrilFatface-Regular",
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
    fontFamily: "AbrilFatface-Regular",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  button: {
    width: "32%",
    elevation: 10,
  },

  greetingTwo: {
    fontSize: 30,
    color: "white",
    fontFamily: "AbrilFatface-Regular",
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
