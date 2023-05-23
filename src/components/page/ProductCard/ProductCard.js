import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import AddToBasketBtn from "../../ui/AddToBasketBtn";
import NavigateToBasket from "../../ui/NavigateToBasket";
import AddToFavoritesBtn from "../../ui/AddToFavoriteBtn/AddToFavoritesBtn";
import {BsHeartFill} from "react-icons/bs";
import { likedToBasket} from "../../redux/ActionCreator";

const ProductCard = ({product}) => {
    const [isLiked, setIsLiked] = useState(false)
    const dispatch = useDispatch()
    const {basket, currencies, defaultCurrency} = useSelector(s => s)
    const foundProduct = basket.some(el => el.id === product.id)
    const likeFn =() => {
        dispatch(likedToBasket(product))
        if (!product.isLiked){
            setIsLiked(true)
            setTimeout(()=> setIsLiked(false), 1000)
        }
    }
    return (

        <div
            className="max-w-sm bg-gray-800 mb-8 text-center  basis-1/4 mx-3 border border-gray-200 rounded-lg shadow ">
              <div className='relative'>
                  <img onDoubleClick={likeFn} className="rounded-t-lg" src={product.image} alt=""/>
                  {
                      isLiked ?     <BsHeartFill className={`absolute ${isLiked ? 'scale-1 ' : 'scale-0'} top-[50%] left-[43%] transition-[.1s] text-red-500 text-4xl`}/> : ''

                  }
              </div>
            <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{product.title}</h5>
                <p className="mb-3 font-normal text-white dark:text-gray-400">{product.description}</p>
                <p className="mb-3 font-normal text-white dark:text-gray-400">{product.price *currencies[defaultCurrency]} {defaultCurrency} </p>
                <div>
                    <div className='flex items-center justify-around'>
                        <AddToFavoritesBtn product={product}/>
                        {foundProduct ? <NavigateToBasket/>  : <AddToBasketBtn product={product}/>}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;