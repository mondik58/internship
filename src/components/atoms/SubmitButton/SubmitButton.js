import { Button } from '@mui/material';


const SubmitButton = ({ children }) => {
  
  const configButton = {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    type: 'submit'
  }
  return (
      <Button { ...configButton }>{children}</Button>
  );
}

export default SubmitButton;
