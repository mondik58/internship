import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {createClient, Provider} from 'urql';

import {API_URL, ROUTES} from 'constants/api';
import {getToken} from './utils/cookies';
import reportWebVitals from './reportWebVitals';

import MainTemplate from 'components/templates/MainTemplate';
import SignUp from 'features/Auth/pages/SignUp';
import Home from 'features/ToDo/pages/Home';
import LogIn from 'features/Auth/pages/LogIn';

import 'styles/normalize.scss';

const client = createClient({
  url: API_URL,
  fetchOptions: () => {
    const token = getToken();
    return token ? {headers: { Authorization: `Bearer ${token}` }} : {};
  }
});
const {HOME, LOGIN, SIGN_UP} = ROUTES;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider value={client}>
        <MainTemplate>
          <Routes>
            <Route path={HOME} element={<Home />}/>
            <Route path={SIGN_UP} element={<SignUp />}/>
            <Route path={LOGIN} element={<LogIn />}/>
          </Routes>
        </MainTemplate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
