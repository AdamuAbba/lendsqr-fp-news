import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
function Form(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/*form header */}
        <Text style={styles.headerText}>form sample</Text>
      </View>

      <View style={styles.mainContent}>
        <TextInput placeholder="radish sammy" style={styles.input} />

        <TextInput placeholder="abc@gmail.com" style={styles.input} />

        <TextInput placeholder="+234..." style={styles.input} />

        <TextInput placeholder="e.g. old town road" style={styles.input} />

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.buttonText}>submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    width: 150,
  },

  mainContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  submitButton: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fc5c65",
    width: "100%",
    borderRadius: 20,
  },
  header: {
    padding: 20,
  },
  headerText: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 25,
  },
  buttonText: {
    color: "#000",
    fontSize: 20,
  },
});
