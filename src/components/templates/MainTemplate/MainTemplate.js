import {Container} from '@mui/material';
import Header from 'components/organisms/Header';

const MainTemplate = ({children, header = <Header />}) => {
  return (
    <>
      {header}
      <Container maxWidth="lg" sx={{height: '100%'}}>
        {children}
      </Container>
    </>
  );
}

export default MainTemplate;
