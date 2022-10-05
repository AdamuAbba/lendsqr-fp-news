import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import { theme } from 'configs/themeConfig';
import store from 'features/store';
import RootRoute from 'routes/Root.routes';
import FlashMessage from 'react-native-flash-message';

const App = (): JSX.Element | null => {
  const [appIsReady, setAppIsReady] = useState(false);
  const fontConfig = {
    'AbrilFatface-Regular': require('./app/assets/fonts/AbrilFatface-Regular.ttf'),
  };

  const prepareApp = async (): Promise<void> => {
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
          <RootRoute />
        </PaperProvider>
        <FlashMessage position="top" />
      </StoreProvider>
    );
  }
};

export default App;
