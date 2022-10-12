import {StyleSheet} from 'react-native';

const fontStyles = StyleSheet.create({
  header: {
    fontFamily: 'TerminusTTF-bold',
    fontSize: 30,
  },
  body: {
    fontFamily: 'TerminusTTF',
  },
  caption: {
    fontFamily: 'TerminusTTF-italic',
  },
  boldCaption: {
    fontFamily: 'TerminusTTF-bold-italic',
  },
});

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'TerminusTTF',
    },
    medium: {
      fontFamily: 'TerminusTTF-bold',
    },
    light: {
      fontFamily: 'TerminusTTF',
    },
    thin: {
      fontFamily: 'TerminusTTF',
    },
  },
  ios: {
    regular: {
      fontFamily: 'TerminusTTF',
    },
    medium: {
      fontFamily: 'TerminusTTF-bold',
    },
    light: {
      fontFamily: 'TerminusTTF',
    },
    thin: {
      fontFamily: 'TerminusTTF',
    },
  },
  android: {
    regular: {
      fontFamily: 'TerminusTTF',
    },
    medium: {
      fontFamily: 'TerminusTTF-bold',
    },
    light: {
      fontFamily: 'TerminusTTF',
    },
    thin: {
      fontFamily: 'TerminusTTF',
    },
  },
};

export {fontStyles, fontConfig};
