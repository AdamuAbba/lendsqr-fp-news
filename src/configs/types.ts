import {DrawerHeaderProps} from '@react-navigation/drawer';
import {RouteProp} from '@react-navigation/native';
import {StackHeaderProps} from '@react-navigation/stack';
import {ComponentProps} from 'react';
import {TextInput} from 'react-native-paper';
import store from 'src/features/store';
import {LoginSchema} from 'src/utils/schemas/login';
import {SignUpSchema} from 'src/utils/schemas/signUp';
import * as yup from 'yup';
import {IMainStackParamsList} from '../routes/types';

//redux types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface IUserSliceInitialState {
  isLoggedIn: boolean;
  showFPDialog: boolean;
  userFormData: IUserFormData | {};
  user: IUser | null;
}
export interface IUser {
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: Metadata;
  phoneNumber: string | null;
  photoURL: string | null;
  uid: string;
  providerId: string;
}

interface Metadata {
  creationTime?: string;
  lastSignInTime?: string;
}

type IUserFormData = Omit<ISignUpFormValues, 'createdOn'> & {
  createdOn: string;
};

export interface GenericFirebaseApiResponse {
  fulfilled: string;
  rejected: any;
  pending: boolean;
}

export type IFPDialogComp = {
  title: string;
  content: string;
  onConfirm: () => void;
};

export type IFPTextInput = ComponentProps<typeof TextInput> & {
  icon: string;
  errorText?: string;
};

export type ICustomHeader = Pick<StackHeaderProps, 'back' | 'navigation'> & {
  route: RouteProp<IMainStackParamsList, keyof IMainStackParamsList>;
};

export type ISignUpFormValues = yup.InferType<typeof SignUpSchema>;
export type ILoginFormValues = yup.InferType<typeof LoginSchema>;

export interface LatestHeadlines {
  status: string;
  articles: Articles[];
  user_input: User_input;
}

export interface Articles {
  summary: string;
  country: string;
  author: string;
  link: string;
  language: string;
  media: string;
  title: string;
  media_content: string[];
  clean_url: string;
  rights: string;
  rank: number;
  topic: string;
  published_date: string;
  _id: string;
}

interface User_input {
  lang: string;
  country: string | null;
  topic: string | null;
  media: string;
}
