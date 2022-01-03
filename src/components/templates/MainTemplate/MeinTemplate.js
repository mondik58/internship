import { Container } from '@mui/material';
import Header from '../../organisms/Header/Header';

const Meintemplate = ({children}) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ height: '100%' }}>
        {children}
      </Container>
    </>
  );
}

export default Meintemplate;
