import React from 'react';
import s from './Main.module.css'
import Categories from "./Categories/Categories";
import Products from "./Products/Products";

type MainProps = {
    language: string;
};

const Main = (props: MainProps) => {

    let title = 'Everything you need in one place.';

    if (props.language === 'ua') {
        title = 'Все що потрібно є тут.'
    } else if (props.language === 'pl') {
        title = 'Wszystko co potrzebujesz w jednym miejscu.'
    } else title = 'Everything you need in one place.'

    return (
        <main className={s.main}>
            <section className={s.introSection}>
                <h1>{title}</h1>
                <div className="platform">
                    <a href="" className={s.aliexpres}>Aliexpress</a>
                </div>
            </section>
            <section className={s.categoriesSection}>
                <Categories/>
            </section>
            <section className={s.productiesSection}>
                <Products/>
            </section>


        </main>
    );
};

export default Main;