import * as Yup from 'yup';
import {MIN_TITLE_LENGTH} from 'constants/auth';

export const EDIT_SCHEMA = Yup.object().shape({
  title: Yup.string()
    .min(MIN_TITLE_LENGTH, `Title can't be less than ${MIN_TITLE_LENGTH} characters`)
    .required('Enter title'),
  description: Yup.string()
    .min(MIN_TITLE_LENGTH, `Title can't be less than ${MIN_TITLE_LENGTH} characters`),
});
