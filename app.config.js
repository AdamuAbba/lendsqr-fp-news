let Config = {
  apiUrl: 'https://newscatcher.p.rapidapi.com',
};

if (process.env.APP_ENV === 'production') {
  Config.apiUrl = 'https://newscatcher.p.rapidapi.com';
} else if (process.env.APP_ENV === 'development') {
  Config.apiUrl = 'https://newscatcher.p.rapidapi.com';
}

export default () => ({
  expo: {
    name: 'FP News',
    slug: 'fp-news',
    version: '1.0.0',
    owner: 'shyweirdo',
    orientation: 'portrait',
    icon: './src/assets/images/icon.png',
    jsEngine: 'hermes',
    privacy: 'public',
    platforms: ['ios', 'android', 'web'],
    plugins: [
      '@react-native-google-signin/google-signin',
      '@react-native-firebase/app',
      '@react-native-firebase/perf',
      '@react-native-firebase/crashlytics',
      [
        'expo-build-properties',
        {
          ios: {
            useFrameworks: 'static',
          },
        },
      ],
      [
        'expo-notifications',
        {
          icon: './src/assets/images/icon.png',
          color: '#CB77EA',
          sounds: [
            './src/assets/audio/wheep_wheep.wav',
            './src/assets/audio/nice_sms_tone.wav',
          ],
        },
      ],
    ],
    splash: {
      image: './src/assets/images/splash.png',
      resizeMode: 'cover',
      backgroundColor: '#CB77EA',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/images/adaptive-icon.png',
        backgroundColor: '#09163C',
      },
      softwareKeyboardLayoutMode: 'pan',
      package: 'com.lendsqr.fpNews',
      googleServicesFile: './google-services.json',
    },
    web: {
      favicon: './src/assets/images/favicon.png',
      config: {
        firebase: {
          apiKey: 'AIzaSyBRKd7mwT3pkgwgvW2GkJJbs9OooUK9hYs',
          authDomain: 'lendsqr-fp-news-b85db.firebaseapp.com',
          projectId: 'lendsqr-fp-news-b85db',
          storageBucket: 'lendsqr-fp-news-b85db.appspot.com',
          messagingSenderId: '442960332510',
          appId: '1:442960332510:web:91d42c193cfe4d69f7a44f',
          measurementId: 'G-B3L7MZMX8J',
        },
      },
    },
    description: 'Lendsqr fp news app',
    githubUrl: 'https://github.com/AdamuAbba/lendsqr-fp-news.git',
    extra: {
      eas: {
        projectId: '08d52f92-c434-45d9-be5d-a8dfc6b68453',
      },
      ...Config,
    },
    runtimeVersion: {
      policy: 'sdkVersion',
    },
    updates: {
      fallbackToCacheTimeout: 0,
      url: 'https://u.expo.dev/08d52f92-c434-45d9-be5d-a8dfc6b68453',
    },
  },
});
