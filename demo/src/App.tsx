import React from 'react';
import LocalizationContextProvider from 'localization-react';
import Languages from './localization/languages';
import LanguageSwitch from './localization/LanguageSwitch';
import Home from './home';

const App: React.FC = () => {
  return (
    <LocalizationContextProvider languageList={Languages} defaultLanguage='FI'>
      <LanguageSwitch />
      <Home />
    </LocalizationContextProvider>
  )
}

export default App;
