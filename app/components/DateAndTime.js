import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Icon } from "react-native-elements";
import { globalStyles } from "../configs/GlobalStyle";
import colors from "../configs/colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

const DateAndTime = () => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("");

  const dateSelected = moment(date).format("MMMM Do, YYYY");
  const timeSelected = moment(date).format("h:mm a");

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
  const showDatePicker = () => {
    showMode("date");
  };

  {
    /* //* this method displays the Time Picker*/
  }
  const showTimePicker = () => {
    showMode("time");
  };

  return (
    <>
      <View>
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
        {/* //* Date input component to trigger the Date Picker UI*/}

        <View style={styles.mainContainer}>
          <Icon
            name="today"
            type="material"
            size={23}
            style={styles.iconStyle}
            color={colors.radOrange}
          />
          <TouchableOpacity
            style={{ ...globalStyles.input, flex: 1 }}
            onPress={() => showDatePicker()}
          >
            <Text
              style={{
                ...globalStyles.textWithShadow,
                ...styles.text,
              }}
            >
              {dateSelected}
            </Text>
          </TouchableOpacity>
        </View>

        {/* //* Time input component to trigger render of Time Picker UI*/}

        <View style={{ ...styles.mainContainer, marginTop: 10 }}>
          <Icon
            name="watch"
            type="material"
            size={23}
            style={styles.iconStyle}
            color={colors.radOrange}
          />
          <TouchableOpacity
            style={{ ...globalStyles.input, flex: 1 }}
            onPress={() => showTimePicker()}
          >
            <Text
              style={{
                ...globalStyles.textWithShadow,
                ...styles.text,
              }}
            >
              {timeSelected}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  iconStyle: {
    marginRight: 10,
  },
  text: {
    textAlign: "left",
    textAlignVertical: "center",
    textShadowRadius: 0,
    height: 33,
  },
});
export default DateAndTime;
