import * as yup from 'yup';

export const SignUpSchema = yup.object({
  username: yup.string().required('field cannot be empty'),
  email: yup.string().email().required('field cannot be empty'),
  password: yup
    .string()
    .required('field cannot be empty')
    .min(5, 'min length 5')
    .max(8, 'max length 8'),
  createdOn: yup.date().default(() => new Date()),
});
