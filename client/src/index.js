import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const uri = process.env.REACT_APP_ENV === 'production' ? 'https://thanks-post-it.vercel.app/home' : 'http://localhost:3000/home';
ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENTID}
    redirectUri={uri}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
