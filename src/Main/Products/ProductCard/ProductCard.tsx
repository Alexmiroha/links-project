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
        <div className="flex justify-center mt-4">
            <a href={props.link} target="_blank"
               rel="noopener noreferrer"
               className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-[80%] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src={i1} alt=""/>
                <div className="flex flex-col justify-between p-4 leading-normal w-[90%] h-[90%]">
                    <h6 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h6>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
                    <p className="text-orange-400">{props.video}</p>
                </div>
            </a>
        </div>
    );
};

export default ProductCard;