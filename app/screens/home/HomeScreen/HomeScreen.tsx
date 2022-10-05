import { steps } from 'utils/constants';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import { Text as MotiText, useAnimationState, View as MotiView } from 'moti';
import { ScrollView, StyleSheet, View } from 'react-native';
import AnimatedImageSlider from 'rn-animated-image-carousel';
import RadTilesBar from 'components/RadTilesBar';
import colors from 'configs/colors';
import { globalStyles } from 'configs/GlobalStyle';
import RadishMotto from '../../../shared/RadishMotto';

const images = [
  'https://media.istockphoto.com/photos/regional-african-food-picture-id1169415720?k=6&m=1169415720&s=612x612&w=0&h=qYzDru_krKMBM4_58eW4m-cdkIxU7a1YS-V32poO8BQ=',
  'https://finmail-site-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/04/16155329/44-1.jpg',
  'https://thumbs.dreamstime.com/b/nigerian-food-delicious-eba-background-p-background-dining-concept-n-white-bowl-rich-vegetables-lunch-185024416.jpg',
  'https://thumbs.dreamstime.com/b/nigerian-food-delicious-fried-plantain-red-chilli-sauce-table-lunch-tasty-african-cuisine-nigerian-food-delicious-185024971.jpg',
];

const HomeScreen = (): JSX.Element => {
  const radTileState = useAnimationState({
    from: {
      transform: [
        {
          translateX: -100,
        },
        {
          rotateY: '90deg',
        },
      ],
      opacity: 0,
      duration: 1000,
    },
    active: {
      transform: [
        {
          translateX: 0,
        },
        {
          rotateY: '0deg',
        },
      ],
      opacity: 1,
      duration: 1000,
    },
  });

  const stepState = useAnimationState({
    from: {
      scale: 0,
      opacity: 0,
      duration: 1000,
    },
    active: {
      scale: 1,
      opacity: 1,
      duration: 1000,
    },
  });
  let yAxis = 0;

  const radTilesTransition = () => {
    if (yAxis >= 200) {
      return radTileState.transitionTo('active');
    }
  };

  const stepStateTransition = () => {
    if (yAxis >= 1480) {
      return stepState.transitionTo('active');
    }
  };

  const getScrollPosition = (e) => {
    yAxis = e.nativeEvent.contentOffset.y;
    radTilesTransition();
    stepStateTransition();
  };

  let counter = 1;

  return (
    <>
      <View>
        <StatusBar />
        <RadishMotto />
        <ScrollView scrollEnabled={true} onScroll={(e) => getScrollPosition(e)}>
          <AnimatedImageSlider
            inActiveDotColor="red"
            activeDotColor={colors.radOrange}
            imageBorderRadius={10}
            imageHeight={250}
            imageWidth={350}
            data={images}
            dotsContainerStyle={{ paddingBottom: 10 }}
          />
          <LottieView
            autoPlay
            style={{
              height: 50,
              width: 50,
              alignSelf: 'center',
              marginBottom: 10,
            }}
            source={require('assets/images/slideUpArrows.json')}
          />
          {/* view for the tiles */}
          <MotiView state={radTileState}>
            <RadTilesBar />
          </MotiView>
          {/* steps view */}
          <MotiView
            state={stepState}
            style={{ marginBottom: 200, flexDirection: 'row', flex: 1 }}
          >
            <View style={{ flex: 1, justifyContent: 'center' }}>
              {steps.map((item) => (
                <MotiText
                  style={{
                    marginBottom: 3,
                    marginLeft: 5,
                    ...globalStyles.textWithShadow,
                    textAlign: 'left',
                  }}
                  key={item.id}
                >
                  {`${counter++}  ${item.step}`}
                </MotiText>
              ))}
            </View>
            <LottieView
              autoPlay
              style={{
                height: 250,
                alignSelf: 'flex-end',
                flex: 2,
              }}
              source={require('assets/images/appointmentBooking.json')}
            />
          </MotiView>
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
