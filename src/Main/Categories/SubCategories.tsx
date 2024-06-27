import React, { useState, useEffect } from 'react';

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

            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {props.Subcategories?.map((SubCategory, index) => (
                        <div key={index} className={`transition-all duration-700 ease-in-out ${index === currentIndex ? 'block' : 'hidden'}`} data-carousel-item>
                            <div className='bg-green-700 font-bold'>
                                <img
                                    src={SubCategory.img}
                                    className="absolute block w-[30%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    alt="..."
                                />
                                <div>{SubCategory.title.en}</div>
                            </div>

                        </div>
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
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
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
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
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
