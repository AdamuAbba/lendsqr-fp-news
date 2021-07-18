import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import { Text, Button } from "react-native-elements";
import Banner from "./../components/Banner";
import FormModal from "../components/FormModal";
import { globalStyles } from "../configs/GlobalStyle";
import AnimatedImageSlider from "rn-animated-image-carousel";
import colors from "../configs/colors";
import RadTilesBar from "../components/RadTilesBar";
import firebase from "../configs/firebase/fireBaseConfig";
const images = [
  "https://i.pinimg.com/564x/c7/dd/ac/c7ddac4d132b59ec59bbd0a81acbacfb.jpg",
  "https://media.istockphoto.com/photos/regional-african-food-picture-id1169415720?k=6&m=1169415720&s=612x612&w=0&h=qYzDru_krKMBM4_58eW4m-cdkIxU7a1YS-V32poO8BQ=",
  "https://finmail-site-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/04/16155329/44-1.jpg",
  "https://thumbs.dreamstime.com/b/nigerian-food-delicious-eba-background-p-background-dining-concept-n-white-bowl-rich-vegetables-lunch-185024416.jpg",
  "https://thumbs.dreamstime.com/b/nigerian-food-delicious-fried-plantain-red-chilli-sauce-table-lunch-tasty-african-cuisine-nigerian-food-delicious-185024971.jpg",
];

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    userLogCheck();
  });
  const [signedInUser, setSignedInUser] = useState("");

  const dbRef = firebase.database().ref("Users/");

  function userLogCheck() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setSignedInUser(user);
      } else {
        setSignedInUser("");
      }
    });
  }
  // const addToDb = async () => {
  //   await dbRef.push({ name: "abba" });
  // };
  const getFromDb = () => {
    firebase
      .database()
      .ref("Users/")
      .on("value", (snapshot) => {
        const name = snapshot.val().abba;
        console.log(name);
      });
  };

  const addToDb = () => {
    dbRef.child(signedInUser.uid).push({ name: "abba", age: 23 });
  };
  return (
    <>
      <ScrollView scrollEnabled={true}>
        <View style={styles.headerView}>
          <Text style={[globalStyles.globalTitleFont]}>food & more</Text>
          <Text h5 style={{ fontStyle: "italic" }}>
            and more what?...join us and find out
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <AnimatedImageSlider
            activeDotColor={colors.radOrange}
            imageBorderRadius={10}
            imageContainerStyle={styles.imageStyle}
            imageHeight={250}
            data={images}
          />
        </View>
        <View style={styles.radTilesBarView}>
          <RadTilesBar />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  radTilesBarView: {
    flex: 1,
    marginTop: 20,
  },
  headerView: {
    alignSelf: "flex-end",
    marginRight: 8,
    marginTop: 3,
  },
  imageStyle: {},
});

export default HomeScreen;
