import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/style.css'
import './styles/images.css'
import './styles/no-touch.min.css'
import i18next from "i18next";
import {I18nextProvider} from "react-i18next";

import common_es from "./locales/es/translation.json";
import common_en from "./locales/en/translation.json";


i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'es',                              // language to use
  resources: {
      es: {
          common: common_es               // 'common' is our custom namespace
      },
      en: {
          common: common_en
      },
  },
});
ReactDOM.render(

    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
              <App />
        </I18nextProvider>

    </React.StrictMode>,

  document.getElementById('root')
);
