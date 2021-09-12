import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Button, Text, SocialIcon, Icon } from "react-native-elements";
import firebase from "../configs/firebase/fireBaseConfig";
import { globalStyles } from "../configs/GlobalStyle";
const SignUpForm = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signedInUser, setSignedInUser] = useState("");

  const signUp = async () => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((value) =>
          dbRef.child("Users").child(value.user.uid).child("User Data").set({
            username: userName,
            Email: value.user.email,
            ID: value.user.uid,
          })
        );
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <>
      <Input
        label="user name"
        placeholder="e.g. Radish333"
        inputContainerStyle={{ borderBottomWidth: 0 }}
        inputStyle={globalStyles.input}
        labelStyle={globalStyles.label}
        value={userName}
        onChangeText={setUserName}
        leftIcon={
          <Icon
            type="material"
            name="person"
            size={23}
            style={styles.iconStyle}
            // color={isActive === true ? colors.radGreen : "black"}
          />
        }
      />
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

      <TouchableOpacity
        style={styles.forgotView}
        onPress={() => navigation.navigate("LOGIN")}
      >
        <Text style={styles.forgotText}>forgot Password ?</Text>
      </TouchableOpacity>
      <Button
        title="submit"
        type="solid"
        buttonStyle={globalStyles.buttonConfig}
        containerStyle={styles.button}
        raised={true}
        onPress={() => signUp()}
      />
      <View style={styles.icon}>
        <SocialIcon type="facebook" iconSize={15} style={styles.iconConfig} />
        <SocialIcon type="twitter" iconSize={15} style={styles.iconConfig} />
        <SocialIcon type="instagram" iconSize={15} style={styles.iconConfig} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    width: "50%",
    alignSelf: "center",
    borderRadius: 20,
  },
  icon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 3,
  },
  forgotView: {
    alignSelf: "center",
    marginBottom: 3,
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
export default SignUpForm;
