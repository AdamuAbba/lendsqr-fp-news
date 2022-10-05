import { auth } from 'configs/firebase';
import { ICustomAvatarComp } from 'configs/types';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Avatar } from 'react-native-paper';
import { styles } from './style';
const CustomAvatarComp = ({ navigation }: ICustomAvatarComp) => {
  const closeAppDrawer = () => {
    navigation.closeDrawer();
  };

  return (
    <View style={styles.container}>
      <Avatar.Image
        size={150}
        source={{
          uri: 'https://cdn.dribbble.com/users/3844750/screenshots/10729124/media/2523facfa3e436b8331c316dcc4998f2.jpg?compress=1&resize=800x600',
        }}
        style={styles.avatarImage}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Icon
          name="email"
          type="material"
          color="#fff"
          size={17}
          containerStyle={{ marginRight: 5 }}
        />
        <Text style={styles.emailText}>{auth.currentUser?.email}</Text>
      </View>
    </View>
  );
};

export default CustomAvatarComp;
