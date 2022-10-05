import colors from 'configs/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.radBlack,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 1,
    width: '98%',
    alignSelf: 'center',
  },
  button: {
    width: '50%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  formHeader: {
    color: colors.radWhite,
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'AbrilFatface-Regular',
    textShadowColor: '#000',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
  },
  forgotView: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  forgotText: {
    color: colors.radWhite,
    fontFamily: 'AbrilFatface-Regular',
    textShadowColor: '#000',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  errorText: {
    color: 'red',
    alignSelf: 'center',
    marginBottom: 2,
    fontFamily: 'AbrilFatface-Regular',
  },
  iconConfig: {
    elevation: 10,
  },
  firstInputFieldView: {
    marginTop: 30,
  },
});

export { styles };
