import React, {useEffect, useRef, useState} from 'react';
import {Route, Routes, useNavigate, useParams} from "react-router-dom";
import s from './Categories.module.css';
import { categories } from "../../Data/categoriesData";
import img1 from "../../img/Categories/Cosmetics Organizers.jpg";
import img2 from "../../img/Categories/bmi.jpg";
import img3 from "../../img/Categories/comb-hair-massage.jpg";
import img4 from "../../img/Categories/permanent-makeup_mini.jpg";

import Category from "./Category";
import SubCategories from "./SubCategories";

type CategoriesPropsType = {
    language: string,
};

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
                CategoryTitle={{en: 'Beauty & Health', pl: 'Uroda i Zdrowie', ua: 'Краса та Здоров\'я'}}
                Subcategories={[
                    {
                        "img": img1,
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
                        "img": img2,
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
                        "img": img4,
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
                            icon={'icon'}
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
