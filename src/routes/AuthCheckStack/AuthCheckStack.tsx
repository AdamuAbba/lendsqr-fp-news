import React, {useCallback} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {selectIsLoggedIn, setIsLoggedIn, setUser} from 'src/features/user';
import {useEffect} from 'react';
import AuthStack from 'routes/AuthStack';
import MainStack from 'routes/MainStack';
import {IAuthCheckStackParamsList} from 'routes/types';
import {useAppDispatch, useAppSelector} from 'utils/hooks';
import {useTheme} from 'react-native-paper';

const Stack = createStackNavigator<IAuthCheckStackParamsList>();
const {Screen, Navigator} = Stack;

const AuthCheckStack = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const {colors} = useTheme();
  /**
   *
   * A listener function which triggers when auth state changed
   * @return void
   */

  const OnAuthStateChanged = useCallback(
    (user: FirebaseAuthTypes.User | null) => {
      (async () => {
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
              metadata: {
                creationTime: metadata.creationTime?.toString(),
                lastSignInTime: metadata.lastSignInTime?.toString(),
              },
              phoneNumber,
              photoURL,
              providerId,
              uid,
            }),
          );
          console.log('you are logged in');
        } else {
          dispatch(setIsLoggedIn(false));
          console.log('you are not logged in');
        }
      })();
    },
    [dispatch],
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(OnAuthStateChanged);
    return subscriber;
  }, [OnAuthStateChanged]);

  return (
    <NavigationContainer>
      <Navigator screenOptions={{cardStyle: {backgroundColor: colors.primary}}}>
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
