import React from 'react';
import s from './ProductCard.module.css'
import i1 from "../../../img/Produscts/v1.webp";
import img2 from "../../../img/sport.jpg";
import img3 from "../../../img/pets.jpg";
import img4 from "../../../img/furniture.jpg";
import img5 from "../../../img/beauty.jpg";
import img6 from "../../../img/toys.jpg";
import img7 from "../../../img/bags and shoes.jpg";
import img8 from "../../../img/lightning.jpg";
import img9 from "../../../img/moto.jpg";
import img10 from "../../../img/watch.jpg";
import img11 from "../../../img/electronics.jpg";
import img12 from "../../../img/bsize.jpg";
import img13 from "../../../img/hair.jpg";
import img14 from "../../../img/computer.jpg";
import img15 from "../../../img/phone.jpg";
import img16 from "../../../img/kids.jpg";
import img1 from "../../../img/home and garden.jpg";
import img17 from "../../../img/womens.jpg";
import img18 from "../../../img/man.jpg";


type ProductCardPropsType = {
    video: string,
    title: string,
    description: string,
    img: string,
    link: string
}

const ProductCard = (props:ProductCardPropsType) => {
    return (
        <div className="flex justify-center mt-4 min-w-[210px] min-h-[350px] w-[30%] md:w-[90%] xl:w-[80%] md:min-w-full md:min-h-full">
            <a href={props.link} target="_blank"
               rel="noopener noreferrer"
               className="flex flex-col w-[90%] items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-[84%] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                    className="object-cover w-full rounded-t-lg h-auto
                    md:h-auto md:w-28 md:rounded-none md:rounded-s-lg
                    lg:w-32
                    xl:w-40
                    2xl:w-48"
                    src={i1} alt=""/>
                <div className="flex flex-col justify-between p-2 leading-normal w-[90%] h-[90%]">
                    <p className="text-sm md:text-xl text-orange-400">{props.video}</p>
                    <h6 className="text-sm md:text-xl mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h6>
                    <p className="text-[.7rem] md:text-sm mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
                </div>
            </a>
        </div>
    );
};

export default ProductCard;