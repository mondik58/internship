import {useState} from 'react';
import {Grid, Container, Dialog, DialogActions, DialogContent, SpeedDial, SpeedDialIcon, Button} from '@mui/material';
import {makeStyles} from '@material-ui/core/styles';
import {Formik, Form} from 'formik';
import {useMutation} from 'urql';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, DateTimePicker} from "@material-ui/pickers";

import Input from 'components/atoms/Input';
import SubmitButton from 'components/atoms/SubmitButton';

import {PROJECT_SCHEMA} from './validationSchema';
import {CREATE_LIST} from 'mutations/List/CreateList';

const useStyles = makeStyles({
  item: {
    width: '100%',
    marginTop: "50px"
  }
});

const INITIAL_VALUES = {
  title: '',
  description: '',
  deadline: new Date(),
}

const ToDoModal = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [{fetching}, createProject] = useMutation(CREATE_LIST);
  
  const onSubmit = async (values, {setSubmitting}) => {
    const result = await createProject(values);
    setSubmitting(false);
    if (!result.error) handleClose();
  }

  return (
    <>
      <SpeedDial 
        onClick={handleOpen} 
        ariaLabel="Open todo list creation modal"
        icon={<SpeedDialIcon />}
        sx={{position: 'absolute', bottom: 10, right: 10}}
        FabProps={{
          'data-testid': 'open-modal'
        }}
      />
      <Dialog 
        maxWidth="lg" 
        fullWidth open={open} 
        onClose={handleClose} 
        aria-labelledby="customized-dialog-title"
        data-testid="create-list"
      >
        <DialogContent dividers>
          <Container maxWidth="lg">
            <Formik
              initialValues={INITIAL_VALUES}
              validationSchema={PROJECT_SCHEMA}
              onSubmit={onSubmit}
            >
              {props => (
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
                      <Grid className={classes.item}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <DateTimePicker
                            TextFieldComponent={props => (<Input name="deadline" {...props} />) }
                            onChange={value => props.setFieldValue("deadline", value)}
                            label="Deadline"
                            value={props.values.deadline}
                            disablePast
                          />
                        </MuiPickersUtilsProvider>
                      </Grid>
                      <DialogActions sx={{width: "100%", mt: 5} }>
                        <Grid 
                          container 
                          justifyContent="space-between" 
                          direction="row" 
                        >
                          <Grid item>
                            <Button data-tesid="close" fullWidth variant="outlined" onClick={handleClose}>NO, THANKS</Button>
                          </Grid>
                          <Grid item>
                            <SubmitButton variant="outlined" loading={fetching}>CREATE LIST</SubmitButton>
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

export default ToDoModal;
