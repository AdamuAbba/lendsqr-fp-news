import {IFPDialogComp} from './types';
import {
  selectFcmPayload,
  selectIsFcm,
  selectShowFPDialog,
  selectUser,
  setIsFCM,
  setShowFPDialog,
} from 'features/user';
import {
  Button,
  Dialog,
  Paragraph,
  Portal,
  Text,
  useTheme,
} from 'react-native-paper';
import {useAppDispatch, useAppSelector} from 'utils/hooks';
import {styles} from './FPDialogComp.style';
import LottieView from 'lottie-react-native';
import {useRef, useEffect} from 'react';
import {View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const FPDialogComp = ({onConfirm}: IFPDialogComp): JSX.Element => {
  const showFPDialog = useAppSelector(selectShowFPDialog);
  const isFCM = useAppSelector(selectIsFcm);
  const fcmPayload = useAppSelector(selectFcmPayload);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const hideDialog = () => {
    dispatch(setShowFPDialog(false));
    dispatch(setIsFCM(false));
  };

  const {colors} = useTheme();

  const firstName = user?.displayName?.split(' ')[0];
  const lottieRef = useRef<LottieView>(null);

  const Title = (): JSX.Element => {
    return (
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Hey {firstName}</Text>
        {isFCM ? (
          <LottieView
            style={styles.lottie}
            ref={lottieRef}
            source={require('assets/images/message_arrived.json')}
            autoPlay={true}
            loop={true}
          />
        ) : null}
      </View>
    );
  };

  const DescriptionTitle = (): JSX.Element => {
    return (
      <View style={styles.dateView}>
        <MaterialIcons
          name="article"
          color={colors.primary}
          size={20}
          style={styles.iconConfig}
        />
        <Text style={styles.titleText}>
          {isFCM ? fcmPayload?.title : 'sign out'}
        </Text>
      </View>
    );
  };

  const Description = (): JSX.Element => {
    return (
      <View style={styles.dateView}>
        <MaterialIcons
          name="campaign"
          color={colors.primary}
          size={20}
          style={styles.iconConfig}
        />
        <Text>
          {' '}
          {isFCM ? fcmPayload?.body : 'Are you sure you want to sign out ?'}
        </Text>
      </View>
    );
  };

  return (
    <Portal>
      <Dialog visible={showFPDialog} onDismiss={hideDialog}>
        <Dialog.Content>
          <Title />
          <DescriptionTitle />
          <Description />
        </Dialog.Content>
        {isFCM ? (
          <Dialog.Actions>
            <Button onPress={hideDialog}>{isFCM ? 'close' : 'Cancel'}</Button>
          </Dialog.Actions>
        ) : (
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancel</Button>
            <Button onPress={onConfirm}>Ok</Button>
          </Dialog.Actions>
        )}
      </Dialog>
    </Portal>
  );
};

export default FPDialogComp;
