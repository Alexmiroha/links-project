import React from 'react';
import s from './Header.module.css'


type HeaderProps = {
    languages: { [key: string]: string };
    language: string;
    onLanguageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header className={s.header}>
            <div className={s.header_container}>
                <a href="" className={s.logo}>AleAli Store links</a>
                <div className={s.languageChanger}>
                    <label htmlFor="languageSelect" className={s.languageLabel}>
                        {props.language === 'en' ? 'language:' : props.language === 'pl' ? 'język:' : 'мова:'}
                    </label>
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