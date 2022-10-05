import { IAboutUsScreenProps } from 'configs/types';
import { ImageBackground } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import AboutAvatarComp from 'components/AboutAvatarComp';
import AboutHeader from 'components/AboutHeader';
import AboutRadishComp from 'components/AboutRadishComp';
import colors from 'configs/colors';
import { styles } from './style';

const image =
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60';

const AboutUsScreen = ({ navigation }: IAboutUsScreenProps) => {
  return (
    <ParallaxScrollView
      contentBackgroundColor={colors.radWhite}
      parallaxHeaderHeight={500}
      fadeOutBackground
      renderBackground={() => (
        <ImageBackground
          style={styles.avatarBackground}
          source={{
            uri: image,
          }}
        >
          <AboutAvatarComp />
        </ImageBackground>
      )}
      stickyHeaderHeight={80}
      renderStickyHeader={() => <AboutHeader navigation={navigation} />}
      backgroundSpeed={2}
    >
      <AboutRadishComp />
    </ParallaxScrollView>
  );
};

export default AboutUsScreen;
