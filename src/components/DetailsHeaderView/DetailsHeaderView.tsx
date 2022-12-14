import {MaterialIcons} from '@expo/vector-icons';
import React from 'react';
import {View} from 'react-native';
import {Surface, Text, useTheme} from 'react-native-paper';
import {FPTime} from 'utils/constants';
import {styles} from './DetailsHeaderView.styles';
import {IDetailsHeaderView} from './types';

const DetailsHeaderView = ({
  published_date,
  title,
  topic,
}: IDetailsHeaderView): JSX.Element => {
  const {colors} = useTheme();

  const Title = (): JSX.Element => {
    return (
      <View style={styles.dateView}>
        <MaterialIcons
          name="article"
          color={colors.primary}
          size={20}
          style={styles.iconConfig}
        />
        <Text style={styles.titleText}>{title}</Text>
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
          <Text>{topic}</Text>
        </View>
        <View style={styles.dateView}>
          <MaterialIcons
            name="calendar-today"
            color={colors.primary}
            size={20}
            style={styles.iconConfig}
          />
          <Text>{FPTime(published_date)}</Text>
        </View>
      </View>
    );
  };
  return (
    <Surface style={{...styles.listCardView, backgroundColor: colors.surface}}>
      <Title />
      <Description />
    </Surface>
  );
};

export default DetailsHeaderView;
