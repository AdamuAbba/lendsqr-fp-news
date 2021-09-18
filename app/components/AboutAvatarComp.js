import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { Avatar } from "react-native-elements";
import colors from "../configs/colors";

const AboutAvatarComp = () => {
  useEffect(() => {
    animationTrigger();
    return () => {
      null;
    };
  }, []);
  const avatarValue = useRef(new Animated.Value(0)).current;
  const firstTextValue = useRef(new Animated.Value(0)).current;
  const secondTextValue = useRef(new Animated.Value(0)).current;
  const thirdTextValue = useRef(new Animated.Value(0)).current;

  const animationTrigger = () => {
    Animated.stagger(500, [
      Animated.timing(avatarValue, {
        toValue: 100,
        duration: 1000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
      Animated.timing(firstTextValue, {
        toValue: 100,
        duration: 1000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
      Animated.timing(secondTextValue, {
        toValue: 100,
        duration: 1000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
      Animated.timing(thirdTextValue, {
        toValue: 100,
        duration: 1000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
    ]).start();
  };
  return (
    <>
      <Animated.View
        style={[
          styles.avatarView,
          {
            transform: [
              {
                translateY: avatarValue.interpolate({
                  inputRange: [0, 100],
                  outputRange: [-70, 0],
                }),
              },
            ],
          },
        ]}
      >
        <Avatar
          style={styles.avatar}
          size="xlarge"
          rounded
          raised
          source={require("../assets/images/hajiya.jpg")}
        />
      </Animated.View>
      <View style={styles.textView}>
        <Animated.Text
          style={[
            styles.text,
            {
              opacity: firstTextValue.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 1],
              }),
              transform: [
                {
                  translateX: firstTextValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [-100, 0],
                  }),
                },
              ],
            },
          ]}
        >
          RACHAEL GODIYA ADAMU
        </Animated.Text>
        <Animated.Text
          style={[
            styles.text,
            {
              opacity: secondTextValue.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 1],
              }),
              transform: [
                {
                  translateX: secondTextValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [100, 0],
                  }),
                },
              ],
            },
          ]}
        >
          C.E.O{" "}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.text,
            {
              opacity: thirdTextValue.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 1],
              }),
              transform: [
                {
                  translateX: thirdTextValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [-100, 0],
                  }),
                },
              ],
            },
          ]}
        >
          Rad-dish Nig ltd
        </Animated.Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  avatar: { flex: 1 },
  text: {
    color: colors.radWhite,
    fontFamily: "AbrilFatface-Regular",
    fontSize: 19,
  },
  textView: {
    alignItems: "center",
  },
  avatarView: { height: "50%", width: "50%" },
});

export default AboutAvatarComp;
