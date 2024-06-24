import React from 'react';

type SubCategoryPropsType = {
    language: string,
    CategoryImg: string,
    CategoryTitle: { en: string; pl: string; ua: string; },
    SubCategoryImg: string,
    SubCategoryTitle: string,
    SubCategoryLink: string,
    SubCategoryDescription: string

}

const SubCategory = (props:SubCategoryPropsType) => {
    return (
        <div>
            <h2>{props.language === 'ua' ? props.CategoryTitle.ua : props.language === 'pl' ? props.CategoryTitle.pl : props.CategoryTitle.en}</h2>
            <img src={props.CategoryImg} className="block w-full h-full object-cover"
                 alt={props.CategoryTitle.en}/>

        </div>
    );
};

export default SubCategory;