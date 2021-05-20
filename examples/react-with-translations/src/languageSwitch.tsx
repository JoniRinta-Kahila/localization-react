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
