import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const App: React.FC = () => {
    const languages = {en: 'English', pl: 'Polski', ua: 'Українська'};
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        const savedLanguage = localStorage.getItem('selectedLanguage');
        if (savedLanguage) setLanguage(savedLanguage);
    }, []);

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLanguage = event.target.value;
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
    );
}

export default App;
