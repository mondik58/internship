import { Button } from '@mui/material';
import { useFormikContext } from 'formik';
import React from 'react';


const ButtonWrapper = ({children, ...props}) => {

  const {submitForm} = useFormikContext();
  const onSubmit = () => {
    submitForm();
  }

  const configButton = {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    onClick: onSubmit
  }
  return (
      <Button {...configButton}>{children}</Button>
  );
}

export default ButtonWrapper;
