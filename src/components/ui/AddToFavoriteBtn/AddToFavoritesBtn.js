import React from 'react';
import {AiFillHeart} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {FaTrash} from "react-icons/fa";
import {addToFavorites} from "../../redux/ActionCreator";

const AddToFavoritesBtn = ({product}) => {
    const dispatch =useDispatch()
    const {favorites} = useSelector(s => s)
    const found = favorites.some(el => el.id === product.id)
    return (
        <button onClick={()=> dispatch(addToFavorites(product))}
                className={`${found ? 'text-red-600' : 'text-white'} text-gray-900 bg-gradient-to-r from-blue-600 via-blue-600 to-yellow-200  focus:outline-none focus:ring-red-300 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-6 py-3 text-center mr-2 mb-2`}>
            {
                product.isLiked ? <FaTrash className='text-white text-xl'/> : <AiFillHeart className='text-xl'/>
            }
        </button>
    );
};

export default AddToFavoritesBtn;