import {RootState} from 'src/configs/types';

const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
const selectShowFPDialog = (state: RootState) => state.user.showFPDialog;
const selectUser = (state: RootState) => state.user.user;

export {selectIsLoggedIn, selectShowFPDialog, selectUser};
