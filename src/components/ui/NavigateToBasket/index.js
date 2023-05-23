import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {SlBasket} from "react-icons/sl";

const NavigateToBasket = () => {
    const navigate = useNavigate()
    return (
        <button onClick={()=> navigate('/basket') }
                className="text-gray-900 flex items-center bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2">Перейти в <SlBasket/>
        </button>
    );
};

export default NavigateToBasket;