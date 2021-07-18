import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { Input, Divider, Button, CheckBox, Icon } from "react-native-elements";
import { globalStyles } from "../configs/GlobalStyle";
import RadDishBanner from "./RadDishBanner";
import colors from "../configs/colors";
import DateAndTime from "./DateAndTime";
const RequestForm = () => {
  // const [isActive, setIsActive] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [servicesValue, setServicesValue] = useState("");
  const [cookingValue, setCookingValue] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [allergies, setAllergies] = useState("");
  const [delicacy, setDelicacy] = useState("");
  const [servicesIsChecked, setServicesIsChecked] = useState(false);
  const [cookingIsChecked, setCookingIsChecked] = useState(false);

  const onRequestHandle = () => {
    return Alert.alert("bla bla", "Dummy message", [{ text: "ok" }]);
  };

  const delicacySpec = () => {
    if (cookingIsChecked) {
      return (
        <Input
          label="Delicacy"
          placeholder="  i.g. pounded yam and afam soup"
          inputContainerStyle={{ borderBottomWidth: 0 }}
          inputStyle={styles.input}
          labelStyle={styles.label}
          value={delicacy}
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
              // color={isActive === true ? colors.radGreen : "black"}
            />
          }
        />
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
      return (
        <Text style={styles.noticeText}>
          Our Service team will contact you shortly after submission...
        </Text>
      );
    } else if (cookingIsChecked) {
      return (
        <Text style={styles.noticeText}>
          Specify a delicacy below and we will send you our best chef for that
          delicacy...
        </Text>
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
      <ScrollView style={styles.scrollContainer}>
        {/*//TODO: add Input active and inactive indication  */}
        <Text style={styles.formSubHeading}>
          RELAX, LET US DO THE HARD-WORK FOR YOU...
        </Text>
        <Input
          label="First Name"
          placeholder="  i.e. name given"
          inputContainerStyle={{ borderBottomWidth: 0 }}
          inputStyle={styles.input}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          labelStyle={styles.label}
          value={firstName}
          onChangeText={setFirstName}
          // onFocus={() => setIsActive(true)}
          // onBlur={() => setIsActive(false)}
          // inputContainerStyle={{
          //   borderColor: isActive === true ? colors.radGreen : "black",
          // }}
          leftIcon={
            <Icon
              type="material"
              name="person"
              size={20}
              style={styles.iconStyle}
              // color={isActive === true ? colors.radGreen : "black"}
            />
          }
        />
        <Input
          label="Last Name"
          placeholder="  i.e. surname"
          inputContainerStyle={{ borderBottomWidth: 0 }}
          inputStyle={styles.input}
          labelStyle={styles.label}
          value={lastName}
          onChangeText={setLastName}
          // onFocus={() => setIsActive(true)}
          // onBlur={() => setIsActive(false)}
          // inputContainerStyle={{
          //   borderColor: isActive === true ? colors.radGreen : null,
          // }}
          leftIcon={
            <Icon
              type="material"
              name="person"
              size={21}
              style={styles.iconStyle}
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
          onChangeText={setEmail}
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
          onChangeText={setPhoneNumber}
          keyboardType="numeric"
          // onFocus={() => setIsActive(true)}
          // onBlur={() => setIsActive(false)}
          // inputContainerStyle={{
          //   borderColor: isActive === true ? colors.radGreen : "black",
          // }}
          leftIcon={
            <Icon
              type="font-awesome"
              name="mobile"
              size={30}
              style={styles.iconStyle}
              // color={isActive === true ? colors.radGreen : "black"}
            />
          }
        />
        <Input
          label="Allergies"
          placeholder="  i.e. food allergies"
          multiline
          numberOfLines={3}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          inputStyle={styles.input}
          labelStyle={styles.label}
          value={allergies}
          onChangeText={() => setAllergies}
          // onFocus={() => setIsActive(true)}
          // onBlur={() => setIsActive(false)}
          // inputContainerStyle={{
          //   borderColor: isActive === true ? colors.radGreen : "black",
          // }}
          leftIcon={
            <Icon
              type="font-awesome"
              name="stethoscope"
              size={25}
              style={styles.iconStyle}
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
          color={colors.radOrange}
        />
        <View style={styles.checkGroup}>
          <View style={{ flex: 1 }}>
            <CheckBox
              title="services"
              onPress={() => setServicesIsChecked(!servicesIsChecked)}
              checkedColor={colors.radGreen}
              checkedTitle="services selected"
              checked={servicesIsChecked}
              value={servicesValue}
              onChangeText={() => setServicesValue("services")}
              containerStyle={styles.checkContainer}
            />
            <CheckBox
              title="cooking"
              onPress={() => setCookingIsChecked(!cookingIsChecked)}
              checkedTitle="cooking selected"
              checkedColor={colors.radGreen}
              checked={cookingIsChecked}
              value={cookingValue}
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
    backgroundColor: "white",
  },
  formSubHeading: {
    paddingBottom: 10,
    paddingTop: 10,
    alignSelf: "center",
    fontSize: 16,
    marginHorizontal: 8,
  },
  label: {
    color: "#000000",
  },
  input: {
    borderColor: colors.radOrange,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "#cbced4",
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
  },
});
export default RequestForm;
