import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import colors from 'configs/colors';
import AwesomeAlert from 'react-native-awesome-alerts';
import CustomAvatarComp from 'components/CustomAvatarComp';
import { globalStyles } from 'configs/GlobalStyle';
import { styles } from './style';
import { useAppDispatch } from 'utils/hooks';
import { auth } from 'configs/firebase';
import RadDialogComp from 'components/RadDialogComp';
import { setShowRadDialog } from 'features/user';
import { useSignOutMutation } from 'services/api/radApi';

const CustomDrawerContent = ({ ...props }: DrawerContentComponentProps) => {
  const dispatch = useAppDispatch();
  const [signOut] = useSignOutMutation();

  const onConfirmHandler = async (): Promise<void> => {
    try {
      await signOut();
    } catch (error) {}
  };

  const onSignOutHandler = () => {
    dispatch(setShowRadDialog(true));
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContainer}
    >
      <CustomAvatarComp navigation={props.navigation} />
      <RadDialogComp
        title="sign out"
        content="Do you want to sign out?"
        onConfirm={onConfirmHandler}
      />
      <View style={{ flex: 3 }}>
        <View>
          <DrawerItemList {...props} />
        </View>
        <View>
          <DrawerItem
            icon={() => (
              <Icon
                name="logout"
                type="material"
                size={23}
                color={colors.radWhite}
              />
            )}
            label="Sign out"
            inactiveTintColor="#fff"
            onPress={onSignOutHandler}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
