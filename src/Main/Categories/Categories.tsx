import React, {useEffect, useRef, useState} from 'react';
import {Route, Routes, useNavigate, useParams} from "react-router-dom";
import s from './Categories.module.css';
import img1 from '../../img/home and garden.jpg';
import img2 from '../../img/sport.jpg';
import img3 from '../../img/pets.jpg';
import img4 from '../../img/furniture.jpg';
import img5 from '../../img/beauty.jpg';
import img6 from '../../img/toys.jpg';
import img7 from '../../img/bags and shoes.jpg';
import img8 from '../../img/lightning.jpg';
import img9 from '../../img/moto.jpg';
import img10 from '../../img/watch.jpg';
import img11 from '../../img/electronics.jpg';
import img12 from '../../img/shoes.jpg';
import img13 from '../../img/hair.jpg';
import img14 from '../../img/computer.jpg';
import img15 from '../../img/phone.jpg';
import img16 from '../../img/kids.jpg';
import img17 from '../../img/womens.jpg';
import img18 from '../../img/man.jpg';
import Category from "./Category";
import SubCategories from "./SubCategories";

type CategoriesPropsType = {
    language: string,
};

const categories = [
    {
        "img": img2,
        "link": "/sport",
        "title": {
            "en": "Sports & Entertainment",
            "pl": "Sport i Rozrywka",
            "ua": "Спорт і Розваги"
        },
        "description": {
            "en": "Dive into the thrill of sports and entertainment with our diverse selection.",
            "pl": "Zanurz się w emocje sportu i rozrywki z naszym różnorodnym wyborem.",
            "ua": "Поринь у захоплення спортом та розвагами з нашим різноманітним асортиментом."
        },
        "subcategories": [
            {
                "img": img1,
                "link": "https://www.aliexpress.com/w/wholesale-Electric-Bike.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Electric%20Bike%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Electric Bike",
                    "pl": "Rowery Elektryczne",
                    "ua": "Електровелосипеди"
                },
                "description": {
                    "en": "Cool Electric Bike for You",
                    "pl": "Rowery Elektryczne dla ciebie",
                    "ua": "Електровелосипеди для тебе"
                }
            },
            {
                "img": img2,
                "link": "https://www.aliexpress.com/w/wholesale-Yoga-Clothing.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Yoga%20Clothing%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Yoga Clothing",
                    "pl": "Odzież dla Yogi",
                    "ua": "Одяг для йоги"
                },
                "description": {
                    "en": "Yoga Clothing for You",
                    "pl": "Odzież dla Yogi dla ciebie",
                    "ua": "Одяг для йоги для тебе"
                }
            },
        ]
    },
    {
        "img": img3,
        "link": "/pet",
        "title": {
            "en": "Pet Supplies",
            "pl": "Produkty dla zwierząt",
            "ua": "Товари для тварин"
        },
        "description": {
            "en": "Everything your furry friends need to live their best lives.",
            "pl": "Wszystko, czego potrzebują twoi futrzaści przyjaciele, aby żyć pełnią życia.",
            "ua": "Усе, що потрібно вашим пухнастим друзям для найкращого життя."
        },
        "subcategories": [
            {
                "img": img13,
                "link": "#",
                "title": {
                    "en": "Gardening & Decor Sjudfspioj aspdjfsdpo asdasdaiophj",
                    "pl": "Ogrodnictwo i Dekoracje",
                    "ua": "Садівництво та Декор"
                },
                "description": {
                    "en": "Transform your outdoor space with our gardening tools and decorative items. Transform your outdoor space with our gardening tools and decorative items. Transform your outdoor space with our gardening tools and decorative items.",
                    "pl": "Zmień swoją przestrzeń na zewnątrz za pomocą naszych narzędzi ogrodniczych i przedmiotów dekoracyjnych.",
                    "ua": "Перетворіть ваш двір за допомогою наших садових інструментів та декоративних предметів."
                }
            },
            {
                "img": img12,
                "link": "#",
                "title": {
                    "en": "Fitness & Health",
                    "pl": "Fitness i Zdrowie",
                    "ua": "Фітнес та Здоров'я"
                },
                "description": {
                    "en": "Explore our range of fitness equipment and health supplements to stay fit and healthy.",
                    "pl": "Odkryj naszą gamę sprzętu fitness i suplementów zdrowotnych, aby być fit i zdrowym.",
                    "ua": "Досліджуйте наш асортимент фітнес-обладнання та добавок для здоров'я, щоб бути у формі та здоровим."
                }
            },
        ]
    },
    {
        "img": img4,
        "link": "/furniture",
        "title": {
            "en": "Furniture",
            "pl": "Meble",
            "ua": "Меблі"
        },
        "description": {
            "en": "Find furniture for your home and every room to suit your style.",
            "pl": "Znajdź meble do swojego domu i każdego pomieszczenia, które odpowiadają Twojemu stylowi.",
            "ua": "Знайдіть меблі для вашого будинку та кожної кімнати, які відповідають вашому стилю."
        },
        "subcategories": [
            {
                "img": img4,
                "link": "#",
                "title": {
                    "en": "Tech & Gadgets",
                    "pl": "Technologia i Gadżety",
                    "ua": "Технології та Гаджети"
                },
                "description": {
                    "en": "Discover the latest tech gadgets and accessories to enhance your digital lifestyle.",
                    "pl": "Odkryj najnowsze gadżety technologiczne i akcesoria, aby ulepszyć swój cyfrowy styl życia.",
                    "ua": "Дізнайтеся про найновіші технічні гаджети та аксесуари, щоб покращити свій цифровий стиль життя."
                }
            },
            {
                "img": img7,
                "link": "#",
                "title": {
                    "en": "Fashion & Accessories",
                    "pl": "Moda i Akcesoria",
                    "ua": "Мода та Аксесуари"
                },
                "description": {
                    "en": "Explore the latest fashion trends and stylish accessories for every occasion.",
                    "pl": "Odkryj najnowsze trendy w modzie i stylowe akcesoria na każdą okazję.",
                    "ua": "Досліджуйте найновіші модні тенденції та стильні аксесуари на будь-який випадок."
                }
            },
        ]
    },
    {
        "img": img5,
        "link": "/b&h",
        "title": {
            "en": "Beauty & Health",
            "pl": "Uroda i Zdrowie",
            "ua": "Краса та Здоров'я"
        },
        "description": {
            "en": "Discover a range of products to enhance your beauty and wellness.",
            "pl": "Odkryj szeroki wybór produktów, które pomogą poprawić Twoje piękno i dobre samopoczucie.",
            "ua": "Відкрийте широкий вибір продуктів, які допоможуть підкреслити вашу красу та покращити самопочуття."
        },
        "subcategories": [
            {
                "img": img1,
                "link": "https://www.aliexpress.com/w/wholesale-Electric-Bike.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Electric%20Bike%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Electric Bike",
                    "pl": "Rowery Elektryczne",
                    "ua": "Електровелосипеди"
                },
                "description": {
                    "en": "Cool Electric Bike for You",
                    "pl": "Rowery Elektryczne dla ciebie",
                    "ua": "Електровелосипеди для тебе"
                }
            },
            {
                "img": img2,
                "link": "https://www.aliexpress.com/w/wholesale-Yoga-Clothing.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Yoga%20Clothing%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Yoga Clothing",
                    "pl": "Odzież dla Yogi",
                    "ua": "Одяг для йоги"
                },
                "description": {
                    "en": "Yoga Clothing for You",
                    "pl": "Odzież dla Yogi dla ciebie",
                    "ua": "Одяг для йоги для тебе"
                }
            },
        ]
    },
    {
        "img": img6,
        "link": "/games",
        "title": {
            "en": "Toys & Games",
            "pl": "Zabawki i Gry",
            "ua": "Іграшки та Ігри"
        },
        "description": {
            "en": "Explore a world of fun and imagination with our wide selection of toys and games.",
            "pl": "Odkryj świat zabawy i wyobraźni dzięki naszej szerokiej ofercie zabawek i gier.",
            "ua": "Досліджуйте світ веселощів та уяви за допомогою нашого широкого вибору іграшок та ігор."
        },
        "subcategories": [
            {
                "img": img1,
                "link": "https://www.aliexpress.com/w/wholesale-Electric-Bike.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Electric%20Bike%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Electric Bike",
                    "pl": "Rowery Elektryczne",
                    "ua": "Електровелосипеди"
                },
                "description": {
                    "en": "Cool Electric Bike for You",
                    "pl": "Rowery Elektryczne dla ciebie",
                    "ua": "Електровелосипеди для тебе"
                }
            },
            {
                "img": img2,
                "link": "https://www.aliexpress.com/w/wholesale-Yoga-Clothing.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Yoga%20Clothing%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Yoga Clothing",
                    "pl": "Odzież dla Yogi",
                    "ua": "Одяг для йоги"
                },
                "description": {
                    "en": "Yoga Clothing for You",
                    "pl": "Odzież dla Yogi dla ciebie",
                    "ua": "Одяг для йоги для тебе"
                }
            },
        ]
    },
    {
        "img": img7,
        "link": "/bags",
        "title": {
            "en": "Luggage & Bags",
            "pl": "Bagaże i Torby",
            "ua": "Багаж та Сумки"
        },
        "description": {
            "en": "Discover stylish and functional luggage and bags for every occasion.",
            "pl": "Odkryj stylowe i funkcjonalne walizki i torby na każdą okazję.",
            "ua": "Відкрийте для себе стильні та функціональні валізки та сумки на будь-який смак."
        },
        "subcategories": [
            {
                "img": img1,
                "link": "https://www.aliexpress.com/w/wholesale-Electric-Bike.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Electric%20Bike%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Electric Bike",
                    "pl": "Rowery Elektryczne",
                    "ua": "Електровелосипеди"
                },
                "description": {
                    "en": "Cool Electric Bike for You",
                    "pl": "Rowery Elektryczne dla ciebie",
                    "ua": "Електровелосипеди для тебе"
                }
            },
            {
                "img": img2,
                "link": "https://www.aliexpress.com/w/wholesale-Yoga-Clothing.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Yoga%20Clothing%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Yoga Clothing",
                    "pl": "Odzież dla Yogi",
                    "ua": "Одяг для йоги"
                },
                "description": {
                    "en": "Yoga Clothing for You",
                    "pl": "Odzież dla Yogi dla ciebie",
                    "ua": "Одяг для йоги для тебе"
                }
            },
        ]
    },
    {
        "img": img8,
        "link": "/lighting",
        "title": {
            "en": "Home Improvement & Lighting",
            "pl": "Wykończenia wnętrz i oświetlenie",
            "ua": "Покращення дому та освітлення"
        },
        "description": {
            "en": "Transform your home with our range of home improvement products and lighting solutions.",
            "pl": "Przekształć swój dom za pomocą naszej gamy produktów do wykończeń wnętrz i rozwiązań oświetleniowych.",
            "ua": "Перетворіть свій дім за допомогою нашого асортименту продуктів для покращення дому та рішень освітлення."
        },
        "subcategories": [
            {
                "img": img1,
                "link": "https://www.aliexpress.com/w/wholesale-Electric-Bike.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Electric%20Bike%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Electric Bike",
                    "pl": "Rowery Elektryczne",
                    "ua": "Електровелосипеди"
                },
                "description": {
                    "en": "Cool Electric Bike for You",
                    "pl": "Rowery Elektryczne dla ciebie",
                    "ua": "Електровелосипеди для тебе"
                }
            },
            {
                "img": img2,
                "link": "https://www.aliexpress.com/w/wholesale-Yoga-Clothing.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Yoga%20Clothing%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Yoga Clothing",
                    "pl": "Odzież dla Yogi",
                    "ua": "Одяг для йоги"
                },
                "description": {
                    "en": "Yoga Clothing for You",
                    "pl": "Odzież dla Yogi dla ciebie",
                    "ua": "Одяг для йоги для тебе"
                }
            },
        ]
    },
    {
        "img": img9,
        "link": "/moto",
        "title": {
            "en": "Automotive & Motorcycle",
            "pl": "Motoryzacja i Motocykle",
            "ua": "Автомобіль та Мотоцикли"
        },
        "description": {
            "en": "Explore a wide range of automotive and motorcycle products to keep your vehicles running smoothly.",
            "pl": "Odkryj szeroki wybór produktów motoryzacyjnych i motocyklowych, aby utrzymać swoje pojazdy w doskonałym stanie.",
            "ua": "Відкрий широкий асортимент автомобільних та мотоциклетних товарів."
        },
        "subcategories": [
            {
                "img": img1,
                "link": "https://www.aliexpress.com/w/wholesale-Electric-Bike.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Electric%20Bike%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Electric Bike",
                    "pl": "Rowery Elektryczne",
                    "ua": "Електровелосипеди"
                },
                "description": {
                    "en": "Cool Electric Bike for You",
                    "pl": "Rowery Elektryczne dla ciebie",
                    "ua": "Електровелосипеди для тебе"
                }
            },
            {
                "img": img2,
                "link": "https://www.aliexpress.com/w/wholesale-Yoga-Clothing.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Yoga%20Clothing%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Yoga Clothing",
                    "pl": "Odzież dla Yogi",
                    "ua": "Одяг для йоги"
                },
                "description": {
                    "en": "Yoga Clothing for You",
                    "pl": "Odzież dla Yogi dla ciebie",
                    "ua": "Одяг для йоги для тебе"
                }
            },
        ]
    },
    {
        "img": img10,
        "link": "/accessories",
        "title": {
            "en": "Jewelry, Watches & Accessories",
            "pl": "Biżuteria, Zegarki i Akcesoria",
            "ua": "Прикраси, Годинники та Аксесуари"
        },
        "description": {
            "en": "Explore our exquisite collection of jewelry, watches, and accessories to add elegance to any outfit.",
            "pl": "Odkryj naszą wykwintną kolekcję biżuterii, zegarków i akcesoriów, aby dodać elegancji do każdej stylizacji.",
            "ua": "Тут ти знайдеш прикраси, годинники та аксесуари на свій смак."
        },
        "subcategories": [
            {
                "img": img1,
                "link": "https://www.aliexpress.com/w/wholesale-Electric-Bike.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Electric%20Bike%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Electric Bike",
                    "pl": "Rowery Elektryczne",
                    "ua": "Електровелосипеди"
                },
                "description": {
                    "en": "Cool Electric Bike for You",
                    "pl": "Rowery Elektryczne dla ciebie",
                    "ua": "Електровелосипеди для тебе"
                }
            },
            {
                "img": img2,
                "link": "https://www.aliexpress.com/w/wholesale-Yoga-Clothing.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Yoga%20Clothing%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Yoga Clothing",
                    "pl": "Odzież dla Yogi",
                    "ua": "Одяг для йоги"
                },
                "description": {
                    "en": "Yoga Clothing for You",
                    "pl": "Odzież dla Yogi dla ciebie",
                    "ua": "Одяг для йоги для тебе"
                }
            },
        ]
    },
    {
        "img": img11,
        "link": "/electronics",
        "title": {
            "en": "Electronics",
            "pl": "Elektronika",
            "ua": "Електроніка"
        },
        "description": {
            "en": "Discover the latest and greatest electronic gadgets and devices.",
            "pl": "Odkryj najnowsze i najlepsze gadżety i urządzenia elektroniczne.",
            "ua": "Відкрийте для себе найновіші та найкращі електронні пристрої та гаджети."
        },
        "subcategories": [
            {
                "img": img1,
                "link": "https://www.aliexpress.com/w/wholesale-Electric-Bike.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Electric%20Bike%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Electric Bike",
                    "pl": "Rowery Elektryczne",
                    "ua": "Електровелосипеди"
                },
                "description": {
                    "en": "Cool Electric Bike for You",
                    "pl": "Rowery Elektryczne dla ciebie",
                    "ua": "Електровелосипеди для тебе"
                }
            },
            {
                "img": img2,
                "link": "https://www.aliexpress.com/w/wholesale-Yoga-Clothing.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Yoga%20Clothing%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Yoga Clothing",
                    "pl": "Odzież dla Yogi",
                    "ua": "Одяг для йоги"
                },
                "description": {
                    "en": "Yoga Clothing for You",
                    "pl": "Odzież dla Yogi dla ciebie",
                    "ua": "Одяг для йоги для тебе"
                }
            },
        ]
    },
    {
        "img": img12,
        "link": "/shoes",
        "title": {
            "en": "Shoes",
            "pl": "Obuwie",
            "ua": "Взуття"
        },
        "description": {
            "en": "Discover stylish and comfortable shoes.",
            "pl": "Odkryj stylowe i wygodne obuwie.",
            "ua": "Відкрийте для себе стильне та комфортне взуття."
        },
        "subcategories": [
            {
                "img": img1,
                "link": "https://www.aliexpress.com/w/wholesale-Electric-Bike.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Electric%20Bike%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Electric Bike",
                    "pl": "Rowery Elektryczne",
                    "ua": "Електровелосипеди"
                },
                "description": {
                    "en": "Cool Electric Bike for You",
                    "pl": "Rowery Elektryczne dla ciebie",
                    "ua": "Електровелосипеди для тебе"
                }
            },
            {
                "img": img2,
                "link": "https://www.aliexpress.com/w/wholesale-Yoga-Clothing.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Yoga%20Clothing%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Yoga Clothing",
                    "pl": "Odzież dla Yogi",
                    "ua": "Одяг для йоги"
                },
                "description": {
                    "en": "Yoga Clothing for You",
                    "pl": "Odzież dla Yogi dla ciebie",
                    "ua": "Одяг для йоги для тебе"
                }
            },
        ]
    },
    {
        "img": img13,
        "link": "/HairExtensions",
        "title": {
            "en": "Hair Extensions & Wigs",
            "pl": "Włosy przedłużające i peruki",
            "ua": "Накладні волосся та парики"
        },
        "description": {
            "en": "Enhance your style with our range of high-quality hair extensions and wigs.",
            "pl": "Podkreśl swój styl za pomocą naszej gamy wysokiej jakości włosów przedłużających i peruk.",
            "ua": "Підкресліть свій стиль за допомогою нашого асортименту високоякісних накладних волосся та париків."
        },
        "subcategories": [
            {
                "img": img1,
                "link": "https://www.aliexpress.com/w/wholesale-Electric-Bike.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Electric%20Bike%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Electric Bike",
                    "pl": "Rowery Elektryczne",
                    "ua": "Електровелосипеди"
                },
                "description": {
                    "en": "Cool Electric Bike for You",
                    "pl": "Rowery Elektryczne dla ciebie",
                    "ua": "Електровелосипеди для тебе"
                }
            },
            {
                "img": img2,
                "link": "https://www.aliexpress.com/w/wholesale-Yoga-Clothing.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Yoga%20Clothing%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Yoga Clothing",
                    "pl": "Odzież dla Yogi",
                    "ua": "Одяг для йоги"
                },
                "description": {
                    "en": "Yoga Clothing for You",
                    "pl": "Odzież dla Yogi dla ciebie",
                    "ua": "Одяг для йоги для тебе"
                }
            },
        ]
    },
    {
        "img": img14,
        "link": "/Office&Education",
        "title": {
            "en": "Computer, Office & Education",
            "pl": "Komputery, Biuro i Edukacja",
            "ua": "Комп'ютери, Офіс та Освіта"
        },
        "description": {
            "en": "Explore our selection of computer equipment, office supplies, and educational resources.",
            "pl": "Odkryj nasz wybór sprzętu komputerowego, artykułów biurowych i materiałów edukacyjnych.",
            "ua": "Досліджуйте наш вибір комп'ютерного обладнання, офісних приладдя та освітніх ресурсів."
        },
        "subcategories": [
            {
                "img": img1,
                "link": "https://www.aliexpress.com/w/wholesale-Electric-Bike.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Electric%20Bike%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Electric Bike",
                    "pl": "Rowery Elektryczne",
                    "ua": "Електровелосипеди"
                },
                "description": {
                    "en": "Cool Electric Bike for You",
                    "pl": "Rowery Elektryczne dla ciebie",
                    "ua": "Електровелосипеди для тебе"
                }
            },
            {
                "img": img2,
                "link": "https://www.aliexpress.com/w/wholesale-Yoga-Clothing.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Yoga%20Clothing%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Yoga Clothing",
                    "pl": "Odzież dla Yogi",
                    "ua": "Одяг для йоги"
                },
                "description": {
                    "en": "Yoga Clothing for You",
                    "pl": "Odzież dla Yogi dla ciebie",
                    "ua": "Одяг для йоги для тебе"
                }
            },
        ]
    },
    {
        "img": img15,
        "link": "/Phones&Telecommunications",
        "title": {
            "en": "Phones & Telecommunications",
            "pl": "Telefony i Telekomunikacja",
            "ua": "Телефони та Телекомунікації"
        },
        "description": {
            "en": "Discover the latest smartphones, accessories, and telecommunications devices.",
            "pl": "Odkryj najnowsze smartfony, akcesoria i urządzenia telekomunikacyjne.",
            "ua": "Дізнайтеся про найновіші смартфони, аксесуари та телекомунікаційні пристрої."
        },
        "subcategories": [
            {
                "img": img1,
                "link": "https://www.aliexpress.com/w/wholesale-Electric-Bike.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Electric%20Bike%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Electric Bike",
                    "pl": "Rowery Elektryczne",
                    "ua": "Електровелосипеди"
                },
                "description": {
                    "en": "Cool Electric Bike for You",
                    "pl": "Rowery Elektryczne dla ciebie",
                    "ua": "Електровелосипеди для тебе"
                }
            },
            {
                "img": img2,
                "link": "https://www.aliexpress.com/w/wholesale-Yoga-Clothing.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Yoga%20Clothing%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Yoga Clothing",
                    "pl": "Odzież dla Yogi",
                    "ua": "Одяг для йоги"
                },
                "description": {
                    "en": "Yoga Clothing for You",
                    "pl": "Odzież dla Yogi dla ciebie",
                    "ua": "Одяг для йоги для тебе"
                }
            },
        ]
    },
    {
        "img": img16,
        "link": "/kids",
        "title": {
            "en": "Babies & Kids",
            "pl": "Dzieci i Niemowlęta",
            "ua": "Діти та Немовлята"
        },
        "description": {
            "en": "Explore our range of products designed for babies and kids to ensure their comfort and enjoyment.",
            "pl": "Odkryj naszą ofertę produktów zaprojektowanych dla dzieci i niemowląt, aby zapewnić im komfort i przyjemność.",
            "ua": "Досліджуйте наш асортимент продуктів, призначених для дітей та немовлят, щоб забезпечити їх комфорт та задоволення."
        },
        "subcategories": [
            {
                "img": img1,
                "link": "https://www.aliexpress.com/w/wholesale-Electric-Bike.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Electric%20Bike%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Electric Bike",
                    "pl": "Rowery Elektryczne",
                    "ua": "Електровелосипеди"
                },
                "description": {
                    "en": "Cool Electric Bike for You",
                    "pl": "Rowery Elektryczne dla ciebie",
                    "ua": "Електровелосипеди для тебе"
                }
            },
            {
                "img": img2,
                "link": "https://www.aliexpress.com/w/wholesale-Yoga-Clothing.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Yoga%20Clothing%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Yoga Clothing",
                    "pl": "Odzież dla Yogi",
                    "ua": "Одяг для йоги"
                },
                "description": {
                    "en": "Yoga Clothing for You",
                    "pl": "Odzież dla Yogi dla ciebie",
                    "ua": "Одяг для йоги для тебе"
                }
            },
        ]
    },
    {
        "img": img1,
        "link": "/home&garden",
        "title": {
            "en": "Home & Garden",
            "pl": "Dom i Ogród",
            "ua": "Дім і Сад"
        },
        "description": {
            "en": "Transform your living space with our wide selection of home decor, gardening supplies, and outdoor furniture.",
            "pl": "Przekształć swoją przestrzeń życiową dzięki naszej szerokiej gamie dekoracji do domu, artykułów ogrodniczych i mebli ogrodowych.",
            "ua": "Перетворіть свій простір для життя за допомогою нашого широкого вибору декору для дому, садового інвентарю та меблів для вуличних зон."
        },
        "subcategories": [
            {
                "img": img1,
                "link": "https://www.aliexpress.com/w/wholesale-Electric-Bike.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Electric%20Bike%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Electric Bike",
                    "pl": "Rowery Elektryczne",
                    "ua": "Електровелосипеди"
                },
                "description": {
                    "en": "Cool Electric Bike for You",
                    "pl": "Rowery Elektryczne dla ciebie",
                    "ua": "Електровелосипеди для тебе"
                }
            },
            {
                "img": img2,
                "link": "https://www.aliexpress.com/w/wholesale-Yoga-Clothing.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Yoga%20Clothing%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Yoga Clothing",
                    "pl": "Odzież dla Yogi",
                    "ua": "Одяг для йоги"
                },
                "description": {
                    "en": "Yoga Clothing for You",
                    "pl": "Odzież dla Yogi dla ciebie",
                    "ua": "Одяг для йоги для тебе"
                }
            },
        ]
    },
    {
        "img": img17,
        "link": "/wClothing",
        "title": {
            "en": "Women's Clothing",
            "pl": "Odzież damska",
            "ua": "Жіночий одяг"
        },
        "description": {
            "en": "Discover the latest trends and timeless classics in women's fashion.",
            "pl": "Odkryj najnowsze trendy i ponadczasowe klasyki w modzie damsiej.",
            "ua": "Відкрийте для себе найновіші тренди та вічні класики в жіночій моді."
        },
        "subcategories": [
            {
                "img": img1,
                "link": "https://www.aliexpress.com/w/wholesale-Electric-Bike.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Electric%20Bike%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Electric Bike",
                    "pl": "Rowery Elektryczne",
                    "ua": "Електровелосипеди"
                },
                "description": {
                    "en": "Cool Electric Bike for You",
                    "pl": "Rowery Elektryczne dla ciebie",
                    "ua": "Електровелосипеди для тебе"
                }
            },
            {
                "img": img2,
                "link": "https://www.aliexpress.com/w/wholesale-Yoga-Clothing.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Yoga%20Clothing%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Yoga Clothing",
                    "pl": "Odzież dla Yogi",
                    "ua": "Одяг для йоги"
                },
                "description": {
                    "en": "Yoga Clothing for You",
                    "pl": "Odzież dla Yogi dla ciebie",
                    "ua": "Одяг для йоги для тебе"
                }
            },
        ]
    },
    {
        "img": img18,
        "link": "/mClothing",
        "title": {
            "en": "Men's Clothing",
            "pl": "Odzież męska",
            "ua": "Чоловічий одяг"
        },
        "description": {
            "en": "Explore our collection of stylish and comfortable clothing for men.",
            "pl": "Odkryj naszą kolekcję stylowej i wygodnej odzieży dla mężczyzn.",
            "ua": "Досліджуйте нашу колекцію стильного та комфортного одягу для чоловіків."
        },
        "subcategories": [
            {
                "img": img1,
                "link": "https://www.aliexpress.com/w/wholesale-Electric-Bike.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Electric%20Bike%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Electric Bike",
                    "pl": "Rowery Elektryczne",
                    "ua": "Електровелосипеди"
                },
                "description": {
                    "en": "Cool Electric Bike for You",
                    "pl": "Rowery Elektryczne dla ciebie",
                    "ua": "Електровелосипеди для тебе"
                }
            },
            {
                "img": img2,
                "link": "https://www.aliexpress.com/w/wholesale-Yoga-Clothing.html?spm=a2g0o.categorymp.0.0.708dJilIJilIs7&categoryUrlParams=%7B%22q%22%3A%22Yoga%20Clothing%22%2C%22s%22%3A%22qp_nw%22%2C%22osf%22%3A%22category_navigate%22%2C%22sg_search_params%22%3A%22%22%2C%22guide_trace%22%3A%2265737617-597f-413b-bd56-2347b63e13b5%22%2C%22scene_id%22%3A%2237749%22%2C%22searchBizScene%22%3A%22openSearch%22%2C%22recog_lang%22%3A%22en%22%2C%22bizScene%22%3A%22category_navigate%22%2C%22guideModule%22%3A%22category_navigate_vertical%22%2C%22postCatIds%22%3A%2218%2C201768104%2C150401%2C100005769%22%2C%22scene%22%3A%22category_navigate%22%7D&isFromCategory=y",
                "title": {
                    "en": "Yoga Clothing",
                    "pl": "Odzież dla Yogi",
                    "ua": "Одяг для йоги"
                },
                "description": {
                    "en": "Yoga Clothing for You",
                    "pl": "Odzież dla Yogi dla ciebie",
                    "ua": "Одяг для йоги для тебе"
                }
            },
        ]
    }


]

const Categories = (props: CategoriesPropsType) => {

    const listRef = useRef<HTMLUListElement | null>(null);
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = categories.length;

    // -----------------------------------------------------------------
    // scroll categories by mousewheel

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            if (event.deltaY !== 0) {
                event.preventDefault();
                if (listRef.current) {
                    listRef.current.scrollLeft += event.deltaY;
                }
            }
        };

        const ulElement = listRef.current;
        if (ulElement) {
            ulElement.addEventListener('wheel', handleWheel as EventListener);
        }

        return () => {
            if (ulElement) {
                ulElement.removeEventListener('wheel', handleWheel as EventListener);
            }
        };
    }, []);

    // -----------------------------------------------------------------

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

// -------------------------------------------
//     слухає лінк і в залежності від нього вертає відповідну субкатегорію
    const CategoryDetails = () => {
        const { categoryLink } = useParams<{ categoryLink: string }>();
        const category = categories.find(cat => cat.link === `/${categoryLink}`);

        if (!category) {
            return <div>Category not found</div>;
        }

        return (
            <SubCategories
                language={props.language}
                CategoryImg={category.img}
                CategoryTitle={category.title}
                Subcategories={category.subcategories}
            />
        );
    };


    return (
        <div className={s.Categories}>

            <div className="border-gray-200 dark:border-gray-700">
                <ul ref={listRef}
                    className="flex flex-row overflow-y-hidden scrollbar -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    {categories.map((category, index) => (
                        <Category
                            key={index}
                            link={category.link}
                            name={props.language === 'ua' ? category.title['ua'] : props.language === 'pl' ? category.title['pl'] : category.title['en']}
                            icon={category.img}
                            onClick={() => navigate(category.link)}
                        />
                    ))}
                </ul>
            </div>
            <Routes>
                <Route path=":categoryLink" element={<CategoryDetails />} />
            </Routes>
        </div>

    );
};

export default Categories;
