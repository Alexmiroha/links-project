import React, {useEffect, useRef, useState} from 'react';
import {Route, Routes, useNavigate, useParams} from "react-router-dom";
import s from './Categories.module.css';
import img1 from '../../img/Categories/scooter.jpg';
import img2 from '../../img/Categories/ebike.jpg';
import img3 from '../../img/pets.jpg';

import Category from "./Category";
import SubCategories from "./SubCategories";

type CategoriesPropsType = {
    language: string,
};

const categories = [
    {
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
                "link": "https://s.click.aliexpress.com/e/_DdQnaZp",
                "title": {
                    "en": "Electric Scooter",
                    "pl": "Hulajnogi Elektryczne",
                    "ua": "Електросамокати"
                },
                "description": {
                    "en": "Enjoy fast and eco-friendly rides with our electric scooters.",
                    "pl": "Ciesz się szybką i ekologiczną jazdą dzięki naszym hulajnogom elektrycznym.",
                    "ua": "Насолоджуйтеся швидкими та екологічними поїздками на наших електросамокатах."
                }
            },
            {
                "img": img2,
                "link": "https://s.click.aliexpress.com/e/_DCIENZz",
                "title": {
                    "en": "Electric Bike",
                    "pl": "Rowery Elektryczne",
                    "ua": "Електровелосипеди"
                },
                "description": {
                    "en": "Discover the freedom of electric biking with our top models.",
                    "pl": "Odkryj wolność jazdy na rowerze elektrycznym z naszymi najlepszymi modelami.",
                    "ua": "Відкрийте для себе свободу їзди на електровелосипеді з нашими найкращими моделями."
                }
            },
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_DdDkfdz",
                "title": {
                    "en": "Dumbbells",
                    "pl": "Hantle",
                    "ua": "Гантелі"
                },
                "description": {
                    "en": "Build strength and tone your muscles with our range of dumbbells.",
                    "pl": "Buduj siłę i rzeźb mięśnie dzięki naszemu asortymentowi hantli.",
                    "ua": "Будуйте силу та тонізуйте м’язи з нашим асортиментом гантелей."
                }
            },
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_DnnUwO3",
                "title": {
                    "en": "Yoga Clothing",
                    "pl": "Odzież do Jogi",
                    "ua": "Одяг для йоги"
                },
                "description": {
                    "en": "Stay comfortable and stylish during your yoga sessions with our yoga clothing.",
                    "pl": "Pozostań wygodny i stylowy podczas sesji jogi dzięki naszej odzieży do jogi.",
                    "ua": "Будьте зручними та стильними під час занять йогою з нашим одягом для йоги."
                }
            },
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_DCvOALl",
                "title": {
                    "en": "Fishing Accessories",
                    "pl": "Akcesoria wędkarskie",
                    "ua": "Аксесуари для риболовлі"
                },
                "description": {
                    "en": "Gear up for the perfect fishing trip with our fishing accessories.",
                    "pl": "Przygotuj się na idealny wypad na ryby dzięki naszym akcesoriom wędkarskim.",
                    "ua": "Підготуйтесь до ідеальної риболовлі з нашими аксесуарами для риболовлі."
                }
            },
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_Dk1PEXz",
                "title": {
                    "en": "Road Bicycle",
                    "pl": "Rowery Szosowe",
                    "ua": "Шосейні Велосипеди"
                },
                "description": {
                    "en": "Experience speed and performance with our range of road bicycles.",
                    "pl": "Doświadcz prędkości i wydajności dzięki naszemu asortymentowi rowerów szosowych.",
                    "ua": "Відчуйте швидкість та продуктивність з нашим асортиментом шосейних велосипедів."
                }
            },
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_DCjQIXV",
                "title": {
                    "en": "Mountain bike",
                    "pl": "Rowery Górskie",
                    "ua": "Гірськькі Велосипеди"
                },
                "description": {
                    "en": "Conquer any terrain with our rugged mountain bikes.",
                    "pl": "Podbijaj każde teren dzięki naszym wytrzymałym rowerom górskim.",
                    "ua": "Підкорюйте будь-яку місцевість з нашими міцними гірськими велосипедами."
                }
            },
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_DkRivuL",
                "title": {
                    "en": "Electric Bike Motor",
                    "pl": "Silniki Elekrorowerowe",
                    "ua": "Велосипедні Електродвигуни"
                },
                "description": {
                    "en": "Upgrade your bike with our powerful electric bike motors.",
                    "pl": "Ulepsz swój rower dzięki naszym potężnym silnikom elektrycznym.",
                    "ua": "Покращте свій велосипед з нашими потужними електродвигунами."
                }
            },
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_Dk5vZ9N",
                "title": {
                    "en": "Bicycle Accessories",
                    "pl": "Akcesoria Rowerowe",
                    "ua": "Велоаксесуари"
                },
                "description": {
                    "en": "Enhance your cycling experience with our range of bicycle accessories.",
                    "pl": "Zwiększ swoje doświadczenie rowerowe dzięki naszemu asortymentowi akcesoriów rowerowych.",
                    "ua": "Покращте свій досвід їзди на велосипеді з нашим асортиментом велоаксесуарів."
                }
            }
        ]
    },
    {
        "link": "/pet",
        "title": {
            "en": "Pet Supplies",
            "pl": "Artykuły dla zwierząt",
            "ua": "Товари для тварин"
        },
        "description": {
            "en": "Everything your furry friends need to live their best lives.",
            "pl": "Wszystko, czego potrzebują twoi futrzaści przyjaciele, aby żyć pełnią życia.",
            "ua": "Усе, що потрібно вашим пухнастим друзям для найкращого життя."
        },
        "subcategories": [
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_DCx0WiF",
                "title": {
                    "en": "Toys",
                    "pl": "Zabawki",
                    "ua": "Іграшки"
                },
                "description": {
                    "en": "Delight your furry friend with these fantastic toys!",
                    "pl": "Spraw radość swojemu futrzastemu przyjacielowi tymi fantastycznymi zabawkami!",
                    "ua": "Порадуйте свого пухнастого друга цими чудовими іграшками!"
                }
            },
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_DFLyBHz",
                "title": {
                    "en": "Beds & Furniture",
                    "pl": "Łóżka i meble",
                    "ua": "Ліжка та меблі"
                },
                "description": {
                    "en": "Comfortable beds and furniture for your pets to relax in style.",
                    "pl": "Wygodne łóżka i meble, aby twoje zwierzęta mogły relaksować się w stylu.",
                    "ua": "Зручні ліжка та меблі для ваших тварин, щоб розслаблятися зі стилем."
                }
            },
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_DB469AB",
                "title": {
                    "en": "Carriers & Travel Products",
                    "pl": "Transportery i produkty podróżne",
                    "ua": "Переноски та товари для подорожей"
                },
                "description": {
                    "en": "Travel comfortably and safely with your pets using our carriers and travel products.",
                    "pl": "Podróżuj wygodnie i bezpiecznie ze swoimi zwierzętami dzięki naszym transporterom i produktom podróżnym.",
                    "ua": "Подорожуйте зручно та безпечно з вашими тваринами, використовуючи наші переноски та товари для подорожей."
                }
            },
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_DBhYUdv",
                "title": {
                    "en": "Grooming",
                    "pl": "Pielęgnacja",
                    "ua": "Грумінг"
                },
                "description": {
                    "en": "Keep your pets looking their best with our grooming supplies.",
                    "pl": "Utrzymuj swoje zwierzęta w najlepszej formie dzięki naszym artykułom do pielęgnacji.",
                    "ua": "Зберігайте ваших тварин у найкращій формі з нашими засобами для грумінгу."
                }
            },
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_DEQJfVd",
                "title": {
                    "en": "Feeding & Watering Supplies",
                    "pl": "Artykuły do karmienia i pojenia",
                    "ua": "Приладдя для годування та поїння"
                },
                "description": {
                    "en": "High-quality feeding and watering supplies for your pets.",
                    "pl": "Wysokiej jakości artykuły do karmienia i pojenia twoich zwierząt.",
                    "ua": "Високоякісні приладдя для годування та поїння ваших тварин."
                }
            },
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_DnOqwJ5",
                "title": {
                    "en": "Collars, Harnesses & Leashes",
                    "pl": "Obroże, szelki i smycze",
                    "ua": "Нашийники, шлейки та повідці"
                },
                "description": {
                    "en": "Durable and stylish collars, harnesses, and leashes for your pets.",
                    "pl": "Trwałe i stylowe obroże, szelki i smycze dla twoich zwierząt.",
                    "ua": "Міцні та стильні нашийники, шлейки та повідці для ваших тварин."
                }
            }
        ]
    },
    {
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
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_Dd7T01p",
                "title": {
                    "en": "Coffee Tables",
                    "pl": "Stoliki kawowe",
                    "ua": "Кавові столики"
                },
                "description": {
                    "en": "Elegant and high-quality coffee tables for your home and office.",
                    "pl": "Eleganckie i wysokiej jakości stoliki kawowe do domu i biura.",
                    "ua": "Вишукані та якісні кавові столики для вашого дому та офісу."
                }
            },
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_DEPRKz1",
                "title": {
                    "en": "Living Room Cabinets",
                    "pl": "Szafki do salonu",
                    "ua": "Шафи для вітальні"
                },
                "description": {
                    "en": "Stylish living room cabinets to organize your space.",
                    "pl": "Stylowe szafki do salonu, aby zorganizować przestrzeń.",
                    "ua": "Стильні шафи для вітальні для організації вашого простору."
                }
            },
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_DBoxGFV",
                "title": {
                    "en": "Sun Loungers",
                    "pl": "Leżaki",
                    "ua": "Шезлонги"
                },
                "description": {
                    "en": "Relax in style with our comfortable sun loungers.",
                    "pl": "Zrelaksuj się w stylu z naszymi wygodnymi leżakami.",
                    "ua": "Розслабтесь зі стилем на наших зручних шезлонгах."
                }
            },
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_Dlod9dV",
                "title": {
                    "en": "Living Room Sofas",
                    "pl": "Sofy do salonu",
                    "ua": "Дивани для вітальні"
                },
                "description": {
                    "en": "Comfortable and stylish sofas for your living room.",
                    "pl": "Wygodne i stylowe sofy do Twojego salonu.",
                    "ua": "Зручні та стильні дивани для вашої вітальні."
                }
            },
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_DFjuNoT",
                "title": {
                    "en": "Inflatable Seatings",
                    "pl": "Nadmuchiwane siedzenia",
                    "ua": "Надувні сидіння"
                },
                "description": {
                    "en": "Versatile and fun inflatable seatings for any occasion.",
                    "pl": "Wszechstronne i zabawne nadmuchiwane siedzenia na każdą okazję.",
                    "ua": "Універсальні та веселі надувні сидіння для будь-якої нагоди."
                }
            },
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_Dm5XmNh",
                "title": {
                    "en": "Bed Bases & Frames",
                    "pl": "Bazy i ramy łóżek",
                    "ua": "Підстави та рами для ліжок"
                },
                "description": {
                    "en": "Sturdy and stylish bed bases and frames for a good night's sleep.",
                    "pl": "Solidne i stylowe bazy i ramy łóżek dla dobrego snu.",
                    "ua": "Міцні та стильні підстави та рами для ліжок для хорошого сну."
                }
            },
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_DcAfpwn",
                "title": {
                    "en": "Dressers",
                    "pl": "Komody",
                    "ua": "Комоди"
                },
                "description": {
                    "en": "Elegant dressers to keep your clothes organized.",
                    "pl": "Eleganckie komody, aby utrzymać ubrania w porządku.",
                    "ua": "Елегантні комоди для організації вашого одягу."
                }
            },
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_Ddb2xHd",
                "title": {
                    "en": "Hammocks",
                    "pl": "Hamak",
                    "ua": "Гамаки"
                },
                "description": {
                    "en": "Relax and unwind in our comfortable hammocks.",
                    "pl": "Zrelaksuj się i odpręż w naszych wygodnych hamakach.",
                    "ua": "Розслабтеся та відпочиньте в наших зручних гамаках."
                }
            }
        ]
    },

    {
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
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_Dmu8GW3",
                "title": {
                    "en": "Cosmetics Organizers",
                    "pl": "Organizery Kosmetyczne",
                    "ua": "Органайзери для Косметики"
                },
                "description": {
                    "en": "Keep your beauty products neat and accessible with our cosmetics organizers.",
                    "pl": "Utrzymuj swoje kosmetyki w porządku i łatwo dostępnymi dzięki naszym organizerom kosmetycznym.",
                    "ua": "Тримайте свої косметичні продукти в порядку та доступності з нашими органайзерами для косметики."
                }
            },
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_DksMelv",
                "title": {
                    "en": "Back Massage Instrument",
                    "pl": "Urządzenie do Masażu Pleców",
                    "ua": "Прилад для Масажу Спини"
                },
                "description": {
                    "en": "Relieve tension and stress with our back massage instruments.",
                    "pl": "Złagodź napięcie i stres dzięki naszym urządzeniom do masażu pleców.",
                    "ua": "Зніміть напругу та стрес за допомогою наших приладів для масажу спини."
                }
            },
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_DlpxD7p",
                "title": {
                    "en": "Massage Comb",
                    "pl": "Grzebień do Masażu",
                    "ua": "Масажна Гребінець"
                },
                "description": {
                    "en": "Stimulate your scalp and improve circulation with our massage combs.",
                    "pl": "Stymuluj skórę głowy i popraw krążenie dzięki naszym grzebieniom do masażu.",
                    "ua": "Стимулюйте шкіру голови та покращуйте циркуляцію за допомогою наших масажних гребінців."
                }
            },
            {
                "img": img3,
                "link": "https://s.click.aliexpress.com/e/_DFdmRtl",
                "title": {
                    "en": "Permanent Makeup Machines",
                    "pl": "Maszyny do Makijażu Permanentnego",
                    "ua": "Машинки для Перманентного Макіяжу"
                },
                "description": {
                    "en": "Achieve flawless permanent makeup with our advanced machines.",
                    "pl": "Uzyskaj idealny makijaż permanentny dzięki naszym zaawansowanym maszynom.",
                    "ua": "Досягніть бездоганного перманентного макіяжу за допомогою наших передових машинок."
                }
            }
        ]
    },
    {
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
        const {categoryLink} = useParams<{ categoryLink: string }>();
        const category = categories.find(cat => cat.link === `/${categoryLink}`);

        if (!category) {
            return <SubCategories
                language={props.language}
                CategoryTitle={{en: 'Sports & Entertainment', pl: 'Sport i Rozrywka', ua: 'Спорт і Розваги'}}
                Subcategories={[
                    {
                        "img": img1,
                        "link": "https://s.click.aliexpress.com/e/_DdQnaZp",
                        "title": {
                            "en": "Electric Scooter",
                            "pl": "Hulajnogi Elektryczne",
                            "ua": "Електросамокати"
                        },
                        "description": {
                            "en": "",
                            "pl": "",
                            "ua": ""
                        }
                    },
                    {
                        "img": img2,
                        "link": "https://s.click.aliexpress.com/e/_DCIENZz",
                        "title": {
                            "en": "Electric Bike",
                            "pl": "Rowery Elektryczne",
                            "ua": "Електровелосипеди"
                        },
                        "description": {
                            "en": "",
                            "pl": "",
                            "ua": ""
                        }
                    },
                    {
                        "img": img3,
                        "link": "https://s.click.aliexpress.com/e/_DdDkfdz",
                        "title": {
                            "en": "Dumbbells",
                            "pl": "Hantle",
                            "ua": "Гантелі"
                        },
                        "description": {
                            "en": "",
                            "pl": "",
                            "ua": ""
                        }
                    },
                    {
                        "img": img3,
                        "link": "https://s.click.aliexpress.com/e/_DnnUwO3",
                        "title": {
                            "en": "Yoga Clothing",
                            "pl": "Odzież do Jogi",
                            "ua": "Одяг для йоги"
                        },
                        "description": {
                            "en": "",
                            "pl": "",
                            "ua": ""
                        }
                    },
                    {
                        "img": img3,
                        "link": "https://s.click.aliexpress.com/e/_DCvOALl",
                        "title": {
                            "en": "Fishing Accessories",
                            "pl": "Accesoria wędkarskie",
                            "ua": "Аксесуари для риболовлі"
                        },
                        "description": {
                            "en": "",
                            "pl": "",
                            "ua": ""
                        }
                    },
                    {
                        "img": img3,
                        "link": "https://s.click.aliexpress.com/e/_Dk1PEXz",
                        "title": {
                            "en": "Road Bicycle",
                            "pl": "Rowery Szosowe",
                            "ua": "Шосейні Велосипеди"
                        },
                        "description": {
                            "en": "",
                            "pl": "",
                            "ua": ""
                        }
                    },
                    {
                        "img": img3,
                        "link": "https://s.click.aliexpress.com/e/_DCjQIXV",
                        "title": {
                            "en": "Mountain bike",
                            "pl": "Rowery Górskie",
                            "ua": "Гірськькі Велосипеди"
                        },
                        "description": {
                            "en": "",
                            "pl": "",
                            "ua": ""
                        }
                    },
                    {
                        "img": img3,
                        "link": "https://s.click.aliexpress.com/e/_DkRivuL",
                        "title": {
                            "en": "Electric Bike Motor",
                            "pl": "Silniki Elekrorowerowe",
                            "ua": "Велосипедні Електродвигуни"
                        },
                        "description": {
                            "en": "",
                            "pl": "",
                            "ua": ""
                        }
                    },
                    {
                        "img": img3,
                        "link": "https://s.click.aliexpress.com/e/_Dk5vZ9N",
                        "title": {
                            "en": "Bicycle Accessories",
                            "pl": "Accesoia Rowerowe",
                            "ua": "Велоаксесуари"
                        },
                        "description": {
                            "en": "",
                            "pl": "",
                            "ua": ""
                        }
                    },
                ]}
            />
        }

        return (
            <SubCategories
                language={props.language}
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
                            icon={'skmdkas'}
                            link={category.link}
                            name={props.language === 'ua' ? category.title['ua'] : props.language === 'pl' ? category.title['pl'] : category.title['en']}
                            onClick={() => navigate(category.link)}
                        />
                    ))}
                </ul>
            </div>
            <Routes>
                <Route path=":categoryLink" element={<CategoryDetails/>}/>
            </Routes>
        </div>

    );
};

export default Categories;
