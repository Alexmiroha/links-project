import React, {useState} from 'react';
import s from "../Categories/Categories.module.css";
import i1 from '../../img/Produscts/v1.webp'
import ProductCard from "./ProductCard/ProductCard";

type ProductsPropsType = {
    language: 'en' | 'pl' | 'ua'
}

const cards = [
    {
        "video": "v1",
        "title": {
            "en": "Remote cooler 3 in 1",
            "pl": "Przenośny wentylator 3 w 1",
            "ua": "Портативний вентилятор 3 в 1"
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
        "video": "v2",
        "title": {
            "en": "High-Speed USB Charger",
            "pl": "Szybka ładowarka USB",
            "ua": "Швидкісна зарядка USB"
        },
        "description": {
            "en": "Efficient and fast USB charger for multiple devices.",
            "pl": "Wydajna i szybka ładowarka USB do wielu urządzeń.",
            "ua": "Ефективна та швидка зарядка USB для кількох пристроїв."
        },
        "img": i1,
        "link": "https://pl.aliexpress.com/item/1005006846418279.html?spm=a2g0o.categorymp.prodcutlist.2.29cc5aPS5aPSj2&pdp_ext_f=%7B%22sku_id%22%3A%2212000038497110451%22%7D&utparam-url=scene%3Asearch%7Cquery_from%3A",
    },
    {
        "video": "v3",
        "title": {
            "en": "Compact USB Charger",
            "pl": "Kompaktowa ładowarka USB",
            "ua": "Компактна зарядка USB"
        },
        "description": {
            "en": "Small and portable USB charger with quick charging capability.",
            "pl": "Mała i przenośna ładowarka USB z szybkim ładowaniem.",
            "ua": "Маленька та портативна зарядка USB з швидкою зарядкою."
        },
        "img": i1,
        "link": "https://pl.aliexpress.com/item/1005006846418279.html?spm=a2g0o.categorymp.prodcutlist.2.29cc5aPS5aPSj2&pdp_ext_f=%7B%22sku_id%22%3A%2212000038497110451%22%7D&utparam-url=scene%3Asearch%7Cquery_from%3A",
    },
    {
        "video": "v4.1",
        "title": {
            "en": "Multi-Port USB Charger",
            "pl": "Ładowarka USB z wieloma portami",
            "ua": "Зарядка USB з кількома портами"
        },
        "description": {
            "en": "USB charger with multiple ports for simultaneous device charging.",
            "pl": "Ładowarka USB z wieloma portami do jednoczesnego ładowania urządzeń.",
            "ua": "Зарядка USB з кількома портами для одночасної зарядки пристроїв."
        },
        "img": i1,
        "link": "https://pl.aliexpress.com/item/1005006846418279.html?spm=a2g0o.categorymp.prodcutlist.2.29cc5aPS5aPSj2&pdp_ext_f=%7B%22sku_id%22%3A%2212000038497110451%22%7D&utparam-url=scene%3Asearch%7Cquery_from%3A",
    },
    {
        "video": "v4.2",
        "title": {
            "en": "Wireless USB Charger",
            "pl": "Bezprzewodowa ładowarka USB",
            "ua": "Безпровідна зарядка USB"
        },
        "description": {
            "en": "Convenient wireless USB charger for easy charging on the go.",
            "pl": "Wygodna bezprzewodowa ładowarka USB do łatwego ładowania w podróży.",
            "ua": "Зручна безпровідна зарядка USB для легкого заряджання в дорозі."
        },
        "img": i1,
        "link": "https://pl.aliexpress.com/item/1005006846418279.html?spm=a2g0o.categorymp.prodcutlist.2.29cc5aPS5aPSj2&pdp_ext_f=%7B%22sku_id%22%3A%2212000038497110451%22%7D&utparam-url=scene%3Asearch%7Cquery_from%3A",
    },
    {
        "video": "v4.3",
        "title": {
            "en": "USB-C Charger",
            "pl": "Ładowarka USB-C",
            "ua": "Зарядка USB-C"
        },
        "description": {
            "en": "Fast and efficient USB-C charger for modern devices.",
            "pl": "Szybka i wydajna ładowarka USB-C do nowoczesnych urządzeń.",
            "ua": "Швидка та ефективна зарядка USB-C для сучасних пристроїв."
        },
        "img": i1,
        "link": "https://pl.aliexpress.com/item/1005006846418279.html?spm=a2g0o.categorymp.prodcutlist.2.29cc5aPS5aPSj2&pdp_ext_f=%7B%22sku_id%22%3A%2212000038497110451%22%7D&utparam-url=scene%3Asearch%7Cquery_from%3A",
    },
    {
        "video": "v4.4",
        "title": {
            "en": "Charger USB",
            "pl": "Zasilacz USB",
            "ua": "Зарядка USB"
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
        "video": "v4.5",
        "title": {
            "en": "Charger USB",
            "pl": "Zasilacz USB",
            "ua": "Зарядка USB"
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
        "video": "v4.6",
        "title": {
            "en": "Charger USB",
            "pl": "Zasilacz USB",
            "ua": "Зарядка USB"
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
        "video": "v5",
        "title": {
            "en": "Charger USB",
            "pl": "Zasilacz USB",
            "ua": "Зарядка USB"
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
        "video": "v6",
        "title": {
            "en": "Charger USB",
            "pl": "Zasilacz USB",
            "ua": "Зарядка USB"
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

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCards, setFilteredCards] = useState(cards);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const searchTermLower = searchTerm.toLowerCase();
        const filtered = cards.filter(card =>
            card.video.toLowerCase().includes(searchTermLower) ||
            card.title[props.language].toLowerCase().includes(searchTermLower)
        );
        setFilteredCards(filtered);
    };

    return (
        <div className={`${s.productsSection} ${'mt-10'}`}>
            <h3 className="mb-6 text-gray-900 dark:text-amber-50">{props.language === 'ua' ? 'Товари' : props.language === 'pl' ? 'Towary' : 'Products'}</h3>
            <form className="max-w-screen-sm mx-auto" onSubmit={handleSearchSubmit}>
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
                           value={searchTerm}
                           onChange={handleSearchChange}
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
                {filteredCards.map((card, index) => (
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