import {IUser} from 'configs/types';
import * as Random from 'expo-random';
import {isDevice} from 'expo-device';
import {openSettings} from 'expo-linking';
import {
  getPermissionsAsync,
  requestPermissionsAsync,
  getExpoPushTokenAsync,
} from 'expo-notifications';
import {Alert} from 'react-native';
import {UsersCollection} from 'utils/constants';

/**
 * a function that takes the authenticated user `displayName` and return the initials
 * @param `string`
 * @returns `initials`
 */
const getInitials = (someString: string) => {
  if (typeof someString === 'undefined') {
    return 'No Name';
  } else {
    const names: string[] = someString.split(' ');
    var initials: string = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials.split('').join(' . ');
  }
};

/**
 * random number generator
 * @returns string of `numbers`
 */
const idGenerator = (): string => {
  var id = Random.getRandomBytes(4);
  const finalId = id.join('');
  return finalId;
};

const generatePushNotificationsToken = async (user: IUser): Promise<void> => {
  if (!isDevice) {
    throw new Error(
      'Sorry, Push Notifications are only supported on physical devices.',
    );
  }

  const {status: existingStatus} = await getPermissionsAsync();

  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const {status} = await requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    Alert.alert(
      'Error',
      'Sorry, we need your permission to enable Push Notifications. Please enable it in your privacy settings.',
      [
        {
          text: 'OK',
        },
        {
          text: 'Open Settings',
          onPress: async () => openSettings(),
        },
      ],
    );
  }

  const {data} = await getExpoPushTokenAsync();
  console.log('push notification token : ', data);

  try {
    await UsersCollection.doc(user.uid).set({...user, ExpoPushToken: data});
  } catch (error) {
    console.log(error);
  }
};

export {getInitials, idGenerator, generatePushNotificationsToken};
