import { TextField } from '@mui/material';
import { useField } from 'formik';

const Input = (props) => {

  const [field, meta] = useField(props);
  const helperError = meta.error && meta.touched && meta.error;

  return (
    <>
      <TextField 
        {...field}
        {...props} 
        fullWidth 
        variant='standard'
        helperText={helperError}
        error={helperError ? true : false}
      />
    </>
  );
}

export default Input;
