import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import CustomHeader from 'components/CustomHeader';
import {IMainStackParamsList} from 'routes/types';
import NewsDetailsScreen from 'screens/main/NewsDetailsScreen';
import NewsListingScreen from 'screens/main/NewsListingScreen';

const Stack = createStackNavigator<IMainStackParamsList>();
const {Navigator, Screen} = Stack;

const MainStack = (): JSX.Element => {
  const {colors} = useTheme();
  return (
    <Navigator
      initialRouteName="news-listing-screen"
      screenOptions={{
        header: props => <CustomHeader {...props} />,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Screen name="news-listing-screen" component={NewsListingScreen} />
      <Screen name="news-details-screen" component={NewsDetailsScreen} />
    </Navigator>
  );
};

export default MainStack;
