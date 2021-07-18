import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Tile, Text } from "react-native-elements";
import colors from "../configs/colors";
const tileImage =
  "https://www.localguidesconnect.com/t5/image/serverpage/image-id/466203i59D138816E0430B8/image-size/large?v=v2&px=999";

const featuredImage =
  "https://www.africaglobalradio.com/wp-content/uploads/2020/05/food4.jpg";
const RadTilesBar = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={{ marginBottom: 5 }}>
          <Tile
            imageSrc={{ uri: tileImage }}
            title="Lorem ipsum dolor sit amet, consectetur"
            contentContainerStyle={styles.tileContainer}
            containerStyle={styles.theTileStyle}
          >
            <Text>some Text</Text>
          </Tile>
        </View>

        <View style={{}}>
          <Tile
            imageSrc={{
              uri: featuredImage,
            }}
            title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
            featured
            caption="test Caption"
            containerStyle={styles.featuredTileContainer}
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tileContainer: {
    flex: 1,
    backgroundColor: colors.radRed,
  },
  featuredTileContainer: {
    flex: 1,
  },
  theTileStyle: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
export default RadTilesBar;
