import React from 'react';
import s from "../Categories/Categories.module.css";
import i1 from '../../img/Produscts/v1.webp'
import ProductCard from "./ProductCard/ProductCard";

type ProductsPropsType = {
    language: string
}

const cards = [
    {
        "video": "v1",
        "title": {
            "en": "Przenośny wentylator 3 w 1",
            "pl": "Przenośny wentylator 3 w 1",
            "ua": "Przenośny wentylator 3 w 1"
        },
        "description": {
            "en": "Przenośny wentylator 3 w 1 z klimatyzatorem USB i podświetleniem LED",
            "pl": "Przenośny wentylator 3 w 1 z klimatyzatorem USB i podświetleniem LED",
            "ua": "Przenośny wentylator 3 w 1 z klimatyzatorem USB i podświetleniem LED"
        },
        "img": i1,
        "link": "https://pl.aliexpress.com/item/1005006846418279.html?spm=a2g0o.categorymp.prodcutlist.2.29cc5aPS5aPSj2&pdp_ext_f=%7B%22sku_id%22%3A%2212000038497110451%22%7D&utparam-url=scene%3Asearch%7Cquery_from%3A",
    },
    {
        "video": "v1",
        "title": {
            "en": "Przenośny wentylator 3 w 1",
            "pl": "Przenośny wentylator 3 w 1",
            "ua": "Przenośny wentylator 3 w 1"
        },
        "description": {
            "en": "Przenośny wentylator 3 w 1 z klimatyzatorem USB i podświetleniem LED",
            "pl": "Przenośny wentylator 3 w 1 z klimatyzatorem USB i podświetleniem LED",
            "ua": "Przenośny wentylator 3 w 1 z klimatyzatorem USB i podświetleniem LED"
        },
        "img": i1,
        "link": "https://pl.aliexpress.com/item/1005006846418279.html?spm=a2g0o.categorymp.prodcutlist.2.29cc5aPS5aPSj2&pdp_ext_f=%7B%22sku_id%22%3A%2212000038497110451%22%7D&utparam-url=scene%3Asearch%7Cquery_from%3A",
    },
]

const Products = (props: ProductsPropsType) => {
    return (
        <div className={`${s.productsSection} ${'mt-10'}`}>
            <h3 className="mb-6 text-gray-900 dark:text-amber-50">{props.language === 'ua' ? 'Товари' : props.language === 'pl' ? 'Towary' : 'Products'}</h3>
            <form className="max-w-screen-sm mx-auto">
                <label htmlFor="default-search"
                       className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search"
                           className="block w-[79%] h-8 visible p-[17px] ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder={props.language === 'ua' ? "Впиши номер відео тут (нп. V27)"
                               : props.language === 'pl' ? "Wpisz tutaj numer video (np. V27)"
                                   : "Type video number here (for ex. V27)"} required/>
                    <button type="submit"
                            className="text-white absolute end-2.5 bottom-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{props.language === 'ua' ? "Шукати"
                        : props.language === 'pl' ? "Szukaj"
                            : "Search"}
                    </button>
                </div>
            </form>
            <div className={`${s.productsContainer} ${'mt-10'}`}>
                {cards.map((card, index) => (
                    <ProductCard
                        video={card.video}
                        title={props.language === 'ua'? card.title['ua'] : props.language === 'pl' ? card.title['pl'] : card.title['en']}
                        description={props.language === 'ua'? card.description['ua'] : props.language === 'pl' ? card.description['pl'] : card.description['en']}
                        key={index}
                        img={card.img}
                        link={card.link}
                    />
                ))}
            </div>

        </div>
    );
};

export default Products;