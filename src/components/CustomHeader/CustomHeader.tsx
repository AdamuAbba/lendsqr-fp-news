import auth from '@react-native-firebase/auth';
import CustomAvatarComp from 'components/CustomAvatarComp';
import FPDialogComp from 'components/FPDialogComp';
import {ICustomHeader} from 'configs/types';
import {setIsLoggedIn, setShowFPDialog} from 'features/user';
import React from 'react';
import {StatusBar} from 'react-native';
import {Appbar, useTheme} from 'react-native-paper';
import {googleSignInConfig} from 'utils/constants';
import {useAppDispatch} from 'utils/hooks';

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

      <FPDialogComp onConfirm={handleSignOut} />

      <CustomAvatarComp />
    </Appbar.Header>
  );
};

export default CustomHeader;
