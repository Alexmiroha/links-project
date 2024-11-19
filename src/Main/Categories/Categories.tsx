import React, {useEffect, useRef,} from 'react';
import {Route, Routes, useNavigate, useParams} from "react-router-dom";
import s from './Categories.module.css';
import { categories } from "../../data/categoriesData";
import img1 from "../../img/Categories/Cosmetics Organizers.jpg";
import img2 from "../../img/Categories/bmi.jpg";
import img3 from "../../img/Categories/comb-hair-massage.jpg";
import img4 from "../../img/Categories/permanent-makeup_mini.jpg";

import {Category} from "./Category";
import SubCategories from "./SubCategories";
import img1_1 from "../../img/Categories/Cosmetics Organizers.jpg";
import img1_2 from "../../img/Categories/bmi.jpg";
import img1_3 from "../../img/Categories/comb-hair-massage.jpg";
import img1_4 from "../../img/Categories/permanent-makeup_mini.jpg";

type CategoriesPropsType = {
    language: string,
};

const Categories = (props: CategoriesPropsType) => {

    const listRef = useRef<HTMLUListElement | null>(null);
    const navigate = useNavigate();

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

    // ----------------------------------------------------------------

// -------------------------------------------
//     слухає лінк і в залежності від нього вертає відповідну субкатегорію
    const CategoryDetails = () => {

        let {categoryLink} = useParams<{ categoryLink: string }>();
        const category = categories.find(cat => cat.link === `/${categoryLink}`);

        if (!category) {
            return <SubCategories
                language={props.language}
                CategoryTitle={{en: 'Beauty & Health', pl: 'Uroda i Zdrowie', ua: 'Краса та Здоров\'я'}}
                Subcategories={[
                    {
                        "img": img1_1,
                        "link": "https://s.click.aliexpress.com/e/_Dmu8GW3",
                        "title": {
                            "en": "Cosmetics Organizers",
                            "pl": "Organizery Kosmetyczne",
                            "ua": "Органайзери для Косметики"
                        },
                        "description": {
                            "en": "Keep your beauty products organized and within reach with our cosmetic organizers.",
                            "pl": "Utrzymuj swoje kosmetyki w porządku i zawsze pod ręką dzięki organizerom kosmetycznym.",
                            "ua": "Тримайте свою косметику впорядкованою та завжди під рукою з органайзерами для косметики."
                        }
                    },
                    {
                        "img": img1_2,
                        "link": "https://s.click.aliexpress.com/e/_DksMelv",
                        "title": {
                            "en": "Back Massage Instrument",
                            "pl": "Urządzenia do Masażu Pleców",
                            "ua": "Прилади для Масажу Спини"
                        },
                        "description": {
                            "en": "Ease tension and stress with back massage tools.",
                            "pl": "Zredukuj napięcie i stres dzięki akcesoriom do masażu pleców.",
                            "ua": "Позбавтеся напруги та стресу за допомогою цих інструментів для масажу спини."
                        }
                    },
                    {
                        "img": img1_3,
                        "link": "https://s.click.aliexpress.com/e/_DlpxD7p",
                        "title": {
                            "en": "Massage Comb",
                            "pl": "Grzebień do Masażu",
                            "ua": "Масажні Гребінці"
                        },
                        "description": {
                            "en": "Stimulate your scalp and boost blood circulation with massage combs.",
                            "pl": "Stymuluj skórę głowy i popraw przepływ krwi za pomocą grzebieni do masażu.",
                            "ua": "Стимулюйте шкіру голови та покращуйте кровообіг за допомогою масажних гребінців."
                        }
                    },
                    {
                        "img": img1_4,
                        "link": "https://s.click.aliexpress.com/e/_DFdmRtl",
                        "title": {
                            "en": "Permanent Makeup Machines",
                            "pl": "Maszynki do Makijażu Permanentnego",
                            "ua": "Машинки для Перманентного Макіяжу"
                        },
                        "description": {
                            "en": "Achieve flawless permanent makeup with advanced machines.",
                            "pl": "Uzyskaj idealny makijaż permanentny dzięki tym urządzeniam do makijażu permanentnego.",
                            "ua": "Досягніть бездоганного перманентного макіяжу за допомогою цих машинок для макіяжу."
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

            {/*рендерить категорію в залежності від лінку в адресному рядку*/}
            <Routes>
                <Route
                    path="/"
                    element={<SubCategories
                        language={props.language}
                        CategoryTitle={{en: categories[0].title.en, pl: categories[0].title.pl, ua: categories[0].title.ua}}
                        Subcategories={categories[0].subcategories}
                    />}
                />
                <Route path=":categoryLink" element={<CategoryDetails/>}/>
            </Routes>
        </div>

    );
};

export default Categories;