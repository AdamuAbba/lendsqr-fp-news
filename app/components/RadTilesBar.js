import React from "react";
import { View, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { Tile, Text, Icon, Card, Button } from "react-native-elements";
import colors from "../configs/colors";
import LottieView from "lottie-react-native";
import { globalStyles } from "../configs/GlobalStyle";
const firstTileImage =
  "https://images.unsplash.com/photo-1558818498-28c1e002b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";

const secondTileImage =
  "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60";

const featuredImage =
  "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";

const cardImage =
  "https://images.unsplash.com/photo-1594063354900-8784ad8f9d5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";

const secondFeaturedImage =
  "https://images.unsplash.com/photo-1578160112054-954a67602b88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80";
const RadTilesBar = () => {
  return (
    <>
      <ScrollView scrollEnabled={true} contentContainerStyle={styles.container}>
        <Tile
          touchSoundDisabled
          activeOpacity={1}
          imageSrc={{ uri: firstTileImage }}
          title="Fresh ingredients"
          titleStyle={{
            ...globalStyles.textWithShadow,
            color: colors.radWhite,
          }}
          contentContainerStyle={{
            ...globalStyles.containerShadow,
            ...styles.tileContainer,
          }}
          containerStyle={{ ...styles.theTileStyle }}
          imageContainerStyle={{ ...styles.introTileImage }}
        >
          <Text
            style={{
              flex: 1,
              ...globalStyles.textWithShadow,
              color: colors.radWhite,
              fontSize: 13,
            }}
          >
            "Eat less from the box, more from the earth" Rad-dish caterers use
            fresh farm produce from the market to cook for you
          </Text>
        </Tile>

        <Tile
          touchSoundDisabled
          activeOpacity={1}
          title="Eating is an Adventure"
          titleStyle={{
            color: colors.radWhite,
            ...globalStyles.textWithShadow,
          }}
          imageSrc={{ uri: secondTileImage }}
          contentContainerStyle={{
            ...globalStyles.containerShadow,
            ...styles.tileContainer,
            backgroundColor: "#9f694f",
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 50,
          }}
          containerStyle={{
            ...styles.theTileStyle,
            alignSelf: "flex-end",
            marginRight: 10,
            marginLeft: 0,
          }}
          imageContainerStyle={{
            ...styles.introTileImage,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 50,
          }}
        >
          <Text
            style={{
              ...globalStyles.textWithShadow,
              color: colors.radWhite,
            }}
          >
            "I am not a glutton. I am an explorer of food." – Erma Bombeck R
          </Text>
        </Tile>

        <ImageBackground
          style={{
            height: 250,
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
          }}
          resizeMode="cover"
          source={{ uri: featuredImage }}
        >
          <Text
            style={{
              flex: 3,
              paddingLeft: 5,
              fontSize: 16,
              ...globalStyles.textWithShadow,
              color: colors.radWhite,
            }}
          >
            "There is no love sincerer than the love of food".{"\n"}George
            Bernard Shaw
          </Text>
          <LottieView
            style={{ ...styles.lottieStyle }}
            autoPlay
            source={require("../assets/images/loveFood.json")}
          />
        </ImageBackground>

        <Tile
          touchSoundDisabled
          activeOpacity={1}
          imageSrc={{
            uri: secondFeaturedImage,
          }}
          featured
          caption="'An empty stomach is the Devil's playground, we know this so let's fill your stomach for you with really good delicious food'"
          captionStyle={{ ...globalStyles.textWithShadow }}
          containerStyle={styles.contactContainer}
        />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lottieStyle: {
    height: 110,
    alignSelf: "flex-end",
  },
  title: {
    fontFamily: "AbrilFatface-Regular",
    color: colors.radWhite,
  },
  contactUsTile: {
    flex: 1,
    marginTop: 7,
    marginBottom: 7,
    width: "95%",
    alignItems: "center",
  },
  tileContainer: {
    flex: 1,
    backgroundColor: "#fe8150",
    borderBottomRightRadius: 50,
    marginBottom: 10,
  },
  featuredTileContainer: {
    flex: 1,
    marginBottom: 4,
  },
  theTileStyle: {
    flex: 1,
    width: "70%",
    height: "20%",
    marginLeft: 10,
    marginBottom: 20,
  },

  introTileImage: {
    borderTopLeftRadius: 50,
    height: 250,
  },

  contactContainer: {
    flex: 1,
    marginBottom: 7,
    width: "100%",
    alignSelf: "center",
  },
});
export default RadTilesBar;
