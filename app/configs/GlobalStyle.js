import { StyleSheet } from 'react-native';
import colors from './colors';
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  globalTitleFont: {
    fontSize: 20,
    color: colors.radWhite,
    fontFamily: 'AbrilFatface-Regular',
  },
  buttonConfig: {
    backgroundColor: colors.radRed,
  },
  routeHeaderStyles: {
    fontFamily: 'AbrilFatface-Regular',
    fontSize: 17,
  },

  containerShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
  },

  textWithShadow: {
    textAlign: 'center',
    fontFamily: 'AbrilFatface-Regular',
    textShadowColor: '#000',
    textShadowOffset: { width: 0.5, height: 0.5 },
  },

  button: {
    width: '50%',
    alignSelf: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
  },

  input: {
    borderBottomColor: colors.radRed,
    borderRightColor: colors.radRed,
    borderWidth: 3,
    borderRadius: 15,
    backgroundColor: colors.radWhite,
    paddingLeft: 10,
    fontFamily: 'AbrilFatface-Regular',
    textShadowColor: '#000',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textAlign: 'left',
    fontSize: 14,
  },
  label: {
    color: colors.radWhite,
    fontFamily: 'AbrilFatface-Regular',
  },
  iconColor: {
    backgroundColor: colors.radRed,
  },
  dividerIcon: {
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    elevation: 5,
  },
  bannerTextView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    textAlign: 'center',
    fontFamily: 'AbrilFatface-Regular',
    fontSize: 17,
    textShadowColor: '#000',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
});
