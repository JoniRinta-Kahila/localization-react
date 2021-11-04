import React from 'react';
import { Translator, useLocalization } from 'localization-react';
import localesJson from './localization/locales.json';

const Home: React.FC = () => {
  const localization = useLocalization();
  const translator = new Translator(localesJson, 'home', localization.language);
  return (
    <div>
      <h1>{translator.getLocaleString('string_1')}</h1>
      <h1>{translator.getLocaleString('string_2')}</h1>
    </div>
  )
}

export default Home;
