import { LoginSchema } from 'utils/schemas/login';
import store from 'features/store';
import { DrawerHeaderProps, DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import { SignUpSchema } from 'utils/schemas/signUp';
import { ComponentProps } from 'react';
import { TextInput } from 'react-native-paper';
import * as yup from 'yup';

//redux types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface IUserSliceInitialState {
  /**
   *firebase `UID`
   */
  userId: string | null;
  /**
   *firebase user `auth state`
   */
  isLoggedIn: boolean;
  showRadDialog: boolean;
}

export interface GenericFirebaseApiResponse {
  fulfilled: string;
  rejected: any;
  pending: boolean;
}

export type IRootStackParamsList = {
  'auth-check-screen': undefined;
  'user-auth-route': undefined;
  'app-drawer-route': undefined;
  'summary-screen': undefined;
};

export type IAuthRouteParamsList = {
  'welcome-screen': undefined;
  'register-screen': undefined;
  'login-screen': undefined;
};

export type IHomeRouteParamsList = {
  'home-screen': undefined;
  'contact-us': undefined;
};

export type IAppDrawerRouteParamsList = {
  'home-route': undefined;
  'about-us-screen': undefined;
  'request-screen': undefined;
};

export type IAuthCheckScreen = {
  navigation: StackScreenProps<
    IRootStackParamsList,
    'auth-check-screen'
  >['navigation'];
};

export type IAboutUsScreenProps = {
  navigation: DrawerScreenProps<
    IAppDrawerRouteParamsList,
    'about-us-screen'
  >['navigation'];
};

export type IWelcomeScreen = {
  navigation: StackScreenProps<
    IAuthRouteParamsList,
    'welcome-screen'
  >['navigation'];
};
export type IRegisterScreen = {
  navigation: StackScreenProps<
    IAuthRouteParamsList,
    'register-screen'
  >['navigation'];
};
export type ILoginScreen = {
  navigation: StackScreenProps<
    IAuthRouteParamsList,
    'login-screen'
  >['navigation'];
};

export type ISignUpForm = {
  navigation: IRegisterScreen['navigation'];
  theme: ReactNativePaper.Theme | undefined;
};
export type ILoginForm = {
  theme: ReactNativePaper.Theme | undefined;
};

export type IRadTextInput = ComponentProps<typeof TextInput> & {
  icon: string;
  errorText?: string;
};

export type IAppDrawerRoute = {
  theme: ReactNativePaper.Theme | undefined;
};

export type IRadDialogComp = {
  title: string;
  content: string;
  onConfirm: () => void;
};

export type ICustomAvatarComp = Pick<DrawerHeaderProps, 'navigation'>;

export type ISignUpFormValues = yup.InferType<typeof SignUpSchema>;
export type ILoginFormValues = yup.InferType<typeof LoginSchema>;
