import 'react-native-gesture-handler';
import React, {useCallback, useMemo} from 'react';
import {theme} from 'configs/themeConfig';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import store from 'features/store';
import {useEffect, useState} from 'react';
import {LogBox} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import AuthCheckStack from 'routes/AuthCheckStack';

const App = (): JSX.Element | null => {
  const [appIsReady, setAppIsReady] = useState(false);
  // const fontConfig = {
  //   'AbrilFatface-Regular': require('./app/assets/fonts/AbrilFatface-Regular.ttf'),
  // };

  const fontConfig = useMemo(() => {
    return {
      'AbrilFatface-Regular': require('assets/fonts/AbrilFatface-Regular.ttf'),
    };
  }, []);

  const prepareApp = useCallback((): void => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync(fontConfig);
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    })();
  }, [fontConfig]);

  // const prepareApp = async (): Promise<void> => {
  //   try {
  //     await SplashScreen.preventAutoHideAsync();
  //     await Font.loadAsync(fontConfig);
  //   } catch (error) {
  //     console.warn(error);
  //   } finally {
  //     setAppIsReady(true);
  //     await SplashScreen.hideAsync();
  //   }
  // };

  useEffect(() => {
    LogBox.ignoreLogs(['Setting a timer for a long period of time']);
    prepareApp();
  }, [prepareApp]);

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
