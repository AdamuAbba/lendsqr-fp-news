import { createStackNavigator } from '@react-navigation/stack';
import colors from 'configs/colors';
import { IAuthRouteParamsList } from 'configs/types';
import LoginScreen from 'screens/auth/LoginScreen';
import RegisterScreen from 'screens/auth/RegisterScreen';
import WelcomeScreen from 'screens/auth/WelcomeScreen';
import { globalStyles } from 'configs/GlobalStyle';

const Stack = createStackNavigator<IAuthRouteParamsList>();

const AuthRoute = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: colors.radBlack },
        headerTitleStyle: { ...globalStyles.routeHeaderStyles },
      }}
    >
      <Stack.Screen
        name="welcome-screen"
        component={WelcomeScreen}
        options={{
          headerShown: false,
          headerLeft: () => null,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="register-screen"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login-screen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthRoute;
