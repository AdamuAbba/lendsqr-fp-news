import colors from 'src/configs/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: '80%',
    height: '60%',
    elevation: 9,
  },
  formView: {justifyContent: 'center'},
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
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 1,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
  },
  loginView: {
    alignSelf: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotText: {
    color: colors.radWhite,
    fontFamily: 'AbrilFatface-Regular',
    textShadowColor: '#000',
    textShadowOffset: {width: 0.5, height: 0.5},
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
  loginButton: {
    justifyContent: 'center',
  },
  cardBody: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export {styles};
