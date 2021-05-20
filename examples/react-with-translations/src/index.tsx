import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LocalizationContextProvider from 'localization-react';
import Languages from './translations';

ReactDOM.render(
  <React.StrictMode>
    <LocalizationContextProvider languageList={Languages}>
      <App />
    </LocalizationContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
