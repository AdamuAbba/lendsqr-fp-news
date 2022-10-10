import {createStackNavigator} from '@react-navigation/stack';
import colors from 'src/configs/colors';
import {globalStyles} from 'src/configs/GlobalStyle';
import {useTheme} from 'react-native-paper';
import {IAuthStackParamsList} from 'src/routes/types';
import LoginScreen from 'src/screens/auth/LoginScreen';
import SignUpScreen from 'src/screens/auth/SignUpScreen';

const Stack = createStackNavigator<IAuthStackParamsList>();
const {Navigator, Screen} = Stack;

const AuthStack = (): JSX.Element => {
  const {colors} = useTheme();
  return (
    <Navigator
      screenOptions={{
        cardStyle: {backgroundColor: colors.primary},
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
  );
};

export default AuthStack;
