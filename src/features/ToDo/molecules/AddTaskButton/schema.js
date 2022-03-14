import * as Yup from 'yup';
import {MIN_DESCRIPTION_LENGTH} from 'constants/helpers';

export const TASK_SCHEMA = Yup.object().shape({
  content: Yup.string()
    .min(MIN_DESCRIPTION_LENGTH, `Description can't be less than ${MIN_DESCRIPTION_LENGTH} characters`)
    .required('Required'),
});
