import {errorCatcher} from 'middleware/errorCatcher';
import {IEventData} from './types';
import {IUser} from 'configs/types';
import * as analytics from 'expo-firebase-analytics';

const logEvent = async (
  user: IUser,
  EventData: IEventData | undefined,
): Promise<void> => {
  try {
    await analytics.setUserId(user.uid);
    await analytics.setUserProperties({
      email: user.email,
      displayName: user.displayName,
      uid: user.uid,
    });
    await analytics.logEvent('btn_press_trigger', EventData);
  } catch (error: any) {
    await errorCatcher(user, error);
    console.log(error.message);
  }
};

export {logEvent};
