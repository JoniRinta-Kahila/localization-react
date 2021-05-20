import * as React from 'react';
import { ILanguageList, LocalizationContext } from './localizationContext';

export interface LocalizationContextProviderProps {
  languageList: ILanguageList,
};

const LocalizationContextProvider: React.FC<React.PropsWithChildren<LocalizationContextProviderProps>> = ({ languageList, children }) => {

  // get possibly saved language state from localStorage
  const localizationOptionsFromLocalStorage = () => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (!storedLanguage) return 'EN';
    return storedLanguage;
  };

  // selected language state
  const [language, setLanguage] = React.useState<string>(localizationOptionsFromLocalStorage());

  // handle language change
  React.useEffect(() => {
    localStorage.setItem('selectedLanguage', language);
  }, [language]);

  const value = React.useMemo(() => 
  ({language, selectLanguage: setLanguage, supportedLanguages: languageList}), [language, languageList]);
  
  return (
    <LocalizationContext.Provider value={value}>
      { children }
    </LocalizationContext.Provider>
  );
};

export default LocalizationContextProvider;
