import BreakMe from 'components/BreakMe';
import LatestHeadlinesList from 'components/LatestHeadlinesList';
import NewsListPlaceholder from 'components/NewsListPlaceholder';
import {selectUser} from 'features/user';
import {generatePushNotificationsToken} from 'helpers/functions';
import {useEffect} from 'react';
import {View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import {IMainStackScreenProps} from 'routes/types';
import {useLatestHeadlinesQuery} from 'services/endpoints/newsCatcher';
import {useAppSelector} from 'utils/hooks';
import {styles} from './NewsListingScreen.style';

const NewsListingScreen = ({
  navigation,
}: IMainStackScreenProps<'news-listing-screen'>): JSX.Element => {
  const user = useAppSelector(selectUser);
  const {colors} = useTheme();
  const {data, isFetching, isSuccess, isError, error} = useLatestHeadlinesQuery(
    {lang: 'en', media: 'True'},
  );

  useEffect(() => {
    generatePushNotificationsToken(user);
  }, [user]);

  return (
    <View style={{...styles.container, backgroundColor: colors.primary}}>
      <BreakMe />
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
