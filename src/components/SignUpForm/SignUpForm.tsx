import {useNavigation} from '@react-navigation/native';
import FPTextInput from 'src/components/FPTextInput';
import {ISignUpFormValues} from 'src/configs/types';
import {setUserFormData} from 'src/features/user';
import {Formik} from 'formik';
import {View as MotiView} from 'moti';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {Button, Surface, useTheme, Text} from 'react-native-paper';
import {useAppDispatch} from 'src/utils/hooks';
import {SignUpSchema} from 'src/utils/schemas/signUp';
import {styles} from './SignUpForm.styles';

const SignUpForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {colors} = useTheme();
  const navigation = useNavigation();

  const onSubmitHandler = async (values: ISignUpFormValues) => {
    dispatch(
      setUserFormData({...values, createdOn: values.createdOn.toISOString()}),
    );
    navigation.navigate('google-connect-screen');
  };

  const handleLogin = (): void => {
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
          <View style={styles.cardBody}>
            <Text>sign up</Text>
          </View>
          <ScrollView scrollEnabled>
            <MotiView
              from={{translateX: 100, opacity: 0}}
              transition={{type: 'spring', delay: 600, duration: 1000}}
              animate={{translateX: 0, opacity: 1}}
              style={{marginTop: 10}}>
              <FPTextInput
                value={values.fullName}
                icon="account"
                label="full Name"
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                error={errors.fullName && touched.fullName ? true : false}
                errorText={errors.fullName}
              />
            </MotiView>
            <MotiView
              from={{translateX: 100, opacity: 0}}
              transition={{type: 'spring', delay: 800, duration: 1000}}
              animate={{translateX: 0, opacity: 1}}>
              <FPTextInput
                label="phone number"
                value={values.phoneNumber}
                icon="cellphone"
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                error={errors.phoneNumber && touched.phoneNumber ? true : false}
                errorText={errors.phoneNumber}
              />
            </MotiView>
            <MotiView
              from={{translateX: 100, opacity: 0}}
              transition={{type: 'spring', delay: 700, duration: 1000}}
              animate={{translateX: 0, opacity: 1}}>
              <FPTextInput
                label="email"
                value={values.email}
                icon="email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                error={errors.email && touched.email ? true : false}
                errorText={errors.email}
              />
            </MotiView>

            <Button
              style={{width: '40%', alignSelf: 'center', marginTop: 30}}
              labelStyle={{color: 'white'}}
              mode="contained"
              onPress={() => navigation.navigate('google-connect-screen')}>
              Next
            </Button>
            <MotiView
              from={{translateX: 100, opacity: 0}}
              transition={{type: 'spring', delay: 900, duration: 1000}}
              animate={{translateX: 0, opacity: 1}}
              style={styles.loginView}>
              <Text style={{color: 'white'}}>Have an account already ? </Text>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}>
                <Text style={{color: colors.primary}}>Login</Text>
              </TouchableOpacity>
            </MotiView>
          </ScrollView>
        </Surface>
      )}
    </Formik>
  );
};

export default SignUpForm;
