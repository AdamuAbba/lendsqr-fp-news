import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import {Button, Paragraph, Text, useTheme} from 'react-native-paper';
import {styles} from './style';
import LottieView from 'lottie-react-native';
import GoogleSignInBtnWithLoader from 'components/GoogleSignInBtnWithLoader';

const LoginScreen = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();

  const handleSignUp = (): void => {
    navigation.navigate('sign-up-form-screen');
  };
  return (
    <View style={{...styles.container, backgroundColor: colors.primary}}>
      <Text style={styles.welcomeText}>Welcome back</Text>
      <LottieView
        style={{height: 250, width: 250}}
        source={require('assets/images/easy_login.json')}
        autoPlay={true}
        loop={true}
      />
      <Paragraph style={styles.paragraph}>
        login with ease using google we've got 'Hot Headlines for you'
      </Paragraph>
      <GoogleSignInBtnWithLoader />
      <Button
        color={colors.surface}
        icon="keyboard-return"
        mode="contained"
        onPress={handleSignUp}>
        sign up
      </Button>
    </View>
  );
};

export default LoginScreen;
