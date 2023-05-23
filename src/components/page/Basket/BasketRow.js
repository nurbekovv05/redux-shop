import React from 'react';
import {MdDelete} from "react-icons/md";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket,  deleteFromBasket, increaseQuantity} from "../../redux/ActionCreator";

const BasketRow = ({el}) => {
    const {currencies,defaultCurrency} = useSelector(s => s)
    const dispatch = useDispatch()

    return (
        <tr className=" ">
            <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap ">
                {el.title}
            </th>
            <td className="px-6 py-4">
                <img src={el.image} width={45} alt=""/>
            </td>
            <td className="px-6 py-4 flex items-center mt-5">
                <span onClick={()=> dispatch(increaseQuantity(el.id))} className='mx-2 cursor-pointer text-xl text-blue-400'>
                       <AiOutlineMinus/>
                </span>
                {el.quantity}
                <span onClick={()=> dispatch(addToBasket(el))} className='mx-2 cursor-pointer text-xl text-blue-400'>
                    <AiOutlinePlus/>
                </span>

            </td>
            <td className="px-6 py-4 ">
                ${el.price * el.quantity *currencies[defaultCurrency]}
            </td>
            <td className="mx-6 my-4 text-2xl ">
                <MdDelete onClick={()=> dispatch(deleteFromBasket(el.id))} className='cursor-pointer'/>
            </td>
        </tr>
    );
};

export default BasketRow;