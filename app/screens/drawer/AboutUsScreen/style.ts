import { SCREEN_HEIGHT, SCREEN_WIDTH } from 'utils/constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  imageStyle: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  avatarBackground: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
});
