import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { globalStyles } from "../configs/GlobalStyle";
import RequestForm from "../components/RequestForm";
function RequestServiceScreen(props) {
  return (
    <View style={globalStyles.container}>
      <RequestForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
export default RequestServiceScreen;
