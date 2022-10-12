import {theme} from 'configs/themeConfig';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import store from 'features/store';
import React, {useEffect, useState} from 'react';
import {LogBox} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import AuthCheckStack from 'routes/AuthCheckStack';

const App = (): JSX.Element | null => {
  const [appIsReady, setAppIsReady] = useState(false);

  const fontConfig = {
    TerminusTTF: require('./src/assets/fonts/TerminusTTF_4.49.2.ttf'),
    'TerminusTTF-bold-italic': require('./src/assets/fonts/TerminusTTF_Bold_Italic_4.49.2.ttf'),
    'TerminusTTF-bold': require('./src/assets/fonts/TerminusTTF_Bold_4.49.2.ttf'),
    'TerminusTTF-italic': require('./src/assets/fonts/TerminusTTF_Italic_4.49.2.ttf'),
  };

  const prepareApp = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      await Font.loadAsync(fontConfig);
    } catch (error) {
      console.warn(error);
    } finally {
      setAppIsReady(true);
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    LogBox.ignoreLogs(['Setting a timer for a long period of time']);
    prepareApp();
  }, []);

  if (!appIsReady) {
    return null;
  } else {
    return (
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <AuthCheckStack />
        </PaperProvider>
        <FlashMessage position="top" />
      </StoreProvider>
    );
  }
};

export default App;
