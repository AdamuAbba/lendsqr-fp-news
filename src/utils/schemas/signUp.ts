import * as yup from 'yup';

export const SignUpSchema = yup.object({
  fullName: yup.string().required('field cannot be empty'),
  phoneNumber: yup
    .string()
    .required('field cannot be empty')
    .matches(/^[0-9]+$/, 'only numbers allowed')
    .max(15, 'cannot exceed 15 characters')
    .min(11, 'minimum of 11 characters'),
  email: yup.string().email().required('field cannot be empty'),
  createdOn: yup.date().default(() => new Date()),
});
