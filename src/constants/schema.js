import * as Yup from 'yup';
import { PASSWORD_VALIDATION, EMAIL_VALIDATION, PASSWORD_LONGER } from './regExp';

export const VALIDATION_SCHEMA = Yup.object().shape({
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),
  email: Yup.string()
    .required('Required')
    .matches(EMAIL_VALIDATION, 'Invalid email, example@gmail.com'),
  password: Yup.string()
    .required('Password is required')
    .min(PASSWORD_LONGER, 'Your password must be longer than 6 characters.')
    .matches(PASSWORD_VALIDATION, 'Password must contain at least 6 characters, one uppercase, one number and one special case character')
});
