import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import {IAuthStackParamsList} from 'src/routes/types';
import LoginScreen from 'screens/auth/LoginScreen';
import SignUpScreen from 'screens/auth/SignUpScreen';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator<IAuthStackParamsList>();
const {Navigator, Screen} = Stack;

const AuthStack = (): JSX.Element => {
  const {colors} = useTheme();
  return (
    <>
      <StatusBar backgroundColor={colors.primary} />
      <Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Screen
          name="sign-up-screen"
          component={SignUpScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="login-screen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
      </Navigator>
    </>
  );
};

export default AuthStack;
