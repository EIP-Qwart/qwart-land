import {BrowserRouter} from "react-router-dom";
import Routes from "./navigation/Routes";
import {initReactI18next, useTranslation} from "react-i18next";
import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


i18next
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'fr'],
        fallbackLng: 'en',
        debug: false,
        detection: {
            order: ['cookie', 'localStorage', 'path', 'htmlTag'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: '/assets/local/{{lng}}/translation.json',
        },
        react: {useSuspense: false}
    })

function App() {
    const { t } = useTranslation();
    
    return (
        <div className="App">
            <BrowserRouter>
                <Routes t={t}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
