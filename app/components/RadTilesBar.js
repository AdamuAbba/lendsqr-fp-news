import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Tile, Text, Icon } from "react-native-elements";
import colors from "../configs/colors";
const tileImage =
  "https://images.unsplash.com/photo-1558818498-28c1e002b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";

const featuredImage =
  "https://www.africaglobalradio.com/wp-content/uploads/2020/05/food4.jpg";

const contactImage =
  "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80";
const RadTilesBar = () => {
  return (
    <>
      <View style={styles.container}>
        <Tile
          imageSrc={{ uri: tileImage }}
          title="Lorem ipsum dolor sit amet, consectetur"
          titleStyle={styles.title}
          contentContainerStyle={styles.tileContainer}
          containerStyle={styles.theTileStyle}
          imageContainerStyle={styles.introTileImage}
        >
          <Text style={styles.title}>some Text</Text>
        </Tile>

        <Tile
          imageSrc={{
            uri: featuredImage,
          }}
          title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
          featured
          caption="test Caption"
          captionStyle={{ fontFamily: "AbrilFatface-Regular" }}
          containerStyle={styles.featuredTileContainer}
        />

        <Tile
          imageSrc={{
            uri: contactImage,
          }}
          title="contact us"
          featured
          icon={{
            name: "arrow-circle-right",
            type: "font-awesome",
            size: 40,
            color: colors.radGreen,
          }}
          caption="test Caption"
          captionStyle={{ fontFamily: "AbrilFatface-Regular" }}
          containerStyle={styles.contactContainer}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 170,
  },
  title: {
    fontFamily: "AbrilFatface-Regular",
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
    backgroundColor: colors.radOrange,
    borderBottomRightRadius: 50,
    marginBottom: 10,
  },
  featuredTileContainer: {
    flex: 1,
    marginBottom: 4,
  },
  theTileStyle: {
    width: "95%",
    alignSelf: "center",
    elevation: 7,
  },

  introTileImage: {
    borderTopLeftRadius: 50,
  },

  contactContainer: {
    flex: 1,
    marginBottom: 7,
    width: "100%",
    alignSelf: "center",
  },
});
export default RadTilesBar;
