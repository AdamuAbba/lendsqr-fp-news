import { IUserSliceInitialState } from 'configs/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IUserSliceInitialState = {
  isLoggedIn: false,
  userId: null,
  showRadDialog: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (
      state,
      { payload }: PayloadAction<IUserSliceInitialState['userId']>
    ) => {
      state.userId = payload;
    },
    setIsLoggedIn: (
      state,
      { payload }: PayloadAction<IUserSliceInitialState['isLoggedIn']>
    ) => {
      state.isLoggedIn = payload;
    },
    setShowRadDialog: (
      state,
      { payload }: PayloadAction<IUserSliceInitialState['showRadDialog']>
    ) => {
      state.showRadDialog = payload;
    },
  },
});

export const { setUserId, setIsLoggedIn, setShowRadDialog } = userSlice.actions;

export default userSlice;
