import { IRadDialogComp } from 'configs/types';
import { selectShowRadDialog, setShowRadDialog } from 'features/user';
import { Button, Dialog, Paragraph, Portal } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { styles } from './style';

const RadDialogComp = ({
  title,
  content,
  onConfirm,
}: IRadDialogComp): JSX.Element => {
  const showRadDialog = useAppSelector(selectShowRadDialog);
  const dispatch = useAppDispatch();
  const hideDialog = () => dispatch(setShowRadDialog(false));

  return (
    <Portal>
      <Dialog visible={showRadDialog} onDismiss={hideDialog}>
        <Dialog.Title style={styles.title}>{title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{content}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          <Button onPress={onConfirm}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default RadDialogComp;
