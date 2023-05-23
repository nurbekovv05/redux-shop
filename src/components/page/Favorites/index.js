import React from 'react';
import ProductCard from "../ProductCard/ProductCard";
import {useSelector} from "react-redux";

const Favorites = () => {
    const {favorites} = useSelector(s => s)
    return (
        <div className='container'>
            <div className='flex flex-wrap justify-between py-16'>
                {
                    favorites.map(el => (
                        <ProductCard product={el}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Favorites;