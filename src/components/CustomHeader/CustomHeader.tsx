import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import CustomAvatarComp from 'components/CustomAvatarComp';
import React from 'react';
import {StatusBar} from 'react-native';
import {Appbar, useTheme} from 'react-native-paper';
import FPDialogComp from 'components/FPDialogComp';
import {ICustomHeader} from 'configs/types';
import {setIsLoggedIn, setShowFPDialog} from 'features/user';
import {useAppDispatch} from 'utils/hooks';
import {googleSignInConfig} from 'utils/constants';

const CustomHeader = ({
  navigation,
  back,
  route,
}: ICustomHeader): JSX.Element => {
  const {name} = route;
  const {colors} = useTheme();
  const dispatch = useAppDispatch();

  const handleSignOut = async (): Promise<void> => {
    try {
      await auth().signOut();
      await googleSignInConfig.signOut();
      dispatch(setIsLoggedIn(false));
      dispatch(setShowFPDialog(false));
    } catch (error) {}
  };

  return (
    <Appbar.Header theme={{colors: {primary: colors.surface}}}>
      <StatusBar backgroundColor={colors.surface} />
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content
        title="News"
        subtitle={name === 'news-details-screen' ? 'Details' : 'Listings'}
      />

      <FPDialogComp
        content="Do you want to sign out ?"
        onConfirm={handleSignOut}
        title="sign out"
      />

      <CustomAvatarComp />
    </Appbar.Header>
  );
};

export default CustomHeader;
