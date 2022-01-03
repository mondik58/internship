import { Grid, TextField, Container } from '@mui/material';
import React from 'react';
import { useState } from 'react';
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
    .matches(regExpPass, "Invalid password")
})

const Signup = () => {

  return (
      <Container
        maxWidth="md"
      >
        <Grid item xs={12}
              >
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
                    spacing={2}>
                <Grid item xs={12}>
                  <TextfieldWrapper 
                    name="firstName"
                    label="First Name"
                  />
                </Grid>
              <Grid item md={12}>
              <TextfieldWrapper 
                    name="lastName"
                    label="Last Name"
                  />
              </Grid>
                <Grid item xs={12}>
                  <TextfieldWrapper 
                      name="email"
                      label="Email"
                    />
                </Grid>
                <Grid item xs={12}>
                  <TextfieldWrapper 
                        name="password"
                        label="Password"
                    />
                </Grid>
                <Grid item xs={12}>
                  <ButtonWrapper>
                    SIGN UP
                  </ButtonWrapper>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Grid>
      </Container>
  );
}

export default Signup;
