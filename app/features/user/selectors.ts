import { RootState } from 'configs/types';

const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
const selectShowRadDialog = (state: RootState) => state.user.showRadDialog;

export { selectIsLoggedIn, selectShowRadDialog };
