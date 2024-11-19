import React from 'react';
import s from './Main.module.css'
import Categories from "./Categories/Categories";
import Products from "./Products/Products";

type MainProps = {
    language: 'en' | 'pl' | 'ua';
};

const Main = (props: MainProps) => {

    let title = 'Everything you need in one place.';

    if (props.language === 'ua') {
        title = 'Все, що тобі потрібно є тут.'
    } else if (props.language === 'pl') {
        title = 'Wszystko czego szukasz.'
    } else title = 'Everything you need in one place.'

    return (
        <main className="pt-24 pb-40 bg-blue-100 dark:bg-gray-950 h-full">
            <section className={s.introSection}>
                <h1 className='text-gray-900 dark:text-amber-50 text-lg md:text-2xl xl:text-3xl border-6 border-t-6 border-b-fuchsia-600'>{title}</h1>
                <div className="platform">
                    <button type="button"
                            className=" mt-4 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Aliexpress
                    </button>
                    <button type="button"
                            className="disabled:text-gray-500 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:dark:bg-gray-700
                            enabled:text-white enabled:bg-gradient-to-r enabled:from-cyan-400 enabled:via-cyan-500 enabled:to-cyan-600 enabled:hover:bg-gradient-to-br enabled:focus:ring-4 enabled:focus:outline-none enabled:focus:ring-cyan-300 enabled:dark:focus:ring-cyan-800 shadow-lg enabled:shadow-cyan-500/50 enabled:dark:shadow-lg enabled:dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            disabled>
                        Amazon
                    </button>
                </div>
                <hr className="h-px my-4 border-0 bg-gray-700"/>
            </section>
            <section className={s.categoriesSection}>
                <Categories language={props.language}/>
            </section>
            <hr className="h-px my-4 bg-gray-700 border-0"/>
            <section className={s.productiesSection}>
                <Products language={props.language}/>
            </section>


        </main>
    );
};

export default Main;