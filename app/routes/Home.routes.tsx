//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from 'configs/colors';
import { IHomeRouteParamsList } from 'configs/types';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ContactUsScreen from 'screens/home/ContactUsScreen';
import HomeScreen from 'screens/home/HomeScreen';
import { Icon } from 'react-native-elements';

const Tab = createMaterialBottomTabNavigator<IHomeRouteParamsList>();

const HomeRoute = (): JSX.Element => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="home-screen"
        shifting={true}
        activeColor={colors.radOrange}
        inactiveColor={colors.radWhite}
        barStyle={{ backgroundColor: '#fff' }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName: string = '';
            if (route.name == 'home-screen') {
              iconName = focused ? 'home' : 'door-closed-lock';
            } else if (route.name == 'contact-us') {
              iconName = focused ? 'email-newsletter' : 'email-lock';
            }
            return (
              <Icon
                name={iconName}
                color={color}
                size={24}
                type="material-community"
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="home-screen"
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarColor: colors.radBlack,
          }}
        />
        <Tab.Screen
          name="contact-us"
          component={ContactUsScreen}
          options={{ title: 'contact us', tabBarColor: colors.radBlack }}
        />
      </Tab.Navigator>
    </>
  );
};

export default HomeRoute;
