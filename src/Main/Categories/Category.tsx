import React from 'react';
import {NavLink, useLocation} from "react-router-dom";

type CategoryPropsType = {
    link: string,
    icon: string,
    name: string,
    onClick: () => void;
}

export const Category = (props: CategoryPropsType) => {

    const location = useLocation();
    const isActive = location.pathname === props.link;

    return (
        <li className={`me-6 min-w-max border-transparent active:border-t-blue-500 dark:active:border-t-blue-700 border-t-2 ${isActive ? 'border-t-blue-500 dark:border-t-blue-700' : ''}`}>
            <NavLink to={props.link}
               className="inline-flex items-center justify-center p-1 pb-4 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                    aria-hidden="true" xmlns={props.icon} fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>
                {props.name}
            </NavLink>
        </li>
    );
};