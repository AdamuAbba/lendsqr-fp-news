import React from 'react';
import {View} from 'react-native';
import {
  Colors,
  Paragraph,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import {styles} from './BreakMe.styles';

const BreakMe = (): JSX.Element => {
  const {colors} = useTheme();

  const handleErrorBtn = () => {
    const breakMe = undefined;
    //@ts-ignore
    breakMe.itIsFinish;
  };

  const ErrorBtn = (): JSX.Element => {
    return (
      <TouchableRipple
        onPress={handleErrorBtn}
        rippleColor={colors.primary}
        style={{
          ...styles.errorBtnMainView,
          backgroundColor: colors.surface,
        }}>
        <Text
          style={{
            color: Colors.white,
          }}>
          Press this button
        </Text>
      </TouchableRipple>
    );
  };

  return (
    <View style={styles.container}>
      <Paragraph
        style={{
          ...styles.text,
        }}>
        Whatever you do, don't press this button
        {'\n'}👇
      </Paragraph>
      <ErrorBtn />
    </View>
  );
};

export default BreakMe;
