import {MaterialIcons} from '@expo/vector-icons';
import {selectUser} from 'features/user';
import {idGenerator} from 'helpers/functions';
import {errorCatcher} from 'middleware/errorCatcher';
import {logEvent} from 'middleware/eventLogger';
import React from 'react';
import {FlatList, Image, View} from 'react-native';
import {List, Text, TouchableRipple, useTheme} from 'react-native-paper';
import {FPTime} from 'utils/constants';
import {useAppSelector} from 'utils/hooks';
import {styles} from './LatestHeadlinesList.style';
import {IHeadLinesRenderItem, ILatestHeadlinesList} from './types';
import * as analytics from 'expo-firebase-analytics';

const _renderItem = ({
  item,
  index,
  navigation,
}: IHeadLinesRenderItem): JSX.Element => {
  const userData = useAppSelector(selectUser);
  const {colors} = useTheme();

  const handleOnCardPress = async (): Promise<void> => {
    try {
      navigation.navigate('news-details-screen', {articles: item});
      // await logEvent(userData, {
      //   event_id: idGenerator(),
      //   function_name: 'handleOnCardPress',
      //   trigger_time: FPTime(new Date()),
      //   user_id: userData.uid,
      // });
      await analytics.logEvent('btn_press_trigger', {test: 'test'});
    } catch (error) {
      await errorCatcher(userData, error);
    }
  };

  const Title = (): JSX.Element => {
    return (
      <View style={styles.dateView}>
        <MaterialIcons
          name="article"
          color={colors.primary}
          size={20}
          style={styles.iconConfig}
        />
        <Text style={styles.titleText} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  const Description = (): JSX.Element => {
    return (
      <View>
        <View style={styles.dateView}>
          <MaterialIcons
            name="campaign"
            color={colors.primary}
            size={20}
            style={styles.iconConfig}
          />
          <Text>{item.topic}</Text>
        </View>
        <View style={styles.dateView}>
          <MaterialIcons
            name="calendar-today"
            color={colors.primary}
            size={20}
            style={styles.iconConfig}
          />
          <Text>{item.published_date}</Text>
        </View>
      </View>
    );
  };
  return (
    <TouchableRipple
      onPress={handleOnCardPress}
      style={{...styles.listCardView, backgroundColor: colors.surface}}>
      <List.Item
        title={() => <Title />}
        description={() => <Description />}
        left={props => (
          <Image
            {...props}
            source={{uri: item.media}}
            style={styles.mediaImage}
          />
        )}
      />
    </TouchableRipple>
  );
};

const LatestHeadlinesList = ({data, navigation}: ILatestHeadlinesList) => {
  return (
    <FlatList
      initialNumToRender={5}
      data={data}
      keyExtractor={(_, index) => index.toString()}
      testID="main-view"
      renderItem={({item, index}) => (
        <_renderItem navigation={navigation} index={index} item={item} />
      )}
    />
  );
};

export default LatestHeadlinesList;
