import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
function AboutUsScreen(props) {
  return (
    <ScrollView scrollEnabled={true}>
      <View style={{ height: 70, backgroundColor: "blue" }}></View>
      <View style={{ height: 70, backgroundColor: "blue" }}></View>
      <View style={{ height: 70, backgroundColor: "blue" }}></View>
      <View style={{ height: 70, backgroundColor: "blue" }}></View>
      <View style={{ height: 70, backgroundColor: "blue" }}></View>
      <View style={{ height: 70, backgroundColor: "blue" }}></View>
      <View style={{ height: 70, backgroundColor: "blue" }}></View>
      <View style={{ height: 70, backgroundColor: "blue" }}></View>
      <View style={{ height: 70, backgroundColor: "blue" }}></View>
      <View style={{ height: 70, backgroundColor: "blue" }}></View>
      <View style={{ height: 70, backgroundColor: "blue" }}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
});
export default AboutUsScreen;
