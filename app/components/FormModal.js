import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  Modal,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Form from "./Form";
import { globalStyles } from "../configs/GlobalStyle";
function FormModal(props) {
  const [modalState, setModalState] = useState(false);

  return (
    <View>
      <Modal visible={modalState} animationType="slide">
        <ImageBackground
          style={styles.image}
          source={{
            uri: "https://i.pinimg.com/originals/f9/98/0f/f9980fdb73ff0acc69d70a8997acb5fa.gif",
          }}
        >
          <View style={styles.textView}>
            <Text style={globalStyles.globalTitleFont}>MEALS & MORE</Text>
          </View>

          <Form />
        </ImageBackground>
        <MaterialIcons
          style={styles.icon}
          name="close"
          size={24}
          onPress={() => setModalState(false)}
        />
      </Modal>
      <Button title="CONTACT US" onPress={() => setModalState(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  textView: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    backgroundColor: "#fff",
    borderRadius: 20,
    color: "red",
    width: 25,
    position: "absolute",
    top: 10,
    left: 10,
  },
});
export default FormModal;
