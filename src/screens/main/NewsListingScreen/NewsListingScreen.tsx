import LatestHeadlinesList from 'components/LatestHeadlinesList';
import NewsListPlaceholder from 'components/NewsListPlaceholder';
import {View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import {IMainStackScreenProps} from 'routes/types';
import {useLatestHeadlinesQuery} from 'services/endpoints/newsCatcher';
import {styles} from './NewsListingScreen.style';

const NewsListingScreen = ({
  navigation,
}: IMainStackScreenProps<'news-listing-screen'>): JSX.Element => {
  const {colors} = useTheme();
  const {data, isFetching, isSuccess, isError, error} = useLatestHeadlinesQuery(
    {lang: 'en', media: 'True'},
  );
  return (
    <View style={{...styles.container, backgroundColor: colors.primary}}>
      {isFetching ? (
        <NewsListPlaceholder />
      ) : isSuccess ? (
        <LatestHeadlinesList navigation={navigation} data={data.articles} />
      ) : isError ? (
        <Text>{error.data.message}</Text>
      ) : null}
    </View>
  );
};

export default NewsListingScreen;
