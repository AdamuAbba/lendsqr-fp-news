import {IFPTextInput} from 'src/configs/types';
import {View} from 'react-native';
import {TextInput, Text, useTheme} from 'react-native-paper';

const FPTextInput = ({
  icon,
  error,
  errorText,
  ...props
}: IFPTextInput): JSX.Element => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
      }}>
      <TextInput
        {...props}
        mode="flat"
        style={{
          height: 48,
          backgroundColor: 'transparent',
        }}
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
