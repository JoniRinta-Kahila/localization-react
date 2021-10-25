# npm-react-localization

## translations.ts, create translations
```ts
import { ITranslation } from "localization-react/dist/translator";

// add wanted languages in obj and export it
const Languages = {
  FI: 'Suomi',
  EN: 'English',
}

// create translations
export const ExampleLocales: ITranslation = {
  FI: {
    str_1: 'Terve Maailma!',
    str_2: 'Tämä on suomenkieltä.',
  },
  EN: {
    str_1: 'Hello World!',
    str_2: 'This is English.',
  },
};

export default Languages;

```

## index.tsx, set translator

```ts
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

{/* import language list and context provider */}
import LocalizationContextProvider from 'localization-react';
import Languages from './translations';

ReactDOM.render(
  <React.StrictMode>
    {/* set context provider & language list */}
    <LocalizationContextProvider languageList={Languages}>
      <App />
    </LocalizationContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

```

## App.tsx, using translations

```ts

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

```

## languageSwitch.tsx, switch between languages

```ts
import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { useLocalization } from 'localization-react';

type LanguageSwitchProps = {

}

const LanguageSwitch: React.FC<LanguageSwitchProps> = () => {

  const localization = useLocalization();

  return (
    <FormControl style={{ minWidth: 150, marginLeft:20, color: 'rgb(118,118,115)' }} >
      <InputLabel style={{color: 'rgb(118,118,115)'}} id="language-select-label">Language</InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        renderValue={(x) => {
          return (
            <p style={{color: 'rgb(118,118,115)', fontWeight: 700}}>
              {localization.supportedLanguages[x as string]}
            </p>
          )
        }}
        value={localization.language}
        onChange={(x) => localization.selectLanguage(x.target.value as string)}
      >
        {
          Object.keys(localization.supportedLanguages).map(x => (
            <MenuItem key={x} value={x} >
              {localization.supportedLanguages[x]}
            </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}

export default LanguageSwitch

```
