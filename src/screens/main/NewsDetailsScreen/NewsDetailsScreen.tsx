import MediaContentCarousel from 'components/MediaContentCarousel';
import {ScrollView} from 'react-native';
import {Paragraph, Surface, useTheme} from 'react-native-paper';
import {styles} from './NewsDetailsScreen.style';
import {INewsDetailsScreen} from './types';
import {Text} from 'react-native-paper';

const NewsDetailsScreen = ({route}: INewsDetailsScreen): JSX.Element => {
  const {colors} = useTheme();

  const {params} = route;

  return (
    <ScrollView style={{...styles.container, backgroundColor: colors.primary}}>
      <Text style={{color: colors.surface}}>Media</Text>
      <MediaContentCarousel media_content={params?.articles.media_content} />
      <Surface style={styles.paragraphView}>
        <Text>Summary</Text>
        <Paragraph style={styles.paragraphText}>
          {params.articles.summary}
        </Paragraph>
      </Surface>
    </ScrollView>
  );
};

export default NewsDetailsScreen;
