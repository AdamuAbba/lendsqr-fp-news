import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  Easing,
} from "react-native";
import { Input, Divider, Button, CheckBox, Icon } from "react-native-elements";
import { globalStyles } from "../configs/GlobalStyle";
import RadDishBanner from "./RadDishBanner";
import colors from "../configs/colors";
import DateAndTime from "./DateAndTime";
import { useNavigation } from "@react-navigation/native";
import firebase from "../configs/firebase/fireBaseConfig";

const RequestForm = () => {
  useEffect(() => {
    userLogCheck();
    return () => {
      null;
    };
  });
  // const [isActive, setIsActive] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [servicesValue, setServicesValue] = useState("");
  const [cookingValue, setCookingValue] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [allergies, setAllergies] = useState("");
  const [delicacy, setDelicacy] = useState("");
  const [servicesIsChecked, setServicesIsChecked] = useState(false);
  const [cookingIsChecked, setCookingIsChecked] = useState(false);
  const [signedInUser, setSignedInUser] = useState("");
  const dbRef = firebase.database().ref("Users");
  const navigation = useNavigation();
  const iconColor = colors.radOrange;
  const onRequestHandle = () => {
    requestPush();
    // navigation.navigate("SummaryScreen");
  };

  const userLogCheck = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setSignedInUser(user);
      } else {
        return null;
      }
    });
  };

  //?animations section
  const initialValue = useRef(new Animated.Value(0)).current;
  const animationTrigger = () => {
    Animated.timing(initialValue, {
      toValue: 100,
      duration: 1000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  };

  let cookingChoice = { cooking: { foodChoice: delicacy.trim() } };

  const serviceChoice = () => {
    if (cookingIsChecked === true) {
      return cookingChoice;
    } else if (servicesIsChecked === true) {
      return `services`;
    } else {
      return null;
    }
  };

  const requestPush = async () => {
    try {
      if (!customerName || !email || !phoneNumber) {
        return Alert.alert("title", "fields cannot be empty", [
          { title: "ok" },
        ]);
      } else {
        await dbRef
          .child(signedInUser.uid)
          .child("userRequests")
          .set({
            name: customerName.trim(),
            Email: email.trim(),
            phoneNumber: phoneNumber.trim(),
            Allergies: allergies.trim(),
            address: location.trim(),
            serviceChoice: serviceChoice(),
          })
          .then(() => {
            navigation.navigate("SummaryScreen");
          });
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const delicacySpec = () => {
    if (cookingIsChecked) {
      animationTrigger();

      return (
        <Animated.View
          style={{
            transform: [
              {
                translateY: initialValue.interpolate({
                  inputRange: [0, 100],
                  outputRange: [90, 0],
                }),
              },
            ],
          }}
        >
          <Input
            label="Delicacy"
            placeholder="  i.g. pounded yam and afam soup"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            inputStyle={styles.input}
            labelStyle={styles.label}
            value={delicacy}
            errorStyle={styles.errorStyle}
            onChangeText={setDelicacy}
            multiline
            numberOfLines={3}
            // onFocus={() => setIsActive(true)}
            // onBlur={() => setIsActive(false)}
            // inputContainerStyle={{
            //   borderColor: isActive === true ? colors.radGreen : null,
            // }}
            leftIcon={
              <Icon
                type="material"
                name="restaurant"
                size={21}
                color={colors.radGreen}
                style={styles.iconStyle}
                color={iconColor}
                // color={isActive === true ? colors.radGreen : "black"}
              />
            }
          />
        </Animated.View>
      );
    }
  };
  const checkNotice = () => {
    if (!servicesIsChecked && !cookingIsChecked) {
      return (
        <View style={{ flex: 1 }}>
          <RadDishBanner />
        </View>
      );
    } else if (servicesIsChecked) {
      animationTrigger();
      return (
        <Animated.Text
          style={[
            styles.noticeText,
            {
              transform: [
                {
                  translateX: initialValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [90, 0],
                  }),
                },
              ],
            },
          ]}
        >
          Our Service team will contact you shortly after submission...
        </Animated.Text>
      );
    } else if (cookingIsChecked) {
      animationTrigger();
      return (
        <Animated.Text
          style={[
            styles.noticeText,
            {
              transform: [
                {
                  translateX: initialValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [90, 0],
                  }),
                },
              ],
            },
          ]}
        >
          Specify a delicacy below and we will send you our best chef for that
          delicacy...
        </Animated.Text>
      );
    } else if (servicesIsChecked && cookingIsChecked) {
      return (
        <Text style={styles.noticeText}>
          Both service options selected Thanks, we will not disappoint
        </Text>
      );
    }
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView scrollEnabled={true} style={styles.scrollContainer}>
          {/*//TODO: add Input active and inactive indication  */}

          <Input
            label="Name"
            placeholder="  e.g. micheal smith"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            inputStyle={styles.input}
            labelStyle={[styles.label, { marginTop: 50 }]}
            value={customerName}
            onChangeText={setCustomerName}
            errorMessage={nameError}
            errorStyle={styles.errorStyle}
            leftIcon={
              <Icon
                type="material"
                name="person"
                size={20}
                style={styles.iconStyle}
                color={iconColor}
                // color={isActive === true ? colors.radGreen : "black"}
              />
            }
          />

          <Input
            label="Email"
            placeholder="  e.g. abc@mail.com"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            inputStyle={styles.input}
            labelStyle={styles.label}
            value={email}
            autoCompleteType="email"
            onChangeText={setEmail}
            errorMessage={emailError}
            errorStyle={styles.errorStyle}
            // onFocus={() => setIsActive(true)}
            // onBlur={() => setIsActive(false)}
            // inputContainerStyle={{
            //   borderColor: isActive === true ? colors.radGreen : null,
            // }}
            leftIcon={
              <Icon
                type="material"
                name="email"
                size={23}
                style={styles.iconStyle}
                color={iconColor}
                // color={isActive === true ? colors.radGreen : "black"}
              />
            }
          />
          <Input
            label="Phone Number"
            placeholder="  e.g. +234..."
            inputContainerStyle={{ borderBottomWidth: 0 }}
            inputStyle={styles.input}
            labelStyle={styles.label}
            value={phoneNumber}
            errorMessage={phoneError}
            errorStyle={styles.errorStyle}
            onChangeText={setPhoneNumber}
            keyboardType="numeric"
            leftIcon={
              <Icon
                type="font-awesome"
                name="mobile"
                size={30}
                style={styles.iconStyle}
                color={iconColor}
                // color={isActive === true ? colors.radGreen : "black"}
              />
            }
          />
          <Input
            label="Allergies"
            placeholder="  i.g. cassava allergy"
            multiline
            numberOfLines={2}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            inputStyle={styles.input}
            labelStyle={styles.label}
            value={allergies}
            errorStyle={styles.errorStyle}
            onChangeText={setAllergies}
            leftIcon={
              <Icon
                type="font-awesome"
                name="stethoscope"
                size={25}
                style={styles.iconStyle}
                color={iconColor}
                // color={isActive === true ? colors.radGreen : "black"}
              />
            }
          />
          <Input
            label="Service Location"
            labelStyle={styles.label}
            multiline
            numberOfLines={3}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            inputStyle={styles.input}
            placeholder="  i.e. home address/Landmark"
            value={location}
            errorStyle={styles.errorStyle}
            onChangeText={setLocation}
            // onFocus={() => setIsActive(true)}
            // onBlur={() => setIsActive(false)}
            // inputContainerStyle={{
            //   borderColor: isActive === true ? colors.radGreen : "black",
            // }}
            leftIcon={
              <Icon
                type="material"
                name="place"
                size={20}
                style={styles.iconStyle}
                color={iconColor}
                // color={isActive === true ? colors.radGreen : "black"}
              />
            }
          />
          <Divider
            orientation="horizontal"
            subHeader="Service Requirement (please tick an option)"
            subHeaderStyle={styles.dividerText}
            width={10}
            style={styles.dividerIcon}
          />
          <View style={styles.checkGroup}>
            <View style={{ flex: 1 }}>
              <CheckBox
                title="services"
                onPress={() => setServicesIsChecked(!servicesIsChecked)}
                checkedColor={colors.radGreen}
                checkedTitle="services selected"
                value={servicesValue}
                checked={servicesIsChecked}
                onChangeText={() => setServicesValue("services")}
                containerStyle={styles.checkContainer}
              />
              <CheckBox
                title="cooking"
                onPress={() => setCookingIsChecked(!cookingIsChecked)}
                checkedTitle="cooking selected"
                checkedColor={colors.radGreen}
                value={cookingValue}
                checked={cookingIsChecked}
                onChangeText={() => setCookingValue("cooking")}
                containerStyle={styles.checkContainer}
              />
            </View>
            <Divider
              orientation="vertical"
              width={8}
              style={styles.noticeDivider}
              color={colors.radOrange}
            />
            <View style={{ flex: 1, marginRight: 10 }}>{checkNotice()}</View>
          </View>
          {delicacySpec()}
          <Divider
            orientation="horizontal"
            subHeader="pick a preferred Date and Time"
            subHeaderStyle={styles.dividerText}
            width={10}
            style={styles.dividerIcon}
            color={colors.radOrange}
          />

          <DateAndTime />

          <Button
            title="Request"
            type="solid"
            onPress={() => onRequestHandle()}
            buttonStyle={globalStyles.buttonConfig}
            containerStyle={[
              globalStyles.button,
              { marginBottom: 20, marginTop: 20 },
            ]}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontStyle: "italic",
    fontWeight: "bold",
  },

  dividerIcon: {
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
    elevation: 5,
  },
  noticeDivider: {
    elevation: 5,
    marginHorizontal: 18,
  },
  dividerText: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 10,
    alignSelf: "center",
    marginTop: 10,
    color: colors.radWhite,
    fontFamily: "AbrilFatface-Regular",
  },
  iconStyle: {
    marginRight: 10,
  },
  inputLabel: {
    fontWeight: "bold",
  },
  scrollContainer: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: colors.radBlack,
  },

  label: {
    color: colors.radWhite,
    fontFamily: "AbrilFatface-Regular",
  },
  input: {
    borderColor: colors.radOrange,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: colors.radWhite,
    elevation: 6,
  },
  checkContainer: {
    width: "100%",
    borderRadius: 20,
    borderColor: colors.radOrange,
    borderWidth: 2,
    elevation: 7,
    backgroundColor: "#ffffff",
  },
  checkGroup: {
    flexDirection: "row",
    marginBottom: 10,
  },
  noticeText: {
    fontWeight: "700",
    fontStyle: "italic",
    color: colors.radWhite,
    fontFamily: "AbrilFatface-Regular",
  },
  errorStyle: {
    alignSelf: "flex-start",
    marginLeft: 40,
    fontFamily: "AbrilFatface-Regular",
  },
});
export default RequestForm;
