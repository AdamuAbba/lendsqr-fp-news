import React from "react";
import { View, Text, StyleSheet, Animated, Dimensions } from "react-native";
import { Avatar } from "react-native-elements";
import colors from "../configs/colors";
import LottieView from "lottie-react-native";
import { globalStyles } from "../configs/GlobalStyle";
import { View as MotiView, Text as MotiText } from "moti";

const { width } = Dimensions.get("window");

const hajiyaInfo = [
  { info: "Rachael Godiya Adamu", id: "1", delay: 250 },
  { info: "C.E.O", id: "2", delay: 600 },
  { info: "Rad-Dish Nig L.T.D", id: "3", delay: 750 },
];

const AboutAvatarComp = () => {
  return (
    <>
      <View style={styles.containerView}>
        <View style={{ flex: 1, marginTop: 50 }}>
          {/* avatar view */}
          <MotiView>
            <Avatar
              size="xlarge"
              rounded
              raised
              source={require("../assets/images/hajiya.jpg")}
              containerStyle={{ height: 250, width: 250 }}
            />
          </MotiView>

          {/* info view */}
          <View>
            {hajiyaInfo.map((item) => (
              <MotiText
                key={item.id}
                from={{ transform: [{ scaleX: 0 }, { rotateY: "180deg" }] }}
                transition={{
                  duration: 3000,
                  delay: item.delay,
                  type: "spring",
                }}
                animate={{ transform: [{ scaleX: 1 }, { rotateY: "0deg" }] }}
                style={{
                  ...globalStyles.textWithShadow,
                  color: colors.radWhite,
                  fontSize: 20,
                }}
              >
                {item.info}
              </MotiText>
            ))}
          </View>
        </View>

        <LottieView
          autoPlay
          style={{ height: 70 }}
          source={require("../assets/images/arrowUp.json")}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    width,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  avatarView: { height: "50%", width: "50%" },
});

export default AboutAvatarComp;
