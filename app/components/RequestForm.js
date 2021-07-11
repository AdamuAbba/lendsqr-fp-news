import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Input, Divider, Button, CheckBox } from "react-native-elements";
import { globalStyles } from "../configs/GlobalStyle";
import Icon from "react-native-vector-icons/FontAwesome";
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
  const [servicesIsChecked, setServicesIsChecked] = useState(false);
  const [cookingIsChecked, setCookingIsChecked] = useState(false);
  return (
    <>
      <ScrollView style={styles.scrollContainer}>
        {/*//TODO: add Input active and inactive indication  */}
        <Text style={styles.formSubHeading}>
          Let us do the hard work for you...
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
              type="font-awesome"
              name="user"
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
              type="font-awesome"
              name="user-circle"
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
              type="font-awesome"
              name="envelope"
              size={20}
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
          inputContainerStyle={{ borderBottomWidth: 0 }}
          inputStyle={styles.input}
          placeholder="  i.e. home address"
          value={location}
          onChangeText={setLocation}
          // onFocus={() => setIsActive(true)}
          // onBlur={() => setIsActive(false)}
          // inputContainerStyle={{
          //   borderColor: isActive === true ? colors.radGreen : "black",
          // }}
          leftIcon={
            <Icon
              type="font-awesome"
              name="map"
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

        <DateAndTime />

        <Button
          buttonStyle={globalStyles.buttonConfig}
          containerStyle={[
            globalStyles.button,
            { marginBottom: 20, marginTop: 20 },
          ]}
          title="Request"
          type="solid"
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
  dividerText: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 10,
    alignSelf: "flex-start",
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
    fontStyle: "italic",
    paddingBottom: 10,
    paddingTop: 10,
    alignSelf: "center",
    fontSize: 18,
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
    width: "43%",
    borderRadius: 20,
    borderColor: colors.radOrange,
    borderWidth: 2,
    elevation: 7,
    backgroundColor: "#ffffff",
  },
});
export default RequestForm;
