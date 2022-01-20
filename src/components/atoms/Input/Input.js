import {TextField} from '@mui/material';
import {useField} from 'formik';

const Input = (props) => {
  const [field, meta] = useField(props);
  const helperText = meta.error && meta.touched && meta.error;
  return (
    <TextField 
      {...field}
      {...props} 
      fullWidth 
      variant='standard'
      helperText={helperText}
      error={Boolean(helperText)}
    />
  );
}

export default Input;
