import { Container } from '@mui/material';
import React from 'react';
import Header from '../../organisms/Header/Header';

const Meintemplate = ({children}) => {
  return (
    <>
    <Header />
      <Container maxWidth="lg">
        {children}
      </Container>
    </>
  );
}

export default Meintemplate;