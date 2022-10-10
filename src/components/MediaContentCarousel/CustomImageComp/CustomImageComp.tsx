import {Surface} from 'react-native-paper';
import Animated from 'react-native-reanimated';
import {styles} from './CustomImageComp.style';
import {ICustomImageComp} from './types';

const CustomImageComp = ({imgUrl}: ICustomImageComp): JSX.Element => {
  return (
    <Surface style={[styles.container]}>
      <Animated.Image
        source={{
          uri: imgUrl,
        }}
        resizeMode="cover"
        style={[styles.image]}
      />
    </Surface>
  );
};

export default CustomImageComp;
