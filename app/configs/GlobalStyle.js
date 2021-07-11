import { StyleSheet } from "react-native";
import colors from "./colors";
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#e8e9eb",
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
});
