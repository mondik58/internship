import {Navigate} from 'react-router-dom';
import {getToken} from 'utils/cookies';
import {ROUTES} from 'constants/routes';

const PrivateRoute = ({children}) => {
  const token = getToken();
  const {LOGIN} = ROUTES;

  return token ? children : <Navigate to={LOGIN} />;
};

export default PrivateRoute;
