import './normalize.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { createClient, Provider } from 'urql';
import Signup from './components/organisms/SIgnUp/SIgnUp';
import Meintemplate from './components/templates/MainTemplate/MeinTemplate';
import {Routes, Route} from 'react-router-dom';

import { API_URL } from './constants/api';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/templates/Home/Home';
import Login from './components/templates/LogIn/Login';

const client = createClient({ url: API_URL });

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider value={client}>
      <Meintemplate>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sign-up" element={<Signup />}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Meintemplate>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
