import React from "react";
import firebase from "../configs/firebase/fireBaseConfig";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const SignOut = () => {
  navigator = useNavigation();
  const logOut = async () => {
    try {
      await firebase.auth().signOut;
      navigator.navigate("UserAuthStack", { screen: "WELCOME" });
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <Button
        iconRight
        type="clear"
        title="sign out"
        onPress={() => logOut()}
        icon={
          <Icon
            style={{ paddingLeft: 4 }}
            name="sign-out"
            size={20}
            color="blue"
          />
        }
      />
    </>
  );
};

export default SignOut;
