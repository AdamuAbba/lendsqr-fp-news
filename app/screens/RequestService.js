import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { globalStyles } from "../configs/GlobalStyle";
import RequestForm from "../components/RequestForm";
import RadishMotto from "../shared/RadishMotto";
function RequestServiceScreen(props) {
  return (
    <>
      <View style={globalStyles.container}>
        <View>
          <RadishMotto />
        </View>
        <ScrollView style={{ marginTop: 10 }}>
          <RequestForm />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default RequestServiceScreen;
