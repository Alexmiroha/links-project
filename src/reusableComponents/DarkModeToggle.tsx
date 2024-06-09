import React from 'react';
import s from './DarkModeToggle.module.css';
import {WiDaySunny} from "react-icons/wi";
import {BsMoonStars} from "react-icons/bs";

type DarkModeTogglePropsType = {
    isDarkMode: boolean,
    toggleDarkMode: () => void,
}

const DarkModeToggle = (props:DarkModeTogglePropsType) => {
    return (
        <div className={s.toggleWrapper}>
            <input defaultChecked={props.isDarkMode}
                   onClick={props.toggleDarkMode}
                   className={s.input}
                   type="checkbox"
                   id='darkmode-toggle'>

            </input>
            <label htmlFor="darkmode-toggle">
                <WiDaySunny className={s.sun} size={60}/>
                <BsMoonStars className={s.moon} size={60}/>
            </label>
        </div>
    );
};

export default DarkModeToggle;