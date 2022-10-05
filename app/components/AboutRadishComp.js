import colors from 'configs/colors';
import { globalStyles } from 'configs/GlobalStyle';
import LottieView from 'lottie-react-native';
import { Text as MotiText, View as MotiView } from 'moti';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const { width, height } = Dimensions.get('window');
const AboutRadishComp = () => {
  const attributes = [
    {
      lottieUri: require('assets/images/love.json'),
      id: '1',
      attribute: 'Love',
      delay: 500,
    },
    {
      lottieUri: require('assets/images/potAndSpoon.json'),
      id: '2',
      attribute: 'Passion',
      delay: 600,
    },
    {
      lottieUri: require('assets/images/flipingPan.json'),
      id: '3',
      attribute: 'quality',
      delay: 700,
    },
    {
      lottieUri: require('assets/images/soupBowl.json'),
      id: '4',
      attribute: 'perfection',
      delay: 800,
    },
    {
      lottieUri: require('assets/images/focus.json'),
      id: '5',
      attribute: 'focus',
      delay: 900,
    },
  ];

  const aboutData = [
    {
      title: 'Who is Rachael ?',
      body: 'Rachael Adamu has from Early years developed a passion for good food and excellent service delivery.Derives joy and excitement in seeing people eat healthy. This enthralling journey has taken her places far and beyond and finally culminate in the establishment of RAD-dish.She is not just a cook with special culinary skills but also a brilliant writer.',
      id: '1',
      delay: 2000,
      axisValue: 100,

      borderRight: 30,
      imgUri:
        'https://images.pexels.com/photos/256443/pexels-photo-256443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      title: 'Why pick Rad-dish ?',
      body: 'At RAD-dish, we are passionate for tasty food and quality services bearing in mind individual allergies as regards food and preference as regards services. We believe that every individual deserves a good treat and we make it out duty to ensure maximum customer satisfaction with our crave able meals and innovative ways to serve wholesome abundantly nutritious Meals made from quality ingredients carefully selected by our well trained and sophisticated cooks with deep root culinary in distinctive styles.Be you a walk in Customer, an online customer requesting personal cook, a busy workaholic etc. We posses all the convenience to make our guest feel welcome and comfortable. What ever your needs, RAD-dish got you covered',
      id: '2',
      delay: 2300,
      axisValue: -100,
      borderLeft: 30,

      imgUri:
        'https://images.pexels.com/photos/1040685/pexels-photo-1040685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ];

  const getScrollPosition = (e) => {
    let yAxis = e.nativeEvent.contentOffset.y;
    console.log(yAxis);
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <MotiView style={{ flexDirection: 'row' }}>
          {attributes.map((item) => (
            <MotiView style={{ flex: 1 }} key={item.id}>
              <MotiView
                from={{ translateX: 100, opacity: 0 }}
                transition={{
                  type: 'spring',
                  duration: 1000,
                  delay: item.delay,
                }}
                animate={{ translateX: 0, opacity: 1 }}
                style={{
                  ...globalStyles.containerShadow,
                  ...styles.attributesView,
                }}
              >
                <LottieView autoPlay source={item.lottieUri} />
              </MotiView>
              <MotiText
                from={{ translateX: -100, opacity: 0 }}
                transition={{
                  type: 'spring',
                  duration: 1000,
                  delay: item.delay + 100,
                }}
                animate={{ translateX: 0, opacity: 1 }}
                style={{
                  ...globalStyles.textWithShadow,
                  fontSize: 13,
                }}
              >
                {item.attribute}
              </MotiText>
            </MotiView>
          ))}
        </MotiView>
        {aboutData.map((item) => (
          <MotiView
            style={{ flex: 1, alignSelf: 'center' }}
            key={item.id}
            from={{ translateX: item.axisValue, opacity: 0 }}
            transition={{ duration: 1000, delay: item.delay }}
            animate={{ translateX: 0, opacity: 1 }}
          >
            <Card
              containerStyle={{
                ...globalStyles.containerShadow,
                marginBottom: 10,
                padding: 0,
                width: '85%',
                borderBottomRightRadius: 30,
                borderBottomLeftRadius: 30,
              }}
            >
              <Card.Image source={{ uri: item.imgUri }} />
              <Text
                style={{
                  ...globalStyles.textWithShadow,
                  paddingVertical: 5,
                  color: colors.radBlack,
                }}
              >
                {item.title.toUpperCase()}
              </Text>
              <Card.Divider
                width={1}
                style={{ width: '65%', alignSelf: 'center', marginBottom: 0 }}
              />
              <Text
                style={{
                  padding: 10,
                  ...globalStyles.textWithShadow,
                  textAlign: 'justify',
                  color: colors.radBlack,
                }}
              >
                {item.body}
              </Text>
            </Card>
          </MotiView>
        ))}
        <View style={{ flex: 1, marginTop: 30 }}>
          <View style={{ flex: 1, width, flexDirection: 'row' }}>
            <LottieView
              style={{ height: 100, flex: 2 }}
              autoPlay
              loop={true}
              source={require('assets/images/chefStillWaiting.json')}
            />

            <View style={{ flex: 1 }}>
              <MotiText
                style={{
                  ...globalStyles.textWithShadow,
                  textShadowRadius: 0,
                  paddingRight: 10,
                  marginTop: 10,
                  textAlign: 'right',
                }}
              >
                Enough about me, we have chefs waiting eagerly to cook for you
              </MotiText>
            </View>
          </View>
          <View style={{ flex: 1, width, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <MotiText
                style={{
                  ...globalStyles.textWithShadow,
                  textShadowRadius: 0,
                  paddingLeft: 10,
                  marginTop: 10,
                  textAlign: 'left',
                }}
              >
                Good quality uncompromisable customized food just for you
              </MotiText>
            </View>
            <LottieView
              style={{ height: 100, flex: 2 }}
              autoPlay
              loop={true}
              source={require('assets/images/seriousCooking.json')}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  attributesView: {
    height: 55,
    width: 55,

    backgroundColor: colors.radWhite,
    marginTop: 10,
    marginHorizontal: 5,
    borderRadius: 100 / 2,
  },
});

export default AboutRadishComp;
