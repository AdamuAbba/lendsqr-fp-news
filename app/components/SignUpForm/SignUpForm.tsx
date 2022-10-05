import RadTextInput from 'components/RadTextInput';
import { ISignUpForm, ISignUpFormValues } from 'configs/types';
import { Formik } from 'formik';
import { View as MotiView } from 'moti';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Button, withTheme } from 'react-native-paper';
import { useSignUpMutation } from 'services/api/radApi';
import { SignUpSchema } from 'utils/schemas/signUp';
import { styles } from './style';

const SignUpForm = ({ theme }: ISignUpForm): JSX.Element => {
  const [signUp, { isLoading }] = useSignUpMutation();

  const onSubmitHandler = async (values: ISignUpFormValues) => {
    await signUp(values);
  };

  const InitialValues: ISignUpFormValues = {
    username: '',
    email: '',
    password: '',
    createdOn: new Date(),
  };

  return (
    <Formik
      validationSchema={SignUpSchema}
      initialValues={InitialValues}
      onSubmit={(values) => onSubmitHandler(values)}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        touched,
      }) => (
        <View style={styles.container}>
          <View
            style={{
              borderBottomColor: theme?.colors.primary,
              borderBottomWidth: 3,
              paddingBottom: 17,
            }}
          >
            <Text style={styles.formHeader}>Join us</Text>
          </View>
          <ScrollView scrollEnabled>
            <MotiView
              from={{ translateX: 100, opacity: 0 }}
              transition={{ type: 'spring', delay: 600, duration: 1000 }}
              animate={{ translateX: 0, opacity: 1 }}
              style={{ marginTop: 10 }}
            >
              <RadTextInput
                value={values.username}
                theme={theme}
                icon="account"
                label="username"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                error={errors.username && touched.username ? true : false}
                errorText={errors.username}
              />
            </MotiView>
            <MotiView
              from={{ translateX: 100, opacity: 0 }}
              transition={{ type: 'spring', delay: 700, duration: 1000 }}
              animate={{ translateX: 0, opacity: 1 }}
            >
              <RadTextInput
                label="email"
                value={values.email}
                theme={theme}
                icon="email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                error={errors.email && touched.email ? true : false}
                errorText={errors.email}
              />
            </MotiView>
            <MotiView
              from={{ translateX: 100, opacity: 0 }}
              transition={{ type: 'spring', delay: 800, duration: 1000 }}
              animate={{ translateX: 0, opacity: 1 }}
            >
              <RadTextInput
                label="password"
                value={values.password}
                theme={theme}
                secureTextEntry={true}
                icon="lock"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={errors.password && touched.password ? true : false}
                errorText={errors.password}
              />
            </MotiView>

            <MotiView
              from={{ translateX: 100, opacity: 0 }}
              transition={{ type: 'spring', delay: 900, duration: 1000 }}
              animate={{ translateX: 0, opacity: 1 }}
            >
              <TouchableOpacity
                style={styles.forgotView}
                onPress={() => console.log('forgot password')}
              >
                <Text style={styles.forgotText}>forgot Password ?</Text>
              </TouchableOpacity>
            </MotiView>
            <Button
              style={{ width: '50%', alignSelf: 'center', marginBottom: 50 }}
              labelStyle={{ color: 'white' }}
              mode="contained"
              onPress={handleSubmit}
              loading={isLoading}
            >
              submit
            </Button>
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};

export default withTheme(SignUpForm);
