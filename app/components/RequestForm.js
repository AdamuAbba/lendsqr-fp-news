import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Input, Divider, Button, CheckBox, Icon } from "react-native-elements";
import { currentUserUid } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { View as MotiView, Text as MotiText } from "moti";

import { globalStyles } from "../configs/GlobalStyle";
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
  const dbRef = firebase.database().ref("Users");
  const navigation = useNavigation();
  const onRequestHandle = () => {
    requestPush();
    // navigation.navigate("SummaryScreen");
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
      setVisible(true);
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
            leftIcon={
              <Icon
                type="material"
                name="restaurant"
                size={21}
                style={styles.iconStyle}
                color={colors.radOrange}
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
        <MotiText
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "timing",
            duration: 2000,
            loop: true,
            repeatReverse: true,
          }}
          style={{
            ...globalStyles.textWithShadow,
            color: colors.radWhite,
          }}
        >
          select service type above
        </MotiText>
      );
    } else if (servicesIsChecked) {
      return (
        <View>
          <MotiText
            from={{ translateX: -200 }}
            animate={{ translateX: 0 }}
            transition={{
              type: "spring",
              duration: 1000,
            }}
            style={{
              ...globalStyles.textWithShadow,
              textAlign: "left",
              paddingLeft: 10,
              color: colors.radWhite,
            }}
          >
            our service team will contact shortly after submission
          </MotiText>
        </View>
      );
    } else if (cookingIsChecked) {
      return (
        <View>
          <MotiText
            from={{ translateX: 200 }}
            animate={{ translateX: 0 }}
            transition={{
              type: "spring",
              duration: 1000,
            }}
            style={{
              ...globalStyles.textWithShadow,
              textAlign: "right",
              paddingRight: 10,
              color: colors.radWhite,
            }}
          >
            specify a delicacy below and we'll send a specialist your way
          </MotiText>
        </View>
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
          }}
        >
          <Text style={styles.formHeader}>Request form</Text>
        </View>
        <ScrollView scrollEnabled>
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
            cancelButtonColor={colors.radOrange}
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

          <MotiView
            from={{ translateX: 100, opacity: 0 }}
            transition={{ type: "spring", delay: 600, duration: 1000 }}
            animate={{ translateX: 0, opacity: 1 }}
            style={{ marginTop: 10 }}
          >
            <Input
              placeholder="name"
              inputContainerStyle={{ borderBottomWidth: 0 }}
              inputStyle={globalStyles.input}
              labelStyle={globalStyles.label}
              value={customerName}
              onChangeText={setCustomerName}
              leftIcon={
                <Icon
                  type="material"
                  name="person"
                  size={23}
                  style={styles.iconStyle}
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
              placeholder="abc@mail.com"
              inputContainerStyle={{ borderBottomWidth: 0 }}
              inputStyle={globalStyles.input}
              labelStyle={globalStyles.label}
              value={email}
              autoCompleteType="email"
              onChangeText={setEmail}
              leftIcon={
                <Icon
                  type="material"
                  name="email"
                  size={23}
                  style={styles.iconStyle}
                  color={colors.radOrange}
                />
              }
            />
          </MotiView>

          <MotiView
            from={{ translateX: 100, opacity: 0 }}
            transition={{ type: "spring", delay: 800, duration: 1000 }}
            animate={{ translateX: 0, opacity: 1 }}
          >
            <Input
              placeholder="+123"
              inputContainerStyle={{ borderBottomWidth: 0 }}
              inputStyle={globalStyles.input}
              labelStyle={globalStyles.label}
              value={phoneNumber}
              autoCompleteType="tel"
              onChangeText={setPhoneNumber}
              keyboardType="numeric"
              leftIcon={
                <Icon
                  type="material"
                  name="phone"
                  size={23}
                  style={styles.iconStyle}
                  color={colors.radOrange}
                />
              }
            />
          </MotiView>

          <MotiView
            from={{ translateX: 100, opacity: 0 }}
            transition={{ type: "spring", delay: 800, duration: 1000 }}
            animate={{ translateX: 0, opacity: 1 }}
          >
            <Input
              placeholder="allergies"
              inputContainerStyle={{ borderBottomWidth: 0 }}
              inputStyle={globalStyles.input}
              labelStyle={globalStyles.label}
              value={allergies}
              onChangeText={setAllergies}
              leftIcon={
                <Icon
                  type="font-awesome"
                  name="stethoscope"
                  size={23}
                  style={styles.iconStyle}
                  color={colors.radOrange}
                />
              }
            />
          </MotiView>

          <MotiView
            from={{ translateX: 100, opacity: 0 }}
            transition={{ type: "spring", delay: 900, duration: 1000 }}
            animate={{ translateX: 0, opacity: 1 }}
          >
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
                  size={23}
                  style={styles.iconStyle}
                  color={colors.radOrange}
                />
              }
            />
          </MotiView>

          <View style={styles.checkGroup}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <MotiView
                from={{ translateX: -100, opacity: 0 }}
                transition={{ type: "spring", delay: 1000, duration: 1000 }}
                animate={{ translateX: 0, opacity: 1 }}
              >
                <CheckBox
                  title="services"
                  onPress={() => setServicesIsChecked(!servicesIsChecked)}
                  checkedColor={colors.radGreen}
                  checkedTitle="services"
                  value={servicesValue}
                  checked={servicesIsChecked}
                  onChangeText={() => setServicesValue("services")}
                  containerStyle={{
                    ...globalStyles.input,
                    borderBottomColor: servicesIsChecked
                      ? colors.radGreen
                      : colors.radOrange,
                  }}
                />
              </MotiView>

              <MotiView
                from={{ translateX: -100, opacity: 0 }}
                transition={{ type: "spring", delay: 1250, duration: 1000 }}
                animate={{ translateX: 0, opacity: 1 }}
              >
                <CheckBox
                  title="cooking"
                  onPress={() => setCookingIsChecked(!cookingIsChecked)}
                  checkedTitle="cooking"
                  checkedColor={colors.radGreen}
                  value={cookingValue}
                  checked={cookingIsChecked}
                  onChangeText={() => setCookingValue("cooking")}
                  containerStyle={{
                    ...globalStyles.input,
                    borderBottomColor: cookingIsChecked
                      ? colors.radGreen
                      : colors.radOrange,
                  }}
                />
              </MotiView>
            </View>

            <View style={{ flex: 1 }}>{checkNotice()}</View>
          </View>
          {delicacySpec()}
          <Divider
            orientation="horizontal"
            subHeader="pick a preferred Date and Time"
            subHeaderStyle={{
              ...globalStyles.textWithShadow,
              color: colors.radWhite,
              paddingBottom: 5,
            }}
            width={5}
            style={styles.dividerIcon}
            color={colors.radOrange}
          />

          <DateAndTime />

          <Button
            title="Request"
            type="solid"
            onPress={() => onRequestHandle()}
            buttonStyle={{ backgroundColor: colors.radOrange }}
            titleStyle={{ ...globalStyles.textWithShadow }}
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
    borderBottomColor: colors.radOrange,
    borderRightColor: colors.radOrange,
    borderWidth: 2,
    backgroundColor: "#ffffff",
  },
  checkGroup: {
    flex: 1,
    alignItems: "center",
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
