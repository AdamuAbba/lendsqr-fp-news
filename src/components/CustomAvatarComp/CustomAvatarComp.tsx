import {Text, View} from 'react-native';
import {Avatar, Colors, TouchableRipple} from 'react-native-paper';
import {styles} from './CustomAvatarComp.style';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useAppDispatch, useAppSelector} from 'utils/hooks';
import {selectUser, setShowFPDialog} from 'features/user';
import {getInitials} from 'src/helpers/functions';

const CustomAvatarComp = () => {
  const dispatch = useAppDispatch();
  const handleShowFPDialog = (): void => {
    dispatch(setShowFPDialog(true));
  };

  const user = useAppSelector(selectUser);
  return (
    <View style={styles.container}>
      <Avatar.Image
        size={40}
        source={{
          uri: user?.photoURL,
        }}
        style={styles.avatarImage}
      />
      <View style={styles.displayNameView}>
        <TouchableRipple style={styles.iconView} onPress={handleShowFPDialog}>
          <MaterialCommunityIcons
            name="keyboard-return"
            color={Colors.white}
            size={25}
          />
        </TouchableRipple>
        <Text style={styles.text}>{getInitials(user?.displayName)}</Text>
      </View>
    </View>
  );
};

export default CustomAvatarComp;
