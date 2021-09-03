import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Button, Text, SocialIcon, Icon } from "react-native-elements";
import firebase from "../configs/firebase/fireBaseConfig";
import { globalStyles } from "../configs/GlobalStyle";
import { useNavigation } from "@react-navigation/native";

const LogInForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signIn = () => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => navigation.navigate("AppDrawerNav"));
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <>
      <Input
        label="Email"
        placeholder="  e.g. abc@mail.com"
        inputContainerStyle={{ borderBottomWidth: 0 }}
        inputStyle={globalStyles.input}
        labelStyle={globalStyles.label}
        value={email}
        onChangeText={setEmail}
        leftIcon={
          <Icon
            type="material"
            name="email"
            size={23}
            style={styles.iconStyle}
            // color={isActive === true ? colors.radGreen : "black"}
          />
        }
      />
      <Input
        label="Password"
        placeholder="  e.g. abc@mail.com"
        inputContainerStyle={{ borderBottomWidth: 0 }}
        inputStyle={globalStyles.input}
        labelStyle={globalStyles.label}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        leftIcon={
          <Icon
            name="lock"
            type="material"
            size={23}
            style={styles.iconStyle}
            // color={isActive === true ? colors.radGreen : "black"}
          />
        }
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
