import * as Yup from 'yup';
import {PASSWORD_REGEX, EMAIL_REGEX, MIN_PASSWORD_LENGTH} from 'constants/regExp';

export const SIGNUP_SCHEMA = Yup.object().shape({
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),
  email: Yup.string()
    .required('Required')
    .matches(EMAIL_REGEX, 'Invalid email, example@gmail.com'),
  password: Yup.string()
    .required('Password is required')
    .min(MIN_PASSWORD_LENGTH, 'Your password must be longer than 6 characters.')
    .matches(PASSWORD_REGEX, 'Password must contain at least 6 characters, one uppercase, one number and one special case character')
});
