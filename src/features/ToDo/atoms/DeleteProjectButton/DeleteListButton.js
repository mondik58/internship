import React from 'react';
import {useNavigate} from 'react-router-dom'
import {Button} from '@mui/material';
import {useMutation} from 'urql';
import {Delete} from '@material-ui/icons';

import {DELETE_LIST} from 'mutations/List/DeleteList';
import {ROUTES} from 'constants/routes';

const DeleteProjectButton = ({id}) => {
  const navigate = useNavigate();
  const [{fetching}, deleteProject] = useMutation(DELETE_LIST);

  const onDelete = async () => {
    const response = await deleteProject({id});
    if(!response.error) navigate(ROUTES.HOME);
  }

  return (
    <Button 
      fullWidth 
      variant="contained" 
      color="error"
      onClick={onDelete} 
      disabled={fetching}
      data-testid="delete-list"
    >
      <Delete fontSize="large" /> DELETE
    </Button>
  )
};

export default DeleteProjectButton;
