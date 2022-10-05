import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { radApi } from 'services/api/radApi';
import userSlice from './../user/userSlice';

const store = configureStore({
  reducer: {
    [radApi.reducerPath]: radApi.reducer,
    [userSlice.name]: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(radApi.middleware),
});

export default store;
