import React from 'react';
import { Button, Icon } from 'react-native-elements';
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  ScrollView,
} from 'react-native';
import { globalStyles } from '../configs/GlobalStyle';
import RadDishLogo from '../components/RadDishLogo';
import LottieView from 'lottie-react-native';
import colors from '../configs/colors';

const RadishMotto = () => {
  return (
    <>
      <View style={{ backgroundColor: '#1f1f1f', height: 110 }}>
        <View style={[styles.container]}>
          <View style={styles.mainView}>
            <View style={styles.firstView}>
              <LottieView
                style={styles.lottieStyle}
                autoPlay
                source={require('assets/loadingFood.json')}
              />
              <Text style={[globalStyles.globalTitleFont, { color: 'white' }]}>
                food & more
              </Text>
            </View>

            <View style={{ height: 20 }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'AbrilFatface-Regular',
                }}
              >
                and more what?...join us and find out
              </Text>
            </View>

            <View style={styles.logo}>
              <RadDishLogo />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 100,
  },
  mainView: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  firstView: {
    height: 40,
    flexDirection: 'row',
  },
  logo: {
    flex: 1,
    marginTop: 10,
  },
  lottieStyle: {
    position: 'relative',
    height: 60,
    bottom: 10,
  },
});
export default RadishMotto;
