import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {Articles} from 'configs/types';

export type AllScreenParamsList = {articles: Articles};

export type ISignUpTabsParamsList = {
  'sign-up-form-screen': undefined;
  'google-connect-screen': undefined;
};

export type IAuthStackParamsList = {
  'sign-up-screen': undefined;
  'login-screen': undefined;
};

export type IMainStackParamsList = {
  'news-listing-screen': undefined;
  'news-details-screen': {articles: Articles};
};

export type IAuthCheckStackParamsList = {
  'auth-stack': undefined;
  'main-stack': undefined;
  'auth-check-screen': undefined;
};

export type IMainStackScreenProps<T extends keyof IMainStackParamsList> =
  StackScreenProps<IMainStackParamsList, T>;

export type IAuthStackScreenProps<T extends keyof IAuthStackParamsList> =
  StackScreenProps<IAuthStackParamsList, T>;

export type ISignUpTabsScreenProps<T extends keyof ISignUpTabsParamsList> =
  CompositeScreenProps<
    MaterialTopTabScreenProps<ISignUpTabsParamsList, T>,
    StackScreenProps<IAuthStackParamsList, 'sign-up-screen'>
  >;
