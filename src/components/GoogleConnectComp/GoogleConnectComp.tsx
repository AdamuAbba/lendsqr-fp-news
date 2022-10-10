import {useNavigation} from '@react-navigation/native';
import GoogleSignInBtnWithLoader from 'src/components/GoogleSignInBtnWithLoader';
import LottieView from 'lottie-react-native';
import {View} from 'react-native';
import {Button, Paragraph, Text, useTheme} from 'react-native-paper';
import {useAppDispatch} from 'src/utils/hooks';
import {styles} from './style';

const GoogleConnectComp = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();

  const handleSignUp = (): void => {
    navigation.navigate('sign-up-form-screen');
  };
  return (
    <View style={{...styles.container, backgroundColor: colors.primary}}>
      <Text style={{...styles.welcomeText}}>Step II</Text>
      <LottieView
        style={{height: 250, width: 250}}
        source={require('assets/images/floating_phone.json')}
        autoPlay={true}
        loop={true}
      />
      <Paragraph style={styles.paragraph}>
        connect your google account to complete the sign up process
      </Paragraph>
      <GoogleSignInBtnWithLoader />
      <Button
        color={colors.surface}
        icon="keyboard-return"
        mode="contained"
        onPress={handleSignUp}>
        go back
      </Button>
    </View>
  );
};

export default GoogleConnectComp;
