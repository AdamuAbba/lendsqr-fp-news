import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import {
  Input,
  Button,
  Text,
  SocialIcon,
  Icon,
  Chip,
} from "react-native-elements";
import firebase from "../configs/firebase/fireBaseConfig";
import { globalStyles } from "../configs/GlobalStyle";
import { View as MotiView, Text as MotiText, motify } from "moti";
import colors from "../configs/colors";
import { useNavigation } from "@react-navigation/native";

const LogInForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async () => {
    setIsLoading(!isLoading);
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate("AppDrawerNav"))
      .catch((err) => {
        setError(err.message);
        setIsLoading(isLoading);
      });
  };
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            borderBottomColor: colors.radOrange,
            borderBottomWidth: 3,
            paddingBottom: 17,
          }}
        >
          <Text style={styles.formHeader}>welcome back</Text>
        </View>
        <ScrollView scrollEnabled>
          <MotiView
            from={{ translateX: 100, opacity: 0 }}
            transition={{ type: "spring", delay: 600, duration: 1000 }}
            animate={{ translateX: 0, opacity: 1 }}
            style={{ marginTop: 10 }}
          >
            <Input
              placeholder="email@domain.com"
              textContentType="emailAddress"
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
                  color={colors.radOrange}
                />
              }
            />
          </MotiView>
          <MotiView
            from={{ translateX: 100, opacity: 0 }}
            transition={{ type: "spring", delay: 700, duration: 1000 }}
            animate={{ translateX: 0, opacity: 1 }}
          >
            <Input
              placeholder="  ***"
              textContentType="password"
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
                  color={colors.radOrange} // color={isActive === true ? colors.radGreen : "black"}
                />
              }
            />
          </MotiView>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <MotiView
            from={{ translateX: 100, opacity: 0 }}
            transition={{ type: "spring", delay: 800, duration: 1000 }}
            animate={{ translateX: 0, opacity: 1 }}
          >
            <TouchableOpacity
              style={styles.forgotView}
              onPress={() => navigation.navigate("LOGIN")}
            >
              <Text style={styles.forgotText}>forgot Password ?</Text>
            </TouchableOpacity>
            <Chip
              title="login"
              type="solid"
              loading={isLoading}
              titleStyle={globalStyles.buttonTitle}
              buttonStyle={{ backgroundColor: colors.radOrange }}
              containerStyle={styles.button}
              onPress={() => signIn()}
            />
          </MotiView>
        </ScrollView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.radBlack,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 1,
    width: "98%",
    alignSelf: "center",
  },
  button: {
    width: "50%",
    alignSelf: "center",
    marginBottom: 20,
  },
  formHeader: {
    color: colors.radWhite,
    alignSelf: "center",
    fontSize: 20,
    fontFamily: "AbrilFatface-Regular",
    textShadowColor: "#000",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  icon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3,
  },
  forgotView: {
    alignSelf: "center",
    marginBottom: 10,
  },
  forgotText: {
    color: colors.radWhite,
    fontFamily: "AbrilFatface-Regular",
    textShadowColor: "#000",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 2,
    fontFamily: "AbrilFatface-Regular",
  },
  iconConfig: {
    elevation: 10,
  },
});
export default LogInForm;
