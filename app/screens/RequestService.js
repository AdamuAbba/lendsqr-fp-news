import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  ScrollView,
} from "react-native";
import { globalStyles } from "../configs/GlobalStyle";
import RequestForm from "../components/RequestForm";
import RadishMotto from "../shared/RadishMotto";
import colors from "../configs/colors";
function RequestServiceScreen(props) {
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View>
            <RadishMotto />
          </View>
          <View style={{ flex: 1 }}>
            <RequestForm />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.radOrange,
  },
});
export default RequestServiceScreen;
