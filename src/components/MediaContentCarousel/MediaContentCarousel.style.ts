import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  carousel: {
    width: '100%',
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginRight: 40,
  },
  mediaText: {
    fontSize: 15,
    marginRight: 3,
  },
  mediaView: {
    flexDirection: 'row',
    width: 100,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    elevation: 10,
  },
});

export {styles};
