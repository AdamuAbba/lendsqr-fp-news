import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUserSliceInitialState} from 'src/configs/types';

const initialState: IUserSliceInitialState = {
  isLoggedIn: false,
  showFPDialog: false,
  userFormData: {},
  user: null,
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
      console.log(state.userFormData);
    },
    setUser: (
      state,
      {payload}: PayloadAction<IUserSliceInitialState['user']>,
    ) => {
      state.user = payload;
      console.log(state.user);
    },
  },
});

export const {setIsLoggedIn, setShowFPDialog, setUserFormData, setUser} =
  userSlice.actions;

export default userSlice;
