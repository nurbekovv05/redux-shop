import React from 'react';
import {useSelector} from "react-redux";
import BasketRow from "./BasketRow";
import BasketTable from "./BasketTable";
import {Link} from "react-router-dom";

const Basket = () => {
    const {basket} = useSelector(s =>s)
    return (
        <div className='container'>
            <div className="relative my-14 overflow-x-auto ">
             <div className='text-center'>

                     {
                         basket.length ? <BasketTable/>
                          :  <Link to={'/'}>    EMPTY BASKET <div className='flex items-center justify-center text-white bg-gray-800  w-[30%] mx-auto border h-16 my-20'>ADD PRODUCTS +</div>   </Link>
                     }
             </div>

            </div>
        </div>


    );
};

export default Basket;