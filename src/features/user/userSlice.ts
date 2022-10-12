import {IUser} from './../../configs/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {generatePushNotificationsToken} from 'helpers/functions';
import {IUserSliceInitialState} from 'src/configs/types';

const initialState: IUserSliceInitialState = {
  isLoggedIn: false,
  showFPDialog: false,
  userFormData: {},
  user: null,
  isFCM: false,
  fcmPayload: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLoggedIn: (
      state,
      {payload}: PayloadAction<IUserSliceInitialState['isLoggedIn']>,
    ) => {
      state.isLoggedIn = payload;
    },
    setShowFPDialog: (
      state,
      {payload}: PayloadAction<IUserSliceInitialState['showFPDialog']>,
    ) => {
      state.showFPDialog = payload;
    },
    setUserFormData: (
      state,
      {payload}: PayloadAction<IUserSliceInitialState['userFormData']>,
    ) => {
      state.userFormData = payload;
    },
    setUser: (
      state,
      {payload}: PayloadAction<IUserSliceInitialState['user']>,
    ) => {
      state.user = payload;
      generatePushNotificationsToken(state.user as IUser);
    },
    setIsFCM: (
      state,
      {payload}: PayloadAction<IUserSliceInitialState['isFCM']>,
    ) => {
      state.isFCM = payload;
    },
    setFcmPayload: (
      state,
      {payload}: PayloadAction<IUserSliceInitialState['fcmPayload']>,
    ) => {
      state.fcmPayload = payload;
    },
  },
});

export const {
  setIsLoggedIn,
  setShowFPDialog,
  setUserFormData,
  setUser,
  setIsFCM,
  setFcmPayload,
} = userSlice.actions;

export default userSlice;
