import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import Banner from "./../components/Banner";
import FormModal from "../components/FormModal";
import { globalStyles } from "../configs/GlobalStyle";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Banner
            firstCaption="dummy Text"
            description=" some description"
            bannerImage={{
              uri: "https://i.pinimg.com/564x/c7/dd/ac/c7ddac4d132b59ec59bbd0a81acbacfb.jpg",
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Banner
            firstCaption="dummy Text"
            description=" some description"
            buttonTitle="proceed.."
            bannerImage={require("./../assets/soup.jpg")}
          />
        </View>
        <View style={{ flex: 1, marginBottom: 1 }}>
          <Banner
            firstCaption="dummy Text"
            description=" some description"
            buttonTitle="contact us"
            bannerImage={require("./../assets/ofadaSauce.jpg")}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
