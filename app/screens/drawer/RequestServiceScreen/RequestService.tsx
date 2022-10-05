import RequestBanner from 'components/RequestBanner';
import RequestForm from 'components/RequestForm';
import { StatusBar } from 'expo-status-bar';
import { View as MotiView } from 'moti';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import RadishMotto from '../../../shared/RadishMotto';
import { styles } from './style';

const RequestServiceScreen = (): JSX.Element => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar />
        <RadishMotto />
        <RequestBanner />
        <MotiView
          from={{ translateX: 500 }}
          transition={{ type: 'spring', duration: 1000 }}
          animate={{ translateX: 0 }}
          style={{ flex: 1 }}
        >
          <RequestForm />
        </MotiView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RequestServiceScreen;
