import { IRegisterScreen } from 'configs/types';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import { Text as MotiText, View as MotiView } from 'moti';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignUpForm from 'components/SignUpForm/SignUpForm';
import { globalStyles } from 'configs/GlobalStyle';
import { styles } from './style';

const RegisterScreen = ({ navigation }: IRegisterScreen): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <MotiView
        from={{ rotateY: '90deg', opacity: 0 }}
        transition={{ type: 'spring', duration: 1000 }}
        animate={{ rotateY: '0deg', opacity: 1 }}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <MotiView style={{ flex: 2 }}>
            <LottieView
              autoPlay
              source={require('assets/images/register.json')}
            />
          </MotiView>

          <MotiView style={{ flex: 1, justifyContent: 'center' }}>
            <MotiText
              from={{ scale: 0 }}
              transition={{ type: 'spring', delay: 750, duration: 1000 }}
              animate={{ scale: 1 }}
              style={{
                ...globalStyles.textWithShadow,
                alignSelf: 'center',

                paddingRight: 10,
              }}
            >
              Rad-Dish is glad to have you, we appreciate you and your appetite
            </MotiText>
          </MotiView>
        </View>

        <MotiView
          from={{ translateX: 100, opacity: 0 }}
          transition={{ type: 'spring', delay: 500, duration: 1000 }}
          animate={{ translateX: 0, opacity: 1 }}
          style={{ flex: 1 }}
        >
          <SignUpForm />
        </MotiView>
      </MotiView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
