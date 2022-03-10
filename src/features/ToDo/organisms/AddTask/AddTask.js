import {useState} from 'react';
import {Grid, Container, Dialog, DialogActions, DialogContent, Button, Typography} from '@mui/material';
import {makeStyles} from '@material-ui/core/styles';
import {Formik, Form} from 'formik';
import {useMutation} from 'urql';

import Input from 'components/atoms/Input';
import SubmitButton from 'components/atoms/SubmitButton';

import {TASK_SCHEMA} from './schema';
import {CREATE_TASK} from 'mutations/CreateTask/createTask';

const INITIAL_VALUES = {
  content: '',
}

const useStyles = makeStyles({
  item: {
    width: '100%',
    marginTop: "50px"
  }
});

const AddTask = ({projectId}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [{fetching}, createTask] = useMutation(CREATE_TASK);

  const onSubmit = async (values, {setSubmitting}) => {
    const result = await createTask({...values, projectId});
    setSubmitting(false);
    if (!result.error) handleClose();
  }

  return (
    <>
      <Typography 
        onClick={handleOpen} 
        align="center" 
        color='textSecondary' 
        sx={{cursor: "pointer", fontSize: "1.5rem"}}
      >
        + Add Task
      </Typography>
      <Dialog maxWidth="lg" fullWidth open={open} onClose={handleClose} aria-labelledby="customized-dialog-title">
        <DialogContent dividers>
          <Container maxWidth="lg">
            <Formik
              initialValues={INITIAL_VALUES}
              validationSchema={TASK_SCHEMA}
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
                        name="content"
                        label="Content"
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
                          <SubmitButton variant="outlined" loading={fetching}>CREATE TASK</SubmitButton>
                        </Grid>
                      </Grid>
                    </DialogActions>
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

export default AddTask;
