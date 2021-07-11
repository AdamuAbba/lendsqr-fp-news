import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { MaterialIcons } from "@expo/vector-icons";
function DropDown(props) {
  const [pickerValue, setPickerValue] = useState();
  return (
    <Picker
      style={styles.container}
      selectedValue={pickerValue}
      onValueChange={(itemValue, itemIndex) => setPickerValue(itemValue)}
    >
      <Picker.Item label="pick option" value="first_dummy_item_value" />
      <Picker.Item label="first dummy item" value="first_dummy_item_value" />
      <Picker.Item label="second dummy item" value="second_dummy_item_value" />
      <Picker.Item label="third dummy item" value="third_dummy_item_value" />
    </Picker>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 20,
    height: "5%",
  },
});
export default DropDown;
