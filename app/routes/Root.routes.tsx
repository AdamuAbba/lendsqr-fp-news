import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserAuthStack from './Auth.routes';
import AppDrawerNav from './AppDrawer.routes';

import { IRootStackParamsList } from 'configs/types';
import { auth } from 'configs/firebase/fireBaseConfig';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { selectIsLoggedIn, setIsLoggedIn } from 'features/user';
import colors from 'configs/colors';
import SummaryScreen from 'screens/common/SummaryScreen';
import AuthCheckScreen from 'screens/common/AuthCheckScreen';

const Stack = createStackNavigator<IRootStackParamsList>();
const RootRoute = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const authCheck = async (): Promise<void> => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setIsLoggedIn(true));
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  };
  useEffect(() => {
    authCheck();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ cardStyle: { backgroundColor: colors.radBlack } }}
      >
        {isLoading ? (
          <Stack.Screen
            name="auth-check-screen"
            component={AuthCheckScreen}
            options={{ headerShown: false }}
          />
        ) : isLoggedIn ? (
          <>
            <Stack.Screen
              name="app-drawer-route"
              component={AppDrawerNav}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="summary-screen"
              component={SummaryScreen}
              options={{ headerShown: true, title: 'Confirm Order' }}
            />
          </>
        ) : !isLoggedIn ? (
          <Stack.Screen
            name="user-auth-route"
            component={UserAuthStack}
            options={{ headerShown: false }}
          />
        ) : null}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootRoute;
