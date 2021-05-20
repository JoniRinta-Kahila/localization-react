import React from 'react';
import LanguageSwitch from './languageSwitch';
import { Translator, useLocalization } from 'localization-react';
import { ExampleLocales } from './translations';

function App() {
  const localization = useLocalization();
  const translator = new Translator(ExampleLocales, localization.language);

  return (
    <div>
      <LanguageSwitch />
      <h1>{translator.getLocaleString('str_1')}</h1>
      <h1>{translator.getLocaleString('str_2')}</h1>
    </div>    

  );
}

export default App;
