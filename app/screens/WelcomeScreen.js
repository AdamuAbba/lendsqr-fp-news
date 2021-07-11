import React from "react";
import { Text, Button, Image } from "react-native-elements";
import {
  View,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import { globalStyles } from "../configs/GlobalStyle";
const image =
  "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const cardImage =
  "https://i.pinimg.com/originals/98/2e/bc/982ebc7d69e8f9fcdbf30306425a58b4.gif";
const WelcomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={{ uri: image }}>
          <View style={styles.firstView}>
            <Text style={styles.text}>Rad-dish Motor</Text>
            <Text style={styles.greeting}>WELCOME</Text>
            <Text style={styles.text}>something inspirational</Text>
            <View style={styles.buttonView}>
              <Button
                type="solid"
                title="Register"
                buttonStyle={styles.buttonConfig}
                onPress={() => navigation.navigate("REGISTER")}
                containerStyle={[styles.button, { marginRight: 10 }]}
              />
              <Button
                type="solid"
                title="Login"
                buttonStyle={styles.buttonConfig}
                onPress={() => navigation.navigate("LOGIN")}
                containerStyle={styles.button}
              />
            </View>
          </View>
          <View style={styles.banner}>
            <Image
              containerStyle={styles.bannerContainer}
              style={styles.bannerImage}
              source={require("./../assets/radDishLogo1.gif")}
            />
          </View>
          <View style={styles.secondView}>
            <Text style={styles.greetingTwo}>something short</Text>
            <Text style={styles.text}>more stuff</Text>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonConfig: {
    backgroundColor: "#4ECDC4",
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
    color: "white",
  },
  text: {
    color: "white",
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
    alignItems: "flex-end",
    flex: 1,
    position: "absolute",
    bottom: 20,
    right: 10,
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
  bannerImage: {
    height: "100%",
    width: "100%",
  },
  bannerContainer: {
    borderRadius: 30,
    elevation: 10,
  },
});
export default WelcomeScreen;
