import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';

const UserAvatar = (): JSX.Element => {
  const image =
    'https://cdn.dribbble.com/users/3844750/screenshots/10729124/media/2523facfa3e436b8331c316dcc4998f2.jpg?compress=1&resize=800x600';

  return (
    <View style={styles.container}>
      <Avatar rounded source={{ uri: image }} />
      <Text style={styles.textView}>xxxx</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    fontSize: 12,
    color: '#fff',
  },
});
export default UserAvatar;
