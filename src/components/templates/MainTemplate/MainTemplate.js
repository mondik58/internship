import { Container } from '@mui/material';
import Header from '../../organisms/Header';

const Maintemplate = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ height: '100%' }}>
        { children }
      </Container>
    </>
  );
}

export default Maintemplate;
