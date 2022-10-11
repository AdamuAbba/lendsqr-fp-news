import DetailsHeaderView from 'components/DetailsHeaderView';
import MediaContentCarousel from 'components/MediaContentCarousel';
import ViewMore from 'components/ViewMore';
import {ScrollView} from 'react-native';
import {Paragraph, Surface, Text, useTheme} from 'react-native-paper';
import {styles} from './NewsDetailsScreen.style';
import {INewsDetailsScreen} from './types';

const NewsDetailsScreen = ({route}: INewsDetailsScreen): JSX.Element => {
  const {colors} = useTheme();

  const {params} = route;

  const {
    published_date,
    title,
    topic,
    media_content,
    rank,
    author,
    clean_url,
    country,
  } = params.articles;

  return (
    <ScrollView style={{...styles.container, backgroundColor: colors.primary}}>
      <DetailsHeaderView
        published_date={published_date}
        title={title}
        topic={topic}
      />
      <MediaContentCarousel media_content={media_content} />
      <ViewMore
        author={author}
        clean_url={clean_url}
        country={country}
        rank={rank}
      />
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
