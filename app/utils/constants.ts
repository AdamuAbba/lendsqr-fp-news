import { Dimensions, StatusBar } from 'react-native';
import { MessageOptions } from 'react-native-flash-message';

const steps: Record<string, string>[] = [
  { step: 'Register', id: '1' },
  { step: 'request', id: '2' },
  { step: 'chill and let us cook for you', id: '3' },
];

const SCREEN_HEIGHT: number = Dimensions.get('window').height;
const SCREEN_WIDTH: number = Dimensions.get('window').width;

const successConfig: MessageOptions = {
  type: 'success',
  duration: 2500,
  animated: true,
  icon: 'success',
  hideOnPress: true,
  autoHide: true,
  hideStatusBar: false,
  message: 'Success',
  statusBarHeight: StatusBar.currentHeight,
};

const errorConfig: MessageOptions = {
  ...successConfig,
  type: 'danger',
  icon: 'danger',
  message: 'Error',
};

export { steps, SCREEN_HEIGHT, SCREEN_WIDTH, successConfig, errorConfig };
