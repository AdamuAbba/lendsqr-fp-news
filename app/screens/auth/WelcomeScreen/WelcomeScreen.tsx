import colors from 'configs/colors';
import { IWelcomeScreen } from 'configs/types';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import { Text as MotiText, View as MotiView } from 'moti';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { Button } from 'react-native-paper';
import { styles } from './style';

const WelcomeScreen = ({ navigation }: IWelcomeScreen): JSX.Element => {
  return (
    <MotiView
      from={{ rotateY: '90deg', opacity: 0 }}
      transition={{ type: 'spring', duration: 1000 }}
      animate={{ rotateY: '0deg', opacity: 1 }}
      style={styles.container}
    >
      <StatusBar />
      <View style={styles.firstView}>
        <MotiView
          transition={{ type: 'spring', duration: 500 }}
          from={{ translateX: -100, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          style={{ flexDirection: 'row' }}
        >
          <Text style={[styles.welcomeTitle]}>Food </Text>
          <Text style={{ ...styles.welcomeTitle, color: colors.radGreen }}>
            &{' '}
          </Text>
          <Text style={[styles.welcomeTitle]}>More...</Text>
        </MotiView>

        <MotiView
          style={{ flexDirection: 'row' }}
          transition={{ type: 'spring', duration: 500, delay: 500 }}
          from={{ translateX: -100, opacity: 0 }}
          animate={{ translateX: 20, opacity: 1 }}
        >
          <Text style={styles.greeting}>Welc</Text>

          <MotiView
            from={{ translateY: -100, opacity: 0 }}
            animate={{ translateY: 14, opacity: 1 }}
            transition={{ type: 'spring', duration: 1000, delay: 3000 }}
          >
            <LottieView
              style={{ height: 35, alignSelf: 'center' }}
              source={require('assets/images/finalBoilingPot.json')}
              autoPlay
            />
          </MotiView>
          <Text style={styles.greeting}>me</Text>
        </MotiView>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <MotiView
          from={{ translateY: -100, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 1000, delay: 1000 }}
        >
          <LottieView
            style={styles.lottieStyle}
            source={require('assets/images/aGirlHasNoface.json')}
            autoPlay
          />
        </MotiView>
        <View style={styles.welcomeTextBottom}>
          <MotiText
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'timing', duration: 1000, delay: 2000 }}
            style={{
              ...styles.welcomeText,
            }}
          >
            want to eat but don't have the time to cook?, let us cook your next
            meal for you
          </MotiText>
          <MotiText
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'timing', duration: 1000, delay: 3000 }}
            style={{ ...styles.welcomeText, color: colors.radRed }}
          >
            "you go lick hand taya"
          </MotiText>
        </View>
        <View style={styles.buttonView}>
          <MotiView
            style={styles.registerButton}
            from={{
              transform: [{ translateX: -100 }, { rotateY: '180deg' }],
              opacity: 0,
            }}
            animate={{
              transform: [{ translateX: 0 }, { rotateY: '360deg' }],
              opacity: 1,
            }}
            transition={{ type: 'timing', duration: 500, delay: 1000 }}
          >
            <Button
              labelStyle={{ color: 'white' }}
              mode="contained"
              onPress={() => navigation.navigate('register-screen')}
            >
              Register
            </Button>
          </MotiView>

          <MotiView
            from={{
              transform: [{ translateY: 100 }, { rotateX: '180deg' }],
              opacity: 0,
            }}
            animate={{
              transform: [{ translateY: 0 }, { rotateX: '360deg' }],
              opacity: 1,
            }}
            transition={{ type: 'spring', duration: 500, delay: 1500 }}
          >
            <Button
              labelStyle={{ color: 'white' }}
              mode="contained"
              onPress={() => navigation.navigate('login-screen')}
            >
              Login
            </Button>
          </MotiView>
        </View>
      </View>
    </MotiView>
  );
};

export default WelcomeScreen;
