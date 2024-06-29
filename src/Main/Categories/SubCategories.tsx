import React, {useState, useEffect} from 'react';

type SubCategoryPropsType = {
    language: string,
    CategoryImg: string,
    CategoryTitle: { en: string; pl: string; ua: string; },
    Subcategories: {
        img: string;
        link: string;
        title: { en: string; pl: string; ua: string; };
        description: { en: string; pl: string; ua: string; };
    }[] | undefined
}

const SubCategories = (props: SubCategoryPropsType) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState<NodeListOf<Element> | null>(null);

    useEffect(() => {
        const items = document.querySelectorAll('[data-carousel-item]');
        setCarouselItems(items);
    }, []);

    const nextSlide = () => {
        if (carouselItems) {
            const nextIndex = currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
            setCurrentIndex(nextIndex);
        }
    };

    const prevSlide = () => {
        if (carouselItems) {
            const prevIndex = currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
            setCurrentIndex(prevIndex);
        }
    };

    useEffect(() => {
        if (carouselItems) {
            carouselItems.forEach((item, index) => {
                if (index === currentIndex) {
                    item.classList.remove('hidden');
                    item.classList.add('block');
                } else {
                    item.classList.remove('block');
                    item.classList.add('hidden');
                }
            });
        }
    }, [currentIndex, carouselItems]);

    return (
        <div>
            <h2>{props.language === 'ua' ? props.CategoryTitle.ua : props.language === 'pl' ? props.CategoryTitle.pl : props.CategoryTitle.en}</h2>

            <div id="default-carousel" className="relative w-full flex justify-center" data-carousel="slide">
                <div className="relative h-auto overflow-hidden rounded-lg w-[93%] md:w-[80%] lg:w-[85%] 2xl:w-[88%]">
                    {props.Subcategories?.map((SubCategory, index) => (
                        <a href={SubCategory.link} key={index}
                           className={`h-[100%]  transition-all duration-700 ease-in-out flex flex-col md:flex-row items-center
                            bg-white border border-gray-200 rounded-lg shadow
                             hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700
                              ${index === currentIndex ? 'block' : 'hidden'}`} data-carousel-item>
                            <img
                                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-[35%] md:rounded-none md:rounded-s-lg"
                                src={SubCategory.img} alt={SubCategory.link}/>
                            <div className="flex flex-col justify-between p-4 leading-normal h-[40%] md:h-[100%] w-[90%]">
                                <h3 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white 3xl:text-4xl 2xl:text-2xl text-sm">{props.language === 'ua' ? SubCategory.title.ua : props.language === 'pl' ? SubCategory.title.pl : SubCategory.title.en}</h3>
                                <p className="mb-2 font-normal text-gray-700 dark:text-gray-400 3xl:text-2xl 2xl:text-lg text-sm">{props.language === 'ua' ? SubCategory.description.ua : props.language === 'pl' ? SubCategory.description.pl : SubCategory.description.en}</p>
                                <button type="button"
                                        className="flex justify-center mt-4 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                    <p className="3xl:text-lg text-[12px]">{props.language === 'ua' ? SubCategory.title.ua : props.language === 'pl' ? SubCategory.title.pl : SubCategory.title.en}{' '}
                                        {props.language === 'ua' ? 'на' : props.language === 'pl' ? 'na' : 'on'} {' '} Aliexpress</p>
                                    <svg className="w-6 h-6 text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                    </svg>

                                </button>
                            </div>
                        </a>

                    ))}
                </div>

                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {props.Subcategories?.map((SubCategory, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-black' : 'bg-gray-300'}`}
                            aria-current="true"
                            aria-label={`Slide ${index + 1}`}
                            data-carousel-slide-to={index}
                        ></button>
                    ))}
                </div>

                <button
                    type="button"
                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev
                    onClick={prevSlide}
                >
                    <span
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 1 1 5l4 4"
                            />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>

                <button
                    type="button"
                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next
                    onClick={nextSlide}
                >
                    <span
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default SubCategories;
