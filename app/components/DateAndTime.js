import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View, Text, StyleSheet } from "react-native";
import { Button, Chip } from "react-native-elements";
import { globalStyles } from "../configs/GlobalStyle";
import colors from "../configs/colors";
import { LinearGradient } from "expo-linear-gradient";

const DateAndTime = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  {
    /* //? what's the purpose of this function? */
  }
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  {
    /*//! don't know what is going on here*/
  }
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  {
    /* //* this method displays the Date Picker*/
  }
  const showDatepicker = () => {
    showMode("date");
  };

  {
    /* //* this method displays the Time Picker*/
  }
  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <>
      <View>
        {/* //* Button to trigger the Date Picker UI*/}
        <Chip
          onPress={showDatepicker}
          title="Date"
          raised={true}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: [colors.radOrange, "red"],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }}
          containerStyle={[styles.container, { alignSelf: "flex-end" }]}
        />

        {/* //* Button to trigger the Time Picker UI*/}
        <Chip
          onPress={showTimepicker}
          title="Time"
          raised={true}
          ViewComponent={LinearGradient}
          containerStyle={styles.container}
          linearGradientProps={{
            colors: [colors.radOrange, "red"],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }}
        />

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "70%",
    marginBottom: 8,
    marginHorizontal: 8,
    borderRadius: 18,
  },
});
export default DateAndTime;
