import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./Hearer/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

type LanguagesType = {
    [key: string]: string;
};

const App: React.FC = () => {

    const languages: LanguagesType = {
        en: 'English',
        pl: 'Polski',
        ua: 'Українська'
    };

    const [language, setLanguage] = useState('en');

    useEffect(() => {
        // Завантаження вибраної мови з localStorage при завантаженні компонента
        const savedLanguage = localStorage.getItem('selectedLanguage');
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    const handleLanguageChange = (event: { target: { value: any; }; }) => {
        const newLanguage = event.target.value;
        setLanguage(newLanguage);
        localStorage.setItem('selectedLanguage', newLanguage);
    };

    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    const [isDarkMode, setDarkMode] = useState(storedDarkMode);

    useEffect(() => {
        localStorage.setItem('darkMode', isDarkMode.toString());
    }, [isDarkMode])



    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
    }

    return (
        <div className="App">
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
