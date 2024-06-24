import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const App: React.FC = () => {

    type languageType = "en" | "pl" | "ua";

    const languages = {en: 'English', pl: 'Polski', ua: 'Українська'};
    const [language, setLanguage] = useState<languageType>('en');

    useEffect(() => {
        const savedLanguage = localStorage.getItem('selectedLanguage') as languageType;
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pl' || savedLanguage === 'ua')) {
            setLanguage(savedLanguage);
        }
    }, []);

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLanguage = event.target.value as languageType;
        setLanguage(newLanguage);
        localStorage.setItem('selectedLanguage', newLanguage);
    };

    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    const [isDarkMode, setDarkMode] = useState(storedDarkMode);

    useEffect(() => {
        localStorage.setItem('darkMode', isDarkMode.toString());
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => setDarkMode(!isDarkMode);

    return (
        <Router>
        <div className={`App ${isDarkMode ? 'dark' : ''}`}>

                <Header
                    toggleDarkMode={toggleDarkMode}
                    isDarkMode={isDarkMode}
                    languages={languages}
                    language={language}
                    onLanguageChange={handleLanguageChange}
                />
                <Main language={language}/>

            <Footer/>
        </div>
        </Router>
    );
}

export default App;
