import { Grid, Container, CircularProgress } from '@mui/material';
import { Formik, Form} from 'formik';
import { useNavigate } from "react-router-dom";
import { useMutation } from 'urql';

import Input from 'components/atoms/Input';
import SubmitButton from 'components/atoms/SubmitButton';


import { ROUTES } from 'constants/api';
import { CREATE_USER_MUTATION } from 'mutations/CreateUser/createUser';
import { VALIDATION_SCHEMA } from 'constants/schema';

const INITIAL_VALUES = {
  lastName: '',
  firstName: '',
  email: '',
  password: ''
}

const SignUp = () => {

  const navigate = useNavigate();
  const {LOGIN} = ROUTES;
  const [result, createUser] = useMutation(CREATE_USER_MUTATION);
  const {fetching} = result;
  const spinner = (<CircularProgress color="success" size={25} thickness={5}/>);

  const onSubmit = async (values) => {
    try {
      await createUser(values);
      navigate(LOGIN);
    } catch (error) {
      console.log(error);
    }
    

  }
  
  return (
    <Grid container>
      <Container maxWidth="xs">
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={VALIDATION_SCHEMA}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values);
            setSubmitting(false)
          }}
        >
          {() => (
            <Form>
              <Grid 
                container 
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{marginTop: "100px"}}
              >
              <Grid sx={{width: "100%"}} item xs={12}>
                <Input 
                  name="firstName"
                  label="First Name"
                />
              </Grid>
              <Grid sx={{width: "100%"}} item md={12}>
                <Input 
                  name="lastName"
                  label="Last Name"
                />
              </Grid>
                <Grid sx={{width: "100%"}} item xs={12}>
                  <Input 
                    name="email"
                    label="Email"
                  />
                </Grid>
                <Grid sx={{width: "100%"}} item xs={12}>
                  <Input 
                    name="password"
                    label="Password"
                    type="password"
                  />
                </Grid>
                <Grid sx={{width: "100%", marginTop: "30px"}} item xs={12}>
                  <SubmitButton>{fetching ? spinner : 'SIGN UP'}</SubmitButton>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Container>
    </Grid>
  );
}

export default SignUp;
