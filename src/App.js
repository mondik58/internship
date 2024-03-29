import React, {useMemo} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

import {createClient, Provider, dedupExchange, cacheExchange, fetchExchange} from 'urql';
import {authExchange} from '@urql/exchange-auth';
import {makeOperation} from '@urql/core';

import {API_URL} from 'constants/api';
import {ROUTES} from 'constants/routes';
import {getToken, deleteToken} from 'utils/cookies';
import PrivateRoute from 'components/atoms/PrivateRoute';
import SignUp from 'features/Auth/pages/SignUp';
import Home from 'features/ToDo/pages/Home';
import LogIn from 'features/Auth/pages/LogIn';
import Project from 'features/ToDo/pages/Project';

import 'styles/normalize.scss';

const App = () => {
  const {HOME, LOGIN, SIGN_UP, LIST} = ROUTES;
  const navigate = useNavigate(LOGIN);
  const token = getToken();
  const client = useMemo(() => {
    return createClient({
      url: API_URL,
      exchanges: [
        dedupExchange,
        cacheExchange,
        authExchange({
          getAuth: async ({authState}) => {
            if (!authState) {
              if (token) {
                return {token}
              }
              return null;
            }
    
            deleteToken();
            navigate(LOGIN);
    
            return null;
          },
          addAuthToOperation: ({ authState, operation }) => {
            if (!authState || !authState?.token) {
              return operation;
            }
          
            const fetchOptions =
              typeof operation.context.fetchOptions === 'function'
                ? operation.context.fetchOptions()
                : operation.context.fetchOptions || {};
          
            return makeOperation(operation.kind, operation, {
              ...operation.context,
              fetchOptions: {
                ...fetchOptions,
                headers: {
                  ...fetchOptions.headers,
                  Authorization: `Bearer ${authState.token}`,
                },
              },
            });
          },
          didAuthError: ({error}) => error.response.status === 401,
          willAuthError: ({authState}) => !authState
        }),
        fetchExchange,
      ],
    })
  }, [token, navigate, LOGIN]);
  
  return (
    <Provider value={client}>
      <Routes>
        <Route path={HOME} element={
          <PrivateRoute> 
            <Home />
          </PrivateRoute>
        }/>
        <Route path={LIST} element={
          <PrivateRoute> 
            <Project />
          </PrivateRoute>
        }/>
        <Route path={SIGN_UP} element={<SignUp />}/>
        <Route path={LOGIN} element={<LogIn />}/>
        <Route path='*' element={<SignUp/>} />
      </Routes>
    </Provider>
  )
}

export default App;
