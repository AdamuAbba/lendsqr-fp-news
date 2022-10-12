import React, {useRef, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useState} from 'react';
import {View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {errorConfig, FPTime} from 'utils/constants';
import {useAppDispatch} from 'utils/hooks';
import {styles} from './GoogleSignInBtnWithLoader.style';
import {TouchableRipple, useTheme, Text, Colors} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import {setUser} from 'features/user';

const GoogleSignInBtnWithLoader = (): JSX.Element => {
  const {colors} = useTheme();
  const lottieRef = useRef<LottieView>(null);
  GoogleSignin.configure({
    webClientId:
      '442960332510-e81nk87s7lffi1aqqbhmkrdvredasn5l.apps.googleusercontent.com',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  //   const handleGoogleButton = async (): Promise<void> => {
  //     try {
  //       setIsLoading(true);
  //       //   // Get the users ID token
  //       const { idToken } = await GoogleSignin.signIn();
  //       // Create a Google credential with the token
  //       const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  //       // Sign-in the user with the credential
  //       await auth().signInWithCredential(googleCredential);
  //       //   const {
  //       //     displayName,
  //       //     email,
  //       //     emailVerified,
  //       //     isAnonymous,
  //       //     phoneNumber,
  //       //     photoURL,
  //       //     metadata,
  //       //     providerId,
  //       //     uid,
  //       //   } = authenticatedUser.user;
  //       //   const user: IUser = {
  //       //     displayName,
  //       //     email,
  //       //     emailVerified,
  //       //     isAnonymous,
  //       //     phoneNumber,
  //       //     photoURL,
  //       //     metadata,
  //       //     providerId,
  //       //     uid,
  //       //   };

  //       setIsLoading(false);
  //     } catch (error: any) {
  //       setIsLoading(false);
  //       console.log(error.message);
  //       showMessage({ ...errorConfig, message: error.message });
  //     }
  //   };
  const handleOnGoogleButtonPress = async () => {
    try {
      setIsLoading(true);
      lottieRef?.current?.play(90, 30);
      //   Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      setIsLoading(false);
      const authenticatedUser = await auth().signInWithCredential(
        googleCredential,
      );
      const {
        displayName,
        email,
        emailVerified,
        isAnonymous,
        metadata,
        phoneNumber,
        photoURL,
        providerId,
        uid,
      } = authenticatedUser.user;
      dispatch(
        setUser({
          displayName,
          email,
          emailVerified,
          isAnonymous,
          creationTime: FPTime(metadata.creationTime as string),
          lastSignInTime: FPTime(metadata.lastSignInTime as string),
          phoneNumber,
          photoURL,
          providerId,
          uid,
        }),
      );
      lottieRef?.current?.play(30, 79);
    } catch (error: any) {
      setIsLoading(false);
      lottieRef?.current?.play(30, 79);
      console.log(error.message);
      showMessage({...errorConfig, message: error.message});
    }
  };
  useEffect(() => {
    lottieRef?.current?.play(40, 79);
  }, []);

  return (
    <TouchableRipple
      disabled={isLoading}
      style={{
        ...styles.buttonTouchableView,
        backgroundColor: isLoading ? Colors.grey500 : Colors.white,
      }}
      rippleColor={colors.primary}
      onPress={handleOnGoogleButtonPress}>
      <View style={styles.innerButtonView}>
        <LottieView
          autoPlay={false}
          loop={false}
          ref={lottieRef}
          style={styles.googleLottieView}
          source={require('assets/images/google-icon.json')}
        />
        <Text
          style={{
            ...styles.buttonText,
            color: isLoading ? Colors.white : colors.surface,
          }}>
          sign in
        </Text>
      </View>
    </TouchableRipple>
  );
};

export default GoogleSignInBtnWithLoader;
