import { Button } from '@mui/material';

const SubmitButton = ({children}) => (
      <Button 
        variant='contained'
        color='primary'
        fullWidth
        type='submit'
      >
        {children}
      </Button>
);

export default SubmitButton;
