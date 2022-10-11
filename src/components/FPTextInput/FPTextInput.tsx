import {IFPTextInput} from 'src/configs/types';
import {View} from 'react-native';
import {TextInput, Text, useTheme} from 'react-native-paper';
import {styles} from './FPTextInput.styles';

const FPTextInput = ({
  icon,
  error,
  errorText,
  ...props
}: IFPTextInput): JSX.Element => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <TextInput
        returnKeyType="done"
        {...props}
        mode="flat"
        style={styles.textInput}
        underlineColor="#fff"
        selectionColor="#fff"
        placeholderTextColor="#fff"
        left={
          <TextInput.Icon
            color={(isTextInputFocused: boolean) =>
              isTextInputFocused ? colors.primary : '#fff'
            }
            icon={icon}
          />
        }
      />
      {error ? (
        <Text
          style={{
            color: colors?.error,
          }}>
          {errorText}
        </Text>
      ) : null}
    </View>
  );
};

export default FPTextInput;
