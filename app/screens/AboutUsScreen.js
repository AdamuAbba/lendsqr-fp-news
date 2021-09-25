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
import AboutRadishComp from "../components/AboutRadishComp";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const image =
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60";

const AboutUsScreen = ({ navigation }) => {
  return (
    <>
      <ParallaxScrollView
        contentBackgroundColor={colors.radWhite}
        parallaxHeaderHeight={500}
        fadeOutBackground
        renderBackground={() => (
          <ImageBackground
            style={styles.avatarBackground}
            source={{
              uri: image,
            }}
          >
            <AboutAvatarComp />
          </ImageBackground>
        )}
        stickyHeaderHeight={80}
        renderStickyHeader={() => <AboutHeader navigation={navigation} />}
        backgroundSpeed={2}
      >
        <AboutRadishComp />
      </ParallaxScrollView>
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
