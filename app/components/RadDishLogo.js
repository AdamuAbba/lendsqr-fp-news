import React from 'react';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { StyleSheet } from 'react-native';
const RadDishLogo = () => {
  return (
    <>
      <Avatar
        rounded
        containerStyle={styles.container}
        source={require('assets/RadishLogo.png')}
      />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 150,
    elevation: 7,
    marginRight: 4,
  },
});
export default RadDishLogo;
