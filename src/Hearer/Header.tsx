import React from 'react';
import s from './Header.module.css'
import DarkModeToggle from "../reusableComponents/DarkModeToggle";


type HeaderProps = {
    toggleDarkMode: () => void;
    isDarkMode: boolean;
    languages: { [key: string]: string };
    language: string;
    onLanguageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header className={`${s.header} ${props.isDarkMode ? 'bg-blue-950'  : 'bg-blue-50'}`}>
            <div className={s.header_container}>
                <a href="" className={s.logo}>AleAli Store links</a>
                <div className={s.toggle}>
                    <DarkModeToggle isDarkMode={props.isDarkMode} toggleDarkMode={props.toggleDarkMode}/>
                </div>
                <div className={s.languageChanger}>
                    <p className={s.languageLabel}>
                        {props.language === 'en' ? 'language:' : props.language === 'pl' ? 'język:' : 'мова:'}
                    </p>
                    <select
                        id="languageSelect"
                        value={props.language}
                        onChange={props.onLanguageChange}
                        className={s.languageSelect}
                    >
                        {Object.entries(props.languages).map(([langCode, langName]) => (
                            <option key={langCode} value={langCode}>
                                {langName}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </header>
    );
};

export default Header;