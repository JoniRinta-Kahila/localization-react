# react-localization

`npm i localization-react`

## languages.ts
```ts
// add supported languages here
const Languages = {
  FI: 'fi',
  EN: 'en',
}

export default Languages;

```

## locales.json
```json
{
  "EN": {
    "home": {
      "string_1": "Hello, World!",
      "string_2": "This is English."
    }
  },
  "FI": {
    "home": {
      "string_1": "Hei, Maailma!",
      "string_2": "Tämä on Suomea."
    }
  }
}
```

## app.tsx

```ts
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

```

## Home.tsx, translated page

```ts
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

```

## languageSwitch.tsx, switch between languages

```ts
import React from 'react';
import { useLocalization } from 'localization-react';

const LanguageSwitch: React.FC = () => {
  const localization = useLocalization();
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    localization.selectLanguage(event.target.value);
  };
  return (
    <div>
      <input
        type='radio'
        value='EN'
        name='lang'
        id='en'
        checked={localization.language === "EN"}
        onChange={radioHandler}
      />
      <label htmlFor='en'>English</label>
      <input
        type='radio'
        value='FI'
        name='lang'
        id='fi'
        checked={localization.language === "FI"}
        onChange={radioHandler}
      />
      <label htmlFor='fi'>Finnish</label>
    </div>
  )
}

export default LanguageSwitch;

```
