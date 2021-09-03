import { StyleSheet } from "react-native";
import colors from "./colors";
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  globalTitleFont: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#000",
    letterSpacing: 3,
  },
  buttonConfig: {
    backgroundColor: colors.radGreen,
  },
  button: {
    width: "50%",
    alignSelf: "center",
    borderRadius: 20,
    elevation: 7,
  },
  input: {
    borderColor: colors.radOrange,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "#cbced4",
    elevation: 6,
  },
  label: {
    color: "#000000",
  },
  dividerIcon: {
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
    elevation: 5,
  },
  bannerTextView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
