import { Platform, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
    marginBottom: '30%',
  },
  emailText: {
    color: '#fff',
    fontFamily: 'AbrilFatface-Regular',
  },
  avatarAccessory: {
    height: 20,
    width: 20,
    borderRadius: 25,
    elevation: 9,
  },
  avatarImage: {
    marginBottom: 15,
  },
});

export { styles };
