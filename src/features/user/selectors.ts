import {RootState} from 'src/configs/types';

const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
const selectShowFPDialog = (state: RootState) => state.user.showFPDialog;
const selectUser = (state: RootState) => state.user.user;
const selectIsFcm = (state: RootState) => state.user.isFCM;
const selectFcmPayload = (state: RootState) => state.user.fcmPayload;

export {
  selectIsLoggedIn,
  selectShowFPDialog,
  selectUser,
  selectIsFcm,
  selectFcmPayload,
};
