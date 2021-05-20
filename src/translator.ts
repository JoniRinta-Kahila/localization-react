export interface ITranslation {
  [countryCode: string]: {
    [key: string]: string,
  },
};

export default class Translations {

  strings: ITranslation;
  language: string;

  constructor(strings: ITranslation, language: string) {
    this.strings =  strings;
    this.language = language;
  };

  getLocaleString(string: string): string {
    
    if (!this.strings[this.language])
      throw new Error(`an error occurred while getting translation for [${string}] in [${this.language}], Language ${this.language} does not exists.`);

    const translation = this.strings[this.language][string];

    if (!translation)
      throw new Error(`an error occurred while getting translation for [${string}] in [${this.language}], Translation for ${string} does not exists.`);

    return translation;
  };
};
