import FPTextInput from 'components/FPTextInput';
import {ISignUpFormValues} from 'configs/types';
import {setUserFormData} from 'features/user';
import {Formik} from 'formik';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {Button, Surface, Text, useTheme} from 'react-native-paper';
import {ISignUpTabsScreenProps} from 'routes/types';
import {useAppDispatch} from 'utils/hooks';
import {SignUpSchema} from 'utils/schemas/signUp';
import {styles} from './SignUpForm.styles';

const SignUpForm = ({
  navigation,
}: ISignUpTabsScreenProps<'sign-up-form-screen'>): JSX.Element => {
  const dispatch = useAppDispatch();
  const {colors} = useTheme();

  const onSubmitHandler = async (values: ISignUpFormValues) => {
    dispatch(
      setUserFormData({...values, createdOn: values.createdOn.toISOString()}),
    );
    navigation.navigate('google-connect-screen');
  };

  const handleLogin = (): void => {
    console.log('login pressed');
    navigation.navigate('login-screen');
  };

  const InitialValues: ISignUpFormValues = {
    fullName: '',
    phoneNumber: '',
    email: '',
    createdOn: new Date(),
  };

  return (
    <Formik
      validationSchema={SignUpSchema}
      initialValues={InitialValues}
      onSubmit={values => onSubmitHandler(values)}>
      {({errors, handleBlur, handleChange, handleSubmit, values, touched}) => (
        <Surface style={{...styles.container, backgroundColor: colors.surface}}>
          <View style={{...styles.cardBody, borderBottomColor: colors.primary}}>
            <Text>sign up</Text>
          </View>
          <ScrollView scrollEnabled>
            <FPTextInput
              style={{marginTop: 10}}
              value={values.fullName}
              icon="account"
              label="full Name"
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              error={errors.fullName && touched.fullName ? true : false}
              errorText={errors.fullName}
            />

            <FPTextInput
              label="phone number"
              value={values.phoneNumber}
              icon="cellphone"
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              error={errors.phoneNumber && touched.phoneNumber ? true : false}
              errorText={errors.phoneNumber}
            />

            <FPTextInput
              label="email"
              value={values.email}
              icon="email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email && touched.email ? true : false}
              errorText={errors.email}
            />

            <Button
              style={{width: '40%', alignSelf: 'center', marginTop: 30}}
              labelStyle={{color: 'white'}}
              mode="contained"
              onPress={handleSubmit}>
              Next
            </Button>
            <View style={styles.loginView}>
              <Text style={{color: 'white'}}>Have an account already ? </Text>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}>
                <Text style={{color: colors.primary}}>Login</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Surface>
      )}
    </Formik>
  );
};

export default SignUpForm;
