import {TextField} from '@mui/material';
import {useField} from 'formik';

const Input = (props) => {
  const [field, meta] = useField(props);
  const helperText = meta.error && meta.touched && meta.error;
  console.log(field)
  return (
    <TextField 
      {...field}
      {...props} 
      fullWidth 
      variant='standard'
      helperText={helperText}
      error={Boolean(helperText)}
      inputProps={{
        'data-testid': field.name
      }}
    />
  );
}

export default Input;
