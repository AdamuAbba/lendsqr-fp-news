import {configureStore} from '@reduxjs/toolkit';
import api from 'services/api';
import userSlice from '../user/userSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [userSlice.name]: userSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
