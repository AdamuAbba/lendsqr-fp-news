import {MaterialIcons} from '@expo/vector-icons';
import {View as MotiView} from 'moti';
import React from 'react';
import {FlatList, Image, View} from 'react-native';
import {List, Text, useTheme} from 'react-native-paper';
import {styles} from './LatestHeadlinesList.style';
import {IHeadLinesRenderItem, ILatestHeadlinesList} from './types';

const _renderItem = ({
  item,
  index,
  navigation,
}: IHeadLinesRenderItem): JSX.Element => {
  const {colors} = useTheme();
  const handleOnCardPress = (): void => {
    navigation.navigate('news-details-screen', {articles: item});
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
    <MotiView
      from={{scale: 0, opacity: 0}}
      transition={{type: 'spring', delay: index * 45, duration: 600}}
      animate={{scale: 1, opacity: 1}}
      style={{...styles.listCardView, backgroundColor: colors.surface}}>
      <List.Item
        onPress={handleOnCardPress}
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
    </MotiView>
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
