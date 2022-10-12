import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import * as Analytics from 'expo-firebase-analytics';
import React, {useEffect, useRef} from 'react';
import AuthStack from 'routes/AuthStack';
import MainStack from 'routes/MainStack';
import {IAuthCheckStackParamsList} from 'routes/types';
import {
  selectIsLoggedIn,
  setFcmPayload,
  setIsFCM,
  setIsLoggedIn,
  setShowFPDialog,
  setUser,
} from 'src/features/user';
import {FPTime} from 'utils/constants';
import {useAppDispatch, useAppSelector} from 'utils/hooks';

const Stack = createStackNavigator<IAuthCheckStackParamsList>();
const {Screen, Navigator} = Stack;

const AuthCheckStack = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();

  const _onReady = (): void => {
    routeNameRef.current = navigationRef.getCurrentRoute().name;
  };

  const _onStateChange = async () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.getCurrentRoute().name;

    if (previousRouteName !== currentRouteName) {
      await Analytics.logEvent('screen_view', {currentRouteName});
    }

    // Save the current route name for later comparison
    routeNameRef.current = currentRouteName;
  };

  /**
   *
   * A listener function which triggers when auth state changed
   * @return void
   */
  const OnAuthStateChanged = async (user: FirebaseAuthTypes.User | null) => {
    try {
      if (user) {
        dispatch(setIsLoggedIn(true));
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
        } = user;
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
      } else {
        dispatch(setIsLoggedIn(false));
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(OnAuthStateChanged);
    // Register FCM foreground handler
    const messageSubscriber = messaging().onMessage(
      async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
        dispatch(setIsFCM(true));
        dispatch(setShowFPDialog(true));
        dispatch(
          setFcmPayload({
            title: remoteMessage?.notification?.title,
            body: remoteMessage?.notification?.body,
          }),
        );
      },
    );
    // Register FCM background handler
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
    return () => {
      // FCM
      subscriber;
      messageSubscriber;
    };
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={_onReady}
      onStateChange={_onStateChange}>
      <Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        {isLoggedIn ? (
          <Screen
            name="main-stack"
            component={MainStack}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="auth-stack"
            component={AuthStack}
            options={{headerShown: false}}
          />
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default AuthCheckStack;
