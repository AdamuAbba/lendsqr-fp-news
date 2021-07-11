import React from "react";
import { View, Text, StyleSheet } from "react-native";
function AboutUsScreen(props) {
  return (
    <View style={styles.container}>
      <View>
        <Text>About us</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AboutUsScreen;
