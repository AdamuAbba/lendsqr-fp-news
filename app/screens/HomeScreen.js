import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { Text, Button, Icon } from "react-native-elements";
import Banner from "./../components/Banner";
import FormModal from "../components/FormModal";
import AnimatedImageSlider from "rn-animated-image-carousel";
import colors from "../configs/colors";
import RadTilesBar from "../components/RadTilesBar";
import RadishMotto from "../shared/RadishMotto";

const images = [
  "https://media.istockphoto.com/photos/regional-african-food-picture-id1169415720?k=6&m=1169415720&s=612x612&w=0&h=qYzDru_krKMBM4_58eW4m-cdkIxU7a1YS-V32poO8BQ=",
  "https://finmail-site-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/04/16155329/44-1.jpg",
  "https://thumbs.dreamstime.com/b/nigerian-food-delicious-eba-background-p-background-dining-concept-n-white-bowl-rich-vegetables-lunch-185024416.jpg",
  "https://thumbs.dreamstime.com/b/nigerian-food-delicious-fried-plantain-red-chilli-sauce-table-lunch-tasty-african-cuisine-nigerian-food-delicious-185024971.jpg",
];

const backgroundImg =
  "https://images.unsplash.com/photo-1534766438357-2b270dbd1b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <RadishMotto />
      <ImageBackground style={styles.image} source={{ uri: backgroundImg }}>
        <ScrollView scrollEnabled={true}>
          <View style={{ flex: 1 }}>
            <AnimatedImageSlider
              inActiveDotColor="red"
              activeDotColor={colors.radOrange}
              imageBorderRadius={10}
              imageContainerStyle={styles.imageStyle}
              imageHeight={250}
              imageWidth={350}
              data={images}
            />
          </View>
          <View style={styles.radTilesBarView}>
            <RadTilesBar />
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
  container: {
    backgroundColor: "#969696",
  },
  radTilesBarView: {
    flex: 1,
    marginTop: 20,
  },
});

export default HomeScreen;
