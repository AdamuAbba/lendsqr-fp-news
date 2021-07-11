import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View, Button, Text } from "react-native";

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
        <Text style={{ alignSelf: "flex-end", fontSize: 30 }}>
          under construction
        </Text>
        <View>
          {/* //* Button to trigger the Date Picker UI*/}
          <Button onPress={showDatepicker} title="Show date picker!" />
        </View>
        <View>
          {/* //* Button to trigger the Time Picker UI*/}
          <Button onPress={showTimepicker} title="Show time picker!" />
        </View>
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

export default DateAndTime;
