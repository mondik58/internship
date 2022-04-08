import * as Yup from 'yup';

export const LOGIN_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .required('Required')
    .email('Please enter the valid email'),
  password: Yup.string()
    .required('Password is required')
});
