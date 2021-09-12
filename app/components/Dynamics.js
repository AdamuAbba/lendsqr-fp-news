import React from "react";
import { View, Text, Animated, Easing, useRef } from "react-native";

export const initialValue = useRef(new Animated.Value(0)).current;
export const animationTrigger = () => {
  Animated.timing(initialValue, {
    toValue: 100,
    duration: 1000,
    easing: Easing.bounce,
    useNativeDriver: true,
  }).start();
};
