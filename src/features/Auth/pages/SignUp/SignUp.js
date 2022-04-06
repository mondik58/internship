import {Grid, Container, Alert} from '@mui/material';
import {Formik, Form} from 'formik';
import {useNavigate} from "react-router-dom";
import {useMutation} from 'urql';

import Input from 'components/atoms/Input';
import SubmitButton from 'components/atoms/SubmitButton';

import {ROUTES} from 'constants/routes';
import {CREATE_USER} from 'mutations/User/SignUp/signUp';
import {SIGNUP_SCHEMA} from './schema';
import MainTemplate from 'components/templates/MainTemplate';

const INITIAL_VALUES = {
  lastName: '',
  firstName: '',
  email: '',
  password: ''
}

const SignUp = () => {
  const navigate = useNavigate();
  const {LOGIN} = ROUTES;
  const [result, createUser] = useMutation(CREATE_USER);
  const {fetching, error} = result;

  const onSubmit = async (values, {setSubmitting}) => {
    const result = await createUser(values);
    setSubmitting(false);
    if (!result.error) navigate(LOGIN);
  }
  return (
    <MainTemplate>
      <Grid container>
        <Container maxWidth="xs">
          <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={SIGNUP_SCHEMA}
            onSubmit={onSubmit}
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
                    <SubmitButton loading={fetching}>SIGN UP</SubmitButton>
                  </Grid>
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
      </Grid>
    </MainTemplate>
  );
}

export default SignUp;
