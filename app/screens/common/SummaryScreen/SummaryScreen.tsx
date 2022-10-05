import React from 'react';
import { View, StyleSheet } from 'react-native';
import GetRequest from '../../../components/getRequest';

import { globalStyles } from '../../../configs/GlobalStyle';
import RadishMotto from '../../../shared/RadishMotto';

const SummaryScreen = (): JSX.Element => {
  return (
    <View style={[globalStyles.container, { alignItems: 'center' }]}>
      <GetRequest />
    </View>
  );
};

export default SummaryScreen;
