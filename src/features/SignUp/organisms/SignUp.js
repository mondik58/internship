import { Grid, Container } from '@mui/material';
import { Formik, Form} from 'formik';
import { VALIDATION_SCHEMA } from '../../../constants/schema';

import Input from '../../../components/atoms/Input';
import SubmitButton from '../../../components/atoms/SubmitButton';

const INITIAL_VALUES = {
  lastName: '',
  firstName: '',
  email: '',
  password: ''
}

const SignUp = () => (
  
  <Grid container>
    <Container maxWidth="xs">
      <Formik
        initialValues={ INITIAL_VALUES }
        validationSchema={ VALIDATION_SCHEMA }
        onSubmit={(values, { resetForm }) => {
          console.log(values)
          resetForm(INITIAL_VALUES)
        }}
      >
        { () => (
          <Form>
            <Grid 
              container 
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{ marginTop: "100px" }}
            >
            <Grid sx={{ width: "100%" }} item xs={12}>
              <Input 
                name="firstName"
                label="First Name"
                />
            </Grid>
            <Grid sx={{ width: "100%" }} item md={12}>
              <Input 
                name="lastName"
                label="Last Name"
              />
            </Grid>
              <Grid sx={{ width: "100%" }} item xs={12}>
                <Input 
                  name="email"
                  label="Email"
                />
              </Grid>
              <Grid sx={{ width: "100%" }} item xs={12}>
                <Input 
                  name="password"
                  label="Password"
                  type="password"
                />
              </Grid>
              <Grid sx={{ width: "100%", marginTop: "30px" }} item xs={12}>
                <SubmitButton>SIGN UP</SubmitButton>
              </Grid>
            </Grid>
          </Form>
          )
        }
      </Formik>
    </Container>
  </Grid>
);

export default SignUp;
