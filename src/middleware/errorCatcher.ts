import {idGenerator} from 'helpers/functions';
import crashlytics from '@react-native-firebase/crashlytics';
import {IUser} from 'configs/types';
import {FPTime} from 'utils/constants';

const errorCatcher = async (user: IUser, errorData: any): Promise<void> => {
  try {
    await Promise.all([
      crashlytics().log(`error detected on ${user.displayName}'s device`),
      crashlytics().setUserId(user.uid),
      crashlytics().setAttributes({
        //@ts-ignore
        user_email: user.email,
        //@ts-ignore
        user_name: user.displayName,
        //@ts-ignore
        error_time: FPTime(new Date()),
        //@ts-ignore
        sign_in_time: user.lastSignInTime,
        //@ts-ignore
        error_id: idGenerator(),
      }),
      crashlytics().recordError(errorData),
    ]);
  } catch (error: any) {
    crashlytics().recordError(error);
    console.log(error.message);
  }
};

export {errorCatcher};
