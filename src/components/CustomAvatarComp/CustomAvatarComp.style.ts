import {StatusBar, StyleSheet} from 'react-native';

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
  text: {
    color: '#fff',
  },
  avatarAccessory: {
    height: 20,
    width: 20,
    borderRadius: 25,
    elevation: 9,
  },
  avatarImage: {
    marginLeft: 20,
  },
  displayNameView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconView: {
    marginRight: 9,
  },
});

export {styles};
