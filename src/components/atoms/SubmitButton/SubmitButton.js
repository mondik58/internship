import { Button } from '@mui/material';
import { useFormikContext } from 'formik';


const SubmitButton = ({ children }) => {

  const { submitForm } = useFormikContext();
  
  const configButton = {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    onClick: submitForm,
  }
  return (
      <Button { ...configButton }>{children}</Button>
  );
}

export default SubmitButton;
