import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import { createClient, Provider } from 'urql';
import { API_URL, ROUTES } from './constants/api';
import reportWebVitals from './reportWebVitals';

import Maintemplate from './components/templates/MainTemplate';
import SignUp from './features/SignUp';
import Home from './components/templates/Home';
import Login from './components/templates/LogIn';

import './styles/normalize.scss';


const client = createClient({ url: API_URL });
const {HOME, LOGIN, SIGN_UP} = ROUTES;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider value={client}>
        <Maintemplate>
          
          <Routes>
            <Route path={HOME} element={<Home />}/>
            <Route path={SIGN_UP} element={<SignUp />}/>
            <Route path={LOGIN} element={<Login />}/>
          </Routes>
        </Maintemplate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
