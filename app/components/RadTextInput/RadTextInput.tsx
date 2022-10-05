import { IRadTextInput } from 'configs/types';
import { View } from 'react-native';
import { TextInput, Text } from 'react-native-paper';

const RadTextInput = ({
  theme,
  icon,
  error,
  errorText,
  ...props
}: IRadTextInput): JSX.Element => {
  return (
    <View
      style={{
        width: '90%',
        alignSelf: 'center',
        marginBottom: 10,
      }}
    >
      <TextInput
        {...props}
        mode="flat"
        style={{
          height: 48,
          backgroundColor: theme?.colors.background,
        }}
        left={
          <TextInput.Icon
            color={(isTextInputFocused: boolean) =>
              isTextInputFocused
                ? theme?.colors.primary
                : theme?.colors.disabled
            }
            icon={icon}
          />
        }
      />
      {error ? (
        <Text
          style={{
            color: theme?.colors?.error,
          }}
        >
          {errorText}
        </Text>
      ) : null}
    </View>
  );
};

export default RadTextInput;
