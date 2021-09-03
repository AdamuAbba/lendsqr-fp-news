import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Chip, Icon, Button, Divider } from "react-native-elements";
import colors from "../configs/colors";
import { useNavigation } from "@react-navigation/native";
import firebase from "../configs/firebase/fireBaseConfig";
import DataLoading from "./DataLoading";

const GetRequest = () => {
  const [signedInUser, setSignedInUser] = useState("");
  useEffect(() => {
    logCheck();
    getData();
    return () => {
      null;
    };
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [name, setName] = useState("");
  const [allergies, setAllergies] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [delicacy, setDelicacy] = useState("");

  const logCheck = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setSignedInUser(user);
      } else {
        return null;
      }
    });
  };
  const navigation = useNavigation();
  const dbRef = firebase.database().ref("Users");

  const getData = () => {
    try {
      dbRef
        .child(signedInUser.uid)
        .child("userRequests")
        .on("value", (snapshot) => {
          const data = snapshot.val();
          setName(data["name"]);
          setAllergies(data["Allergies"]);
          setEmail(data["Email"]);
          setAllergies(data["Address"]);
          setPhoneNumber(data["phoneNumber"]);
          setDelicacy(data["serviceChoice"]["cooking"]["foodChoice"]);
          setIsLoaded(true);
        });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      {isLoaded === false ? (
        <DataLoading />
      ) : (
        <View style={{ width: "75%", marginTop: 40 }}>
          <Text>please confirm order below...</Text>

          <View style={styles.itemView}>
            <Text style={styles.itemLabel}>Name</Text>

            <Icon
              iconStyle={styles.pointerIcon}
              color={colors.radGreen}
              name="chevron-right"
              type="font-awesome"
              size={17}
            />
            <Text style={styles.itemText}>{name}</Text>
          </View>
          <Divider style={{ marginTop: 8 }} />
          <View style={styles.itemView}>
            <Text style={styles.itemLabel}>Email</Text>
            <Icon
              iconStyle={styles.pointerIcon}
              color={colors.radGreen}
              name="chevron-right"
              type="font-awesome"
              size={17}
            />
            <Text style={styles.itemText}>{email}</Text>
          </View>
          <Divider style={{ marginTop: 8 }} />
          <View style={styles.itemView}>
            <Text style={styles.itemLabel}>Allergies</Text>
            <Icon
              iconStyle={styles.pointerIcon}
              color={colors.radGreen}
              name="chevron-right"
              type="font-awesome"
              size={17}
            />
            <Text style={styles.itemText}>{allergies}</Text>
          </View>
          <Divider style={{ marginTop: 8 }} />
          <View style={styles.itemView}>
            <Text style={styles.itemLabel}>Phone number</Text>
            <Icon
              iconStyle={styles.pointerIcon}
              color={colors.radGreen}
              name="chevron-right"
              type="font-awesome"
              size={17}
            />
            <Text style={styles.itemText}>{phoneNumber}</Text>
          </View>
          <Divider style={{ marginTop: 8 }} />
          <View style={styles.itemView}>
            <Text style={styles.itemLabel}>Delicacy</Text>
            <Icon
              iconStyle={styles.pointerIcon}
              color={colors.radGreen}
              name="chevron-right"
              type="font-awesome"
              size={17}
            />
            <Text style={styles.itemText}>{delicacy}</Text>
          </View>
          <Button
            onPress={() => navigation.navigate("AppDrawerNav")}
            title="confirm"
            buttonStyle={styles.buttonView}
          />
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  itemView: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  itemText: {
    marginLeft: 10,
  },
  buttonView: {
    marginTop: 10,
    backgroundColor: colors.radGreen,
  },
  pointerIcon: {
    marginLeft: 10,
  },
  itemLabel: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
export default GetRequest;
