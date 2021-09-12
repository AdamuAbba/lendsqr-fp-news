import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Animated,
  ImageBackground,
  Easing,
  Image,
} from "react-native";
import colors from "../configs/colors";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import AboutHeader from "../components/AboutHeader";
import AboutAvatarComp from "../components/AboutAvatarComp";
import { Colors } from "react-native/Libraries/NewAppScreen";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const image =
  "https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80";

const AboutUsScreen = ({ navigation }) => {
  return (
    <>
      <ParallaxScrollView
        contentBackgroundColor={colors.radWhite}
        parallaxHeaderHeight={400}
        fadeOutBackground
        renderBackground={() => (
          <ImageBackground
            style={styles.avatarBackground}
            source={{
              uri: "https://images.unsplash.com/photo-1458644267420-66bc8a5f21e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1193&q=80",
            }}
          >
            <AboutAvatarComp />
          </ImageBackground>
        )}
        stickyHeaderHeight={80}
        renderStickyHeader={() => <AboutHeader navigation={navigation} />}
        backgroundSpeed={2}
        headerBackgroundColor="pink"
        renderForeground={() => (
          <View style={{ height: 500 }}>
            <Text styles={{ color: "#000" }}>Scroll me</Text>
          </View>
        )}
      ></ParallaxScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  imageStyle: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  avatarBackground: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
  },
});
export default AboutUsScreen;
