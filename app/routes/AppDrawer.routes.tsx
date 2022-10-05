import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import UserAvatar from 'components/UserAvatar';
import { IAppDrawerRoute, IAppDrawerRouteParamsList } from 'configs/types';
import AboutUsScreen from 'screens/drawer/AboutUsScreen';
import RequestServiceScreen from 'screens/drawer/RequestServiceScreen';
import HomeRoute from './Home.routes';
import CustomDrawerContent from 'components/CustomDrawerContent';
import { withTheme } from 'react-native-paper';

const Drawer = createDrawerNavigator<IAppDrawerRouteParamsList>();
const AppDrawerRoute = ({ theme }: IAppDrawerRoute): JSX.Element => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1f1f1f',
          height: '13%',
        },

        headerTitleStyle: { fontFamily: 'AbrilFatface-Regular' },
        headerTintColor: '#fff',
        drawerActiveTintColor: theme?.colors.primary,
        drawerActiveBackgroundColor: 'transparent',
        drawerInactiveTintColor: 'white',
      }}
      initialRouteName="home-route"
      drawerContent={(props: DrawerContentComponentProps) => (
        <CustomDrawerContent {...props} />
      )}
    >
      <Drawer.Screen
        name="home-route"
        component={HomeRoute}
        options={{
          title: 'Home',
          headerShown: true,
          headerRight: () => <UserAvatar />,
          drawerIcon: ({ color, size }) => (
            <Icon name="home" type="material" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="about-us-screen"
        component={AboutUsScreen}
        options={{
          title: 'About Us',
          headerShown: false,
          headerRight: () => <UserAvatar />,
          drawerIcon: ({ color, size }) => (
            <Icon
              name="information-outline"
              type="material-community"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="request-screen"
        component={RequestServiceScreen}
        options={{
          title: 'Request Screen',
          headerShown: true,
          headerRight: () => <UserAvatar />,
          drawerIcon: ({ color, size }) => (
            <Icon name="storefront" type="material" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default withTheme(AppDrawerRoute);
