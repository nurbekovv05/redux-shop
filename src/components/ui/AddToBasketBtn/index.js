import React from 'react';
import {ADD_TO_BASKET} from "../../redux/ActionTypes";
import {useDispatch} from "react-redux";
import {SlBasket} from "react-icons/sl";
import {addToBasket} from "../../redux/ActionCreator";

const AddToBasketBtn = ({product}) => {
    const dispatch = useDispatch()
    return (
        <button onClick={()=> dispatch(addToBasket(product)) }
                className="text-gray-900 flex items-center bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2">Добавить в <SlBasket/>
        </button>
    );
};

export default AddToBasketBtn;