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
import RequestBanner from "../components/RequestBanner";
import { StatusBar } from "expo-status-bar";
import { View as MotiView } from "moti";
function RequestServiceScreen(props) {
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <StatusBar />
          <RadishMotto />
          <RequestBanner />
          <MotiView
            from={{ translateX: 500 }}
            transition={{ type: "spring", duration: 1000 }}
            animate={{ translateX: 0 }}
            style={{ flex: 1 }}
          >
            <RequestForm />
          </MotiView>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.radWhite,
  },
});
export default RequestServiceScreen;
