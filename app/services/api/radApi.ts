import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { auth, db } from 'configs/firebase';
import { ILoginFormValues, ISignUpFormValues } from 'configs/types';
import { setIsLoggedIn, setShowRadDialog } from 'features/user';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { showMessage } from 'react-native-flash-message';
import { errorConfig, successConfig } from 'utils/constants';

const radApi = createApi({
  reducerPath: 'radApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    signUp: builder.mutation<UserCredential['user']['uid'], ISignUpFormValues>({
      queryFn: async (payload) => {
        try {
          const response = await createUserWithEmailAndPassword(
            auth,
            payload.email,
            payload.password
          );
          return { data: response.user.uid };
        } catch (error) {
          return { error };
        }
      },
      onQueryStarted: async (payload, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled;
          const userDocRef = doc(db, 'users', `${data}`);
          await setDoc(userDocRef, payload);
          dispatch(setIsLoggedIn(true));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    login: builder.mutation<UserCredential['user']['uid'], ILoginFormValues>({
      queryFn: async (payload) => {
        try {
          const response = await signInWithEmailAndPassword(
            auth,
            payload.email,
            payload.password
          );
          return { data: response.user.uid };
        } catch (err: any) {
          return { error: err.message };
        }
      },
      onQueryStarted: async (payload, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled;
          showMessage({ ...successConfig, description: 'welcome back' });
          const userDocRef = doc(db, 'users', `${data}`);
          await updateDoc(userDocRef, { lastOnline: payload.lastOnline });
          dispatch(setIsLoggedIn(true));
        } catch (error) {
          console.log(error.error);
          const regX: RegExp = /\(([^)]+)\)/;
          const errorText = error.error.match(regX)[1];
          showMessage({ ...errorConfig, description: errorText });
        }
      },
    }),
    signOut: builder.mutation<void, void>({
      queryFn: async () => {
        try {
          const response = await auth.signOut();
          return { data: response };
        } catch (err) {
          return { error: err };
        }
      },
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(setShowRadDialog(false));
          dispatch(setIsLoggedIn(false));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export { radApi };
export const { useSignUpMutation, useSignOutMutation, useLoginMutation } =
  radApi;
