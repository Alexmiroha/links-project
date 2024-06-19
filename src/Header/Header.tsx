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
                <a href="#" className='text-orange-500 text-sm pl-3 md:text-xl md:pl-0 lg:text-3xl font-bold hover:text-orange-600'>AleAli Store links</a>
                <div className={s.toggle}>
                    <DarkModeToggle isDarkMode={props.isDarkMode} toggleDarkMode={props.toggleDarkMode}/>
                </div>
                <div className='flex align-middle scale-75 md:scale-100'>
                    <select
                        id="languageSelect"
                        value={props.language}
                        onChange={props.onLanguageChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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