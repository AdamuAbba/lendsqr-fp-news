import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";

const someData = [
  { title: "first Title", body: "random text for first body", key: "1" },
  { title: "first Title", body: "random text for first body", key: "2" },
  { title: "first Title", body: "random text for first body", key: "3" },
];

const AboutRadishComp = () => {
  return (
    <>
      <FlatList
        data={someData}
        keyExtractor={(item) => item.key}
        renderItem={({ eachData }) => {
          <View>
            <Text>{eachData.title}</Text>
            <Text>{eachData.body}</Text>
          </View>;
        }}
      />
    </>
  );
};

export default AboutRadishComp;
