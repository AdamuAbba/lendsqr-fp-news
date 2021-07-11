import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Button, Text, SocialIcon } from "react-native-elements";
import firebase from "../configs/firebase/fireBaseConfig";
import { globalStyles } from "../configs/GlobalStyle";
import { useNavigation } from "@react-navigation/native";

const LogInForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate("AppDrawerNav");
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <>
      <Input label="Email" value={email} onChangeText={setEmail} />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Button
        title="Log in"
        type="solid"
        buttonStyle={globalStyles.buttonConfig}
        containerStyle={globalStyles.button}
        raised={true}
        onPress={() => signIn()}
      />
      <TouchableOpacity
        style={styles.forgotView}
        onPress={() => navigation.navigate("AppDrawerNav")}
      >
        <Text style={styles.forgotText}>forgot Password ?</Text>
      </TouchableOpacity>
      <View style={styles.icon}>
        <SocialIcon type="facebook" iconSize={15} style={styles.iconConfig} />
        <SocialIcon type="twitter" iconSize={15} style={styles.iconConfig} />
        <SocialIcon type="instagram" iconSize={15} style={styles.iconConfig} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  icon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 3,
  },
  forgotView: {
    alignSelf: "center",
    paddingTop: 5,
  },
  forgotText: {
    fontWeight: "bold",
    color: "red",
  },
  errorText: {
    color: "red",
    alignSelf: "center",
    paddingBottom: 2,
  },
  iconConfig: {
    elevation: 10,
  },
});
export default LogInForm;
