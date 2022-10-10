import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import GoogleConnectComp from 'src/components/GoogleConnectComp';
import SignUpForm from 'src/components/SignUpForm';
import {useTheme} from 'react-native-paper';
import {ISignUpTabsParamsList} from 'src/routes/types';
import LoginScreen from 'src/screens/auth/LoginScreen';
import {styles} from './style';
const Tab = createMaterialTopTabNavigator<ISignUpTabsParamsList>();
const {Navigator, Screen} = Tab;
const SingUpTab = (): JSX.Element => {
  const {colors} = useTheme();
  return (
    <Navigator
      screenOptions={{
        tabBarShowLabel: false,
        swipeEnabled: false,
      }}
      tabBar={() => null}
      sceneContainerStyle={{
        ...styles.container,
        backgroundColor: colors.primary,
      }}>
      <Screen name="sign-up-form-screen" component={SignUpForm} options={{}} />
      <Screen name="google-connect-screen" component={GoogleConnectComp} />
      <Screen name="login-screen" component={LoginScreen} />
    </Navigator>
  );
};

export default SingUpTab;
