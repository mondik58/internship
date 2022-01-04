import { Grid, Container } from '@mui/material';
import { makeStyles } from '@mui/material';
import React from 'react';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import TextfieldWrapper from '../../atoms/TextFieldWrapper/TextFieldWrapper';
import ButtonWrapper from '../../atoms/Button/Button';

const INITIAL_FORM_STATE = {
  lastName: '',
  firstName: '',
  email: '',
  password: ''
}

// const useStyles = makeStyles( {
//   item: {
//     '& .MuiGrid-item': {
//       width: '80%'
//     }
//   }
// })

const regExpPass = new RegExp(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/);
const regExpEm = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email("Invalid email.")
    .required('Required')
    .matches(regExpEm, "Invalid email, example@gmail.com"),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Your password must be longer than 6 characters.')
    .matches(regExpPass, "Password must contain at least 8 characters, one uppercase, one number and one special case character")
})

const Signup = () => {
  // const classes = useStyles();

  return (
      
        <Grid container
              >
            <Container maxWidth="xs">

          <Formik
          initialValues={{
            ...INITIAL_FORM_STATE
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={(values, {resetForm}) => {
            console.log(values)
            resetForm(INITIAL_FORM_STATE)
          }}>
            <Form>
              <Grid container 
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={{marginTop: "100px"}}>
                <Grid sx={{width: '100%'}} item xs={12}>
                  <TextfieldWrapper 
                    name="firstName"
                    label="First Name"
                    />
                </Grid>
              <Grid sx={{width: '100%'}} item md={12}>
              <TextfieldWrapper 
                    name="lastName"
                    label="Last Name"
                    />
              </Grid>
                <Grid sx={{width: '100%'}} item xs={12}>
                  <TextfieldWrapper 
                      name="email"
                      label="Email"
                      />
                </Grid>
                <Grid sx={{width: '100%'}} item xs={12}>
                  <TextfieldWrapper 
                        name="password"
                        label="Password"
                        type="password"
                        />
                </Grid>
                <Grid sx={{width: '100%', marginTop: '30px'}} item xs={12}>
                  <ButtonWrapper>
                    SIGN UP
                  </ButtonWrapper>
                </Grid>
              </Grid>
            </Form>
          </Formik>
          </Container>
        </Grid>
  );
}

export default Signup;
