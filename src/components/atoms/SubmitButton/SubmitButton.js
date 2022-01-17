import { Button, CircularProgress } from '@mui/material';

const SubmitButton = ({children, loading}) => {
  const spinner = (<CircularProgress color="success" size={25} thickness={5}/>);
  
  return (
    <Button 
    variant='contained'
    color='primary'
    fullWidth
    type='submit'
    >
      {loading ? spinner : children}
    </Button>
  );
}

export default SubmitButton;
