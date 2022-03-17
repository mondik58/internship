import {Grid, Container, Alert} from '@mui/material';
import {Formik, Form} from 'formik';
import {useNavigate} from "react-router-dom";
import {useMutation} from 'urql';

import Input from 'components/atoms/Input';
import SubmitButton from 'components/atoms/SubmitButton';

import {ROUTES} from 'constants/routes';
import {LOGIN} from 'mutations/LogIn/logIn';
import {LOGIN_SCHEMA} from './schema';
import {setToken} from 'utils/cookies';
import MainTemplate from 'components/templates/MainTemplate';

const INITIAL_VALUES = {
  email: '',
  password: ''
}

const LogIn = () => {
  const navigate = useNavigate();
  const {HOME} = ROUTES;
  const [data, signInUser] = useMutation(LOGIN);
  const {fetching, error} = data;

  const onSubmit = async (values, {setSubmitting}) => {
    const data = await signInUser(values);
    const token = data.data.signInUser.token;

    if (token) setToken(token);
    setSubmitting(false);
    if (!data.error) navigate(HOME);
  }
  return (
    <MainTemplate>
      <Grid container>
        <Container maxWidth="xs">
          <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={LOGIN_SCHEMA}
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
                    <SubmitButton loading={fetching}>LOG IN</SubmitButton>
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

export default LogIn;

