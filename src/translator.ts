export interface ITranslation {
  [countryCode: string]: {
    [path: string]: {
      [key: string]: string,
    },
  },
};

export default class Translations {

  strings: ITranslation;
  language: string;
  path: string;

  constructor(strings: ITranslation, path: string, language: string) {
    this.strings =  strings;
    this.path = path;
    this.language = language;
  };

  getLocaleString(string: string): string {
    
    if (!this.strings[this.language])
      throw new Error(`an error occurred while getting translation for [${string}] in [${this.language}], Language ${this.language} does not exists.`);
    
    if (!this.strings[this.language][this.path])
      throw new Error(`an error occurred while getting translation for [${string}] in [${this.path}] in [${this.language}], Path ${this.path} does not exists.`);

    const translation = this.strings[this.language][this.path][string];

    if (!translation)
      throw new Error(`an error occurred while getting translation for [${string}] in [${this.language}], Translation for ${string} does not exists.`);

    return translation;
  };
};
