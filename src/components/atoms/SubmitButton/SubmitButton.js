import {Button, CircularProgress} from '@mui/material';

const SubmitButton = ({children, loading}) => {
  return (
    <Button 
      variant='contained'
      color='primary'
      fullWidth
      type='submit'
      disabled={loading}
      data-testid="submit"
    >
      {loading ? <CircularProgress color="success" size={25} thickness={5}/> : children}
    </Button>
  );
}

export default SubmitButton;
