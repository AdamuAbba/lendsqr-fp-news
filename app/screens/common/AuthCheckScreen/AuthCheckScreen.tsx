import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import { styles } from './style';

const AuthCheckScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.lottieStyle}
        source={require('assets/loadingFood.json')}
        autoPlay
      />
    </View>
  );
};

export default AuthCheckScreen;
