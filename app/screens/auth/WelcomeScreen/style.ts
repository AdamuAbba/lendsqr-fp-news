import colors from 'configs/colors';
import { StatusBar, StyleSheet } from 'react-native';

const finalTopSpacing: number = StatusBar.currentHeight * 2;

export const styles = StyleSheet.create({
  welcomeTitle: {
    color: colors.radWhite,
    fontSize: 25,
    fontFamily: 'AbrilFatface-Regular',
    textShadowColor: '#000',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  lottieStyle: {
    height: 190,
    width: 180,
    alignSelf: 'center',
    marginBottom: 50,
  },
  container: {
    flex: 1,
    backgroundColor: colors.radBlack,
    marginTop: finalTopSpacing,
  },
  firstView: {
    marginLeft: 20,
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  greeting: {
    fontSize: 40,
    color: colors.radRed,
    fontFamily: 'AbrilFatface-Regular',
    textShadowColor: '#000',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  buttonView: {
    flexDirection: 'row',
  },
  button: {
    width: 100,
    backgroundColor: colors.radRed,
  },
  buttonTitle: {
    fontFamily: 'AbrilFatface-Regular',
  },
  welcomeText: {
    fontSize: 16,
    color: colors.radWhite,
    textAlign: 'center',
    fontFamily: 'AbrilFatface-Regular',
    textShadowColor: '#000',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  buttonContainer: { marginHorizontal: 3 },
  registerButton: {
    marginRight: 20,
  },
  welcomeTextBottom: { marginBottom: 40, width: 290 },
});
