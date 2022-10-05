import colors from 'configs/colors';
import { globalStyles } from 'configs/GlobalStyle';
import LottieView from 'lottie-react-native';
import { Text as MotiText, View as MotiView } from 'moti';
import { View } from 'react-native';

const bannerText = [
  { info: 'Abeg, fill the form below', id: '1', delay: 1500 },
  { info: "'#man must chop'", id: '2', delay: 1600 },
  { info: 'let us fill your belly', id: '3', delay: 1700 },
];

const RequestBanner = () => {
  return (
    <MotiView
      from={{ translateX: 500 }}
      transition={{ duration: 500, type: 'spring', delay: 1000 }}
      animate={{ translateX: 0 }}
      style={{ flexDirection: 'row', alignItems: 'center' }}
    >
      <LottieView
        style={{ height: 120, flex: 1 }}
        autoPlay
        source={require('assets/images/requestChef.json')}
      />
      <View style={{ flex: 1 }}>
        {bannerText.map((item) => (
          <MotiText
            key={item.id}
            from={{
              transform: [{ scaleX: 0, duration: 1000 }, { rotateY: '180deg' }],
            }}
            transition={{ duration: 3000, delay: item.delay, type: 'spring' }}
            animate={{ transform: [{ scaleX: 1 }, { rotateY: '0deg' }] }}
            style={{
              ...globalStyles.textWithShadow,
              color: colors.radOrange,
              fontSize: 15,
            }}
          >
            {item.info}
          </MotiText>
        ))}
      </View>
    </MotiView>
  );
};

export default RequestBanner;
