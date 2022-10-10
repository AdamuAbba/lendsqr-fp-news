import {IFPDialogComp} from 'src/configs/types';
import {selectShowFPDialog, setShowFPDialog} from 'src/features/user';
import {Button, Dialog, Paragraph, Portal} from 'react-native-paper';
import {useAppDispatch, useAppSelector} from 'src/utils/hooks';
import {styles} from './style';

const FPDialogComp = ({
  title,
  content,
  onConfirm,
}: IFPDialogComp): JSX.Element => {
  const showFPDialog = useAppSelector(selectShowFPDialog);
  const dispatch = useAppDispatch();
  const hideDialog = () => dispatch(setShowFPDialog(false));

  return (
    <Portal>
      <Dialog visible={showFPDialog} onDismiss={hideDialog}>
        <Dialog.Title style={styles.title}>{title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph style={{alignSelf: 'center'}}>{content}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          <Button onPress={onConfirm}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default FPDialogComp;
