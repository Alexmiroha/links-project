import React, {useState} from 'react';
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

import CategoryCard from './CategoryCard';

type CategoriesPropsType = {
    language: string,
};

const categories = [
    {
        "img": img2,
        "link": "https://s.click.aliexpress.com/e/_DETX2pZ",
        "title": {
            "en": "Sports & Entertainment",
            "pl": "Sport i Rozrywka",
            "ua": "Спорт і Розваги"
        },
        "description": {
            "en": "Dive into the thrill of sports and entertainment with our diverse selection.",
            "pl": "Zanurz się w emocje sportu i rozrywki z naszym różnorodnym wyborem.",
            "ua": "Поринь у захоплення спортом та розвагами з нашим різноманітним асортиментом."
        }
    },
    {
        "img": img3,
        "link": "https://s.click.aliexpress.com/e/_DlFzngb",
        "title": {
            "en": "Pet Supplies",
            "pl": "Produkty dla zwierząt",
            "ua": "Товари для тварин"
        },
        "description": {
            "en": "Everything your furry friends need to live their best lives.",
            "pl": "Wszystko, czego potrzebują twoi futrzaści przyjaciele, aby żyć pełnią życia.",
            "ua": "Усе, що потрібно вашим пухнастим друзям для найкращого життя."
        }
    },
    {
        "img": img4,
        "link": "https://s.click.aliexpress.com/e/_DEq7IMP",
        "title": {
            "en": "Furniture",
            "pl": "Meble",
            "ua": "Меблі"
        },
        "description": {
            "en": "Find furniture for your home and every room to suit your style.",
            "pl": "Znajdź meble do swojego domu i każdego pomieszczenia, które odpowiadają Twojemu stylowi.",
            "ua": "Знайдіть меблі для вашого будинку та кожної кімнати, які відповідають вашому стилю."
        }
    },
    {
        "img": img5,
        "link": "https://s.click.aliexpress.com/e/_DlCsIb5",
        "title": {
            "en": "Beauty & Health",
            "pl": "Uroda i Zdrowie",
            "ua": "Краса та Здоров'я"
        },
        "description": {
            "en": "Discover a range of products to enhance your beauty and wellness.",
            "pl": "Odkryj szeroki wybór produktów, które pomogą poprawić Twoje piękno i dobre samopoczucie.",
            "ua": "Відкрийте широкий вибір продуктів, які допоможуть підкреслити вашу красу та покращити самопочуття."
        }
    },
    {
        "img": img6,
        "link": "https://s.click.aliexpress.com/e/_DDxVkt1",
        "title": {
            "en": "Toys & Games",
            "pl": "Zabawki i Gry",
            "ua": "Іграшки та Ігри"
        },
        "description": {
            "en": "Explore a world of fun and imagination with our wide selection of toys and games.",
            "pl": "Odkryj świat zabawy i wyobraźni dzięki naszej szerokiej ofercie zabawek i gier.",
            "ua": "Досліджуйте світ веселощів та уяви за допомогою нашого широкого вибору іграшок та ігор."
        }
    },
    {
        "img": img7,
        "link": "https://s.click.aliexpress.com/e/_DmThYOx",
        "title": {
            "en": "Luggage & Bags",
            "pl": "Bagaże i Torby",
            "ua": "Багаж та Сумки"
        },
        "description": {
            "en": "Discover stylish and functional luggage and bags for every occasion.",
            "pl": "Odkryj stylowe i funkcjonalne walizki i torby na każdą okazję.",
            "ua": "Відкрийте для себе стильні та функціональні валізки та сумки на будь-який смак."
        }
    },
    {
        "img": img8,
        "link": "https://s.click.aliexpress.com/e/_DCEA9hV",
        "title": {
            "en": "Home Improvement & Lighting",
            "pl": "Wykończenia wnętrz i oświetlenie",
            "ua": "Покращення дому та освітлення"
        },
        "description": {
            "en": "Transform your home with our range of home improvement products and lighting solutions.",
            "pl": "Przekształć swój dom za pomocą naszej gamy produktów do wykończeń wnętrz i rozwiązań oświetleniowych.",
            "ua": "Перетворіть свій дім за допомогою нашого асортименту продуктів для покращення дому та рішень освітлення."
        }
    },
    {
        "img": img9,
        "link": "https://s.click.aliexpress.com/e/_DCyO8I3",
        "title": {
            "en": "Automotive & Motorcycle",
            "pl": "Motoryzacja i Motocykle",
            "ua": "Автомобіль та Мотоцикли"
        },
        "description": {
            "en": "Explore a wide range of automotive and motorcycle products to keep your vehicles running smoothly.",
            "pl": "Odkryj szeroki wybór produktów motoryzacyjnych i motocyklowych, aby utrzymać swoje pojazdy w doskonałym stanie.",
            "ua": "Відкрий широкий асортимент автомобільних та мотоциклетних товарів."
        }
    },
    {
        "img": img10,
        "link": "https://s.click.aliexpress.com/e/_DCT3G63",
        "title": {
            "en": "Jewelry, Watches & Accessories",
            "pl": "Biżuteria, Zegarki i Akcesoria",
            "ua": "Прикраси, Годинники та Аксесуари"
        },
        "description": {
            "en": "Explore our exquisite collection of jewelry, watches, and accessories to add elegance to any outfit.",
            "pl": "Odkryj naszą wykwintną kolekcję biżuterii, zegarków i akcesoriów, aby dodać elegancji do każdej stylizacji.",
            "ua": "Тут ти знайдеш прикраси, годинники та аксесуари на свій смак."
        }
    },
    {
        "img": img11,
        "link": "https://s.click.aliexpress.com/e/_DlaFoZp",
        "title": {
            "en": "Electronics",
            "pl": "Elektronika",
            "ua": "Електроніка"
        },
        "description": {
            "en": "Discover the latest and greatest electronic gadgets and devices.",
            "pl": "Odkryj najnowsze i najlepsze gadżety i urządzenia elektroniczne.",
            "ua": "Відкрийте для себе найновіші та найкращі електронні пристрої та гаджети."
        }
    },
    {
        "img": img12,
        "link": "https://s.click.aliexpress.com/e/_DdCtSqj",
        "title": {
            "en": "Shoes",
            "pl": "Obuwie",
            "ua": "Взуття"
        },
        "description": {
            "en": "Discover stylish and comfortable shoes.",
            "pl": "Odkryj stylowe i wygodne obuwie.",
            "ua": "Відкрийте для себе стильне та комфортне взуття."
        }
    },
    {
        "img": img13,
        "link": "https://s.click.aliexpress.com/e/_DkOAO75",
        "title": {
            "en": "Hair Extensions & Wigs",
            "pl": "Włosy przedłużające i peruki",
            "ua": "Накладні волосся та парики"
        },
        "description": {
            "en": "Enhance your style with our range of high-quality hair extensions and wigs.",
            "pl": "Podkreśl swój styl za pomocą naszej gamy wysokiej jakości włosów przedłużających i peruk.",
            "ua": "Підкресліть свій стиль за допомогою нашого асортименту високоякісних накладних волосся та париків."
        }
    },
    {
        "img": img14,
        "link": "https://s.click.aliexpress.com/e/_DCcMwoP",
        "title": {
            "en": "Computer, Office & Education",
            "pl": "Komputery, Biuro i Edukacja",
            "ua": "Комп'ютери, Офіс та Освіта"
        },
        "description": {
            "en": "Explore our selection of computer equipment, office supplies, and educational resources.",
            "pl": "Odkryj nasz wybór sprzętu komputerowego, artykułów biurowych i materiałów edukacyjnych.",
            "ua": "Досліджуйте наш вибір комп'ютерного обладнання, офісних приладдя та освітніх ресурсів."
        }
    },
    {
        "img": img15,
        "link": "https://s.click.aliexpress.com/e/_Dkb6CKL",
        "title": {
            "en": "Phones & Telecommunications",
            "pl": "Telefony i Telekomunikacja",
            "ua": "Телефони та Телекомунікації"
        },
        "description": {
            "en": "Discover the latest smartphones, accessories, and telecommunications devices.",
            "pl": "Odkryj najnowsze smartfony, akcesoria i urządzenia telekomunikacyjne.",
            "ua": "Дізнайтеся про найновіші смартфони, аксесуари та телекомунікаційні пристрої."
        }
    },
    {
        "img": img16,
        "link": "https://s.click.aliexpress.com/e/_DBZARcj",
        "title": {
            "en": "Babies & Kids",
            "pl": "Dzieci i Niemowlęta",
            "ua": "Діти та Немовлята"
        },
        "description": {
            "en": "Explore our range of products designed for babies and kids to ensure their comfort and enjoyment.",
            "pl": "Odkryj naszą ofertę produktów zaprojektowanych dla dzieci i niemowląt, aby zapewnić im komfort i przyjemność.",
            "ua": "Досліджуйте наш асортимент продуктів, призначених для дітей та немовлят, щоб забезпечити їх комфорт та задоволення."
        }
    },
    {
        "img": img1,
        "link": "https://s.click.aliexpress.com/e/_DmwJ2kf",
        "title": {
            "en": "Home & Garden",
            "pl": "Dom i Ogród",
            "ua": "Дім і Сад"
        },
        "description": {
            "en": "Transform your living space with our wide selection of home decor, gardening supplies, and outdoor furniture.",
            "pl": "Przekształć swoją przestrzeń życiową dzięki naszej szerokiej gamie dekoracji do domu, artykułów ogrodniczych i mebli ogrodowych.",
            "ua": "Перетворіть свій простір для життя за допомогою нашого широкого вибору декору для дому, садового інвентарю та меблів для вуличних зон."
        }
    },
    {
        "img": img17,
        "link": "https://s.click.aliexpress.com/e/_DEe4JlV",
        "title": {
            "en": "Women's Clothing",
            "pl": "Odzież damska",
            "ua": "Жіночий одяг"
        },
        "description": {
            "en": "Discover the latest trends and timeless classics in women's fashion.",
            "pl": "Odkryj najnowsze trendy i ponadczasowe klasyki w modzie damsiej.",
            "ua": "Відкрийте для себе найновіші тренди та вічні класики в жіночій моді."
        }
    },
    {
        "img": img18,
        "link": "https://s.click.aliexpress.com/e/_DBhCqx5",
        "title": {
            "en": "Men's Clothing",
            "pl": "Odzież męska",
            "ua": "Чоловічий одяг"
        },
        "description": {
            "en": "Explore our collection of stylish and comfortable clothing for men.",
            "pl": "Odkryj naszą kolekcję stylowej i wygodnej odzieży dla mężczyzn.",
            "ua": "Досліджуйте нашу колекцію стильного та комфортного одягу для чоловіків."
        }
    }


]

const Categories = (props: CategoriesPropsType) => {
    const [activeCategories, setActiveCategories] = useState(false);
    const buttonTextShow = props.language === 'ua' ? 'Більше категорій' : props.language === 'pl' ? 'Więcej kategorii' : 'show more categories';
    const buttonTextHide = props.language === 'ua' ? 'Приховати категорії' : props.language === 'pl' ? 'Ukryj kategorii' : 'hide categories';

    return (
        <div className={s.Categories}>
            <div className={`${s.cards} ${activeCategories ? 'max-h-max' : 'max-h-60'}`}>
                {categories.map((category, index) => (
                    <CategoryCard
                        active={activeCategories}
                        key={index}
                        image={category.img}
                        link={category.link}
                        title={props.language === 'ua' ? category.title['ua'] : props.language === 'pl' ? category.title['pl'] : category.title['en']}
                        description={props.language === 'ua' ? category.description['ua'] : props.language === 'pl' ? category.description['pl'] : category.description['en']}
                    />
                ))}
            </div>
            <button
                onClick={() => setActiveCategories(!activeCategories)}
                className={`inline-flex items-center mt-4
            px-3 py-2 text-sm font-medium text-center
            text-white bg-blue-700 rounded-lg hover:bg-blue-800
            focus:ring-4 focus:outline-none focus:ring-blue-300
            dark:bg-blue-600 dark:hover:bg-blue-700
            dark:focus:ring-blue-800`}
            >
                {activeCategories ? buttonTextHide : buttonTextShow}
                <svg
                    className={`w-3.5 h-3.5 ms-2 ${activeCategories ? '-rotate-[90deg]' : '-rotate-[270deg]'}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Categories;
