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
