import { IAboutUsScreenProps } from 'configs/types';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import colors from '../configs/colors';
const AboutHeader = ({ navigation }: IAboutUsScreenProps): JSX.Element => {
  return (
    <Header
      leftComponent={{
        icon: 'menu',
        color: '#fff',
        size: 30,
        onPress: () => {
          navigation.openDrawer();
        },
      }}
      barStyle="default"
      statusBarProps={{ backgroundColor: colors.radBlack }}
      containerStyle={styles.container}
      elevated={true}
      centerComponent={{
        text: 'About',
        style: {
          color: '#fff',
          fontSize: 23,
          fontFamily: 'AbrilFatface-Regular',
        },
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: colors.radBlack, height: 80 },
});

export default AboutHeader;
