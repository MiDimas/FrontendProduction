import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import {initReactI18next} from "react-i18next";
import i18n from "i18next";

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    // @ts-ignore
    .init({
        fallbackLng: 'ru',
        debug: __IS_DEV__,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        })
export default i18n;
