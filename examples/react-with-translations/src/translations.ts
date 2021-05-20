import { ITranslation } from "localization-react/dist/translator";

const Languages = {
  FI: 'Suomi',
  EN: 'English',
}

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