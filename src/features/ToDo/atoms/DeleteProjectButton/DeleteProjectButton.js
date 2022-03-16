import React from 'react';
import {useNavigate} from 'react-router-dom'
import {Button} from '@mui/material';
import {useMutation} from 'urql';
import {Delete} from '@material-ui/icons';

import {DELETE_PROJECT} from 'mutations/DeleteProject/DeleteProject';
import {ROUTES} from 'constants/routes';

const DeleteProjectButton = ({id}) => {
  const navigate = useNavigate();
  const [{fetching}, deleteProject] = useMutation(DELETE_PROJECT);

  const onDelete = async (id) => {
    const response = await deleteProject({id});
    if(!response.error) navigate(ROUTES.HOME);
  }

  return (
    <Button 
      fullWidth 
      variant="contained" 
      color="error"
      onClick={() => onDelete(id)} 
      disabled={fetching}
    >
      <Delete fontSize="large" /> DELETE
    </Button>
  )
};

export default DeleteProjectButton;
