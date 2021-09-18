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
  Dimensions,
} from "react-native";
import {
  Input,
  Divider,
  Button,
  CheckBox,
  Icon,
  Overlay,
} from "react-native-elements";
import { currentUserUid } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { View as MotiView, motify } from "moti";

import { globalStyles } from "../configs/GlobalStyle";
import RadDishBanner from "./RadDishBanner";
import colors from "../configs/colors";
import DateAndTime from "./DateAndTime";
import { useNavigation } from "@react-navigation/native";
import firebase from "../configs/firebase/fireBaseConfig";
import AwesomeAlert from "react-native-awesome-alerts";

const { width, height } = Dimensions.get("window");

const RequestForm = () => {
  useEffect(() => {
    dispatchHandler();

    return () => {
      null;
    };
  });

  const { uid } = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const dispatchHandler = () => {
    dispatch(currentUserUid);
  };

  const [customerName, setCustomerName] = useState("");
  const [servicesValue, setServicesValue] = useState("");
  const [cookingValue, setCookingValue] = useState("");
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);
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
    // requestPush();
    navigation.navigate("SummaryScreen");
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
    if (!customerName || !email || !phoneNumber) {
      setVisible(!visible);
    } else {
      await dbRef
        .child(uid)
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
        })
        .catch((err) => console.log(err.message));
    }
  };

  const delicacySpec = () => {
    if (cookingIsChecked) {
      animationTrigger();

      return (
        <MotiView
          from={{ translateY: 100, opacity: 0 }}
          transition={{ types: "spring", duration: 1000 }}
          animate={{ translateY: 0, opacity: 1 }}
        >
          <Input
            placeholder="Delicacy"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            inputStyle={globalStyles.input}
            labelStyle={globalStyles.label}
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
              />
            }
          />
        </MotiView>
      );
    }
  };
  const checkNotice = () => {
    if (!servicesIsChecked && !cookingIsChecked) {
      return (
        <View style={{ flex: 1 }}>
          {/* //todo: replace banner with lottieView animation */}
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
      <View style={styles.container}>
        <View
          style={{
            borderBottomColor: colors.radOrange,
            borderBottomWidth: 3,
            paddingBottom: 17,
            elevation: 10,
          }}
        >
          <Text style={styles.formHeader}>welcome back</Text>
        </View>
        <ScrollView scrollEnabled={true} alwaysBounceVertical={true}>
          {/*//TODO: add Input active and inactive indication  */}

          <AwesomeAlert
            show={visible}
            showProgress={false}
            Animated
            title="Error"
            titleStyle={{
              ...globalStyles.buttonTitle,
              color: colors.radBlack,
            }}
            message="fields cannot be empty"
            messageStyle={styles.alertText}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showCancelButton={true}
            cancelButtonColor={colors.radRed}
            cancelText="return"
            cancelButtonTextStyle={{
              ...globalStyles.buttonTitle,
              fontSize: 14,
            }}
            cancelButtonStyle={{
              ...globalStyles.button,
              width: 100,
              borderRadius: 12,
            }}
            contentContainerStyle={styles.alertBox}
            useNativeDriver={true}
            onCancelPressed={() => {
              setVisible(false);
            }}
          />
          <Input
            placeholder="name"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            inputStyle={globalStyles.input}
            labelStyle={globalStyles.label}
            value={customerName}
            onChangeText={setCustomerName}
            errorStyle={styles.errorStyle}
            leftIcon={
              <Icon
                type="material"
                name="person"
                size={20}
                style={styles.iconStyle}
                color={iconColor}
              />
            }
          />

          <Input
            placeholder="abc@mail.com"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            inputStyle={globalStyles.input}
            labelStyle={globalStyles.label}
            value={email}
            autoCompleteType="email"
            onChangeText={setEmail}
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
            placeholder="contact no"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            inputStyle={globalStyles.input}
            labelStyle={globalStyles.label}
            value={phoneNumber}
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
            placeholder="allergies"
            multiline
            numberOfLines={2}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            inputStyle={globalStyles.input}
            labelStyle={globalStyles.label}
            value={allergies}
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
            multiline
            numberOfLines={3}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            inputStyle={globalStyles.input}
            labelStyle={globalStyles.label}
            placeholder="address"
            value={location}
            onChangeText={setLocation}
            leftIcon={
              <Icon
                type="material"
                name="place"
                size={20}
                style={styles.iconStyle}
                color={iconColor}
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
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: colors.radBlack,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 1,
    width: "98%",
    alignSelf: "center",
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
  headerStyle: {
    fontStyle: "italic",
    fontWeight: "bold",
  },
  alertText: { fontFamily: "AbrilFatface-Regular", color: colors.radBlack },
  alertBox: {
    width: width / 1.5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
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
