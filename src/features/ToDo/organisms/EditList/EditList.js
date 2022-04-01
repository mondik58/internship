import {useState} from 'react';
import {Grid, Container, Alert, Dialog, DialogActions, DialogContent, Button, IconButton} from '@mui/material';
import {makeStyles} from '@material-ui/core/styles';
import {Formik, Form} from 'formik';
import {useMutation, useQuery} from 'urql';
import {Edit} from '@material-ui/icons';
import {useParams} from 'react-router-dom';

import Input from 'components/atoms/Input';
import SubmitButton from 'components/atoms/SubmitButton';
import {GET_TASK} from 'queries/GetTask/GetTask';

import {EDIT_SCHEMA} from './schema';
import {UPDATE_LIST} from 'mutations/UpdateList/UpdateList';

const useStyles = makeStyles({
  item: {
    width: '100%',
    marginTop: "50px"
  }
});

const EditList = () => {
  const {id} = useParams();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [result, updateProject] = useMutation(UPDATE_LIST);
  const {fetching, error} = result;

  const [{data}] = useQuery({
    query: GET_TASK,
    variables: {id}
  });

  const project = data?.project;

  const INITIAL_VALUES = {
    title: project?.title || '',
    description: project?.description  || '',
  }
  
  const onSubmit = async (values, {setSubmitting}) => {
    const result = await updateProject({...values, id});
    setSubmitting(false);
    if (!result.error) handleClose();
  }

  return (
    <>
      <IconButton
        onClick={handleOpen}
        color="inherit" 
        size="medium"
        data-testid="open-edit-list"
      >
        <Edit />
      </IconButton>
      <Dialog 
        maxWidth="lg" 
        fullWidth 
        open={open} 
        onClose={handleClose} 
        data-testid="update-list"
      >
        <DialogContent dividers>
          <Container maxWidth="lg">
            <Formik
              initialValues={INITIAL_VALUES}
              validationSchema={EDIT_SCHEMA}
              onSubmit={onSubmit}
            >
              {() => (
                <Form>
                  <Grid 
                    container 
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid className={classes.item}>
                      <Input 
                        name="title"
                        label="Title"
                      />
                    </Grid>
                    <Grid className={classes.item}>
                      <Input 
                        name="description"
                        label="Description"
                      />
                    </Grid>
                    <DialogActions sx={{width: "100%", mt: 5} }>
                      <Grid 
                        container 
                        justifyContent="space-between" 
                        direction="row" 
                      >
                        <Grid item>
                          <Button fullWidth variant="outlined" onClick={handleClose}>NO, THANKS</Button>
                        </Grid>
                        <Grid item>
                          <SubmitButton variant="outlined" loading={fetching}>UPDATE LIST</SubmitButton>
                        </Grid>
                      </Grid>
                    </DialogActions>
                    {error && 
                      <Grid sx={{width: "100%", marginTop: "30px"}} item xs={12}>
                        <Alert severity="error">{error.message}</Alert>
                      </Grid>
                    }
                  </Grid>
                </Form>
              )}
            </Formik>
          </Container>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default EditList;
