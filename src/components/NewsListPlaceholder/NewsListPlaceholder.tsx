import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from './NewsListPlaceholder.style';
import LottieView from 'lottie-react-native';

const NewsListPlaceholder = () => {
  return (
    <View style={styles.container} testID="main-view">
      <LottieView
        autoPlay={true}
        loop={true}
        style={styles.lottie}
        source={require('assets/images/loader.json')}
      />
    </View>
  );
};

export default NewsListPlaceholder;
