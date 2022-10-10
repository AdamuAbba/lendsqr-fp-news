import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Dimensions, StatusBar} from 'react-native';
import {MessageOptions} from 'react-native-flash-message';

const googleSignInConfig = GoogleSignin;

googleSignInConfig.configure({
  webClientId:
    '442960332510-e81nk87s7lffi1aqqbhmkrdvredasn5l.apps.googleusercontent.com',
});

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

export {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  successConfig,
  errorConfig,
  googleSignInConfig,
};
