import React from 'react';
import BasketRow from "./BasketRow";
import {useSelector} from "react-redux";

const BasketTable = () => {
    const {basket, currencies, defaultCurrency} = useSelector(s => s)
    const totalPrice =basket.reduce((acc, el) => {
        return acc + el.price * el.quantity
    }, 0) * currencies[defaultCurrency]
    return (
        <>
            <table className="bg-gray-700 w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-300 uppercase bg-gray-600 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 rounded-l-lg">
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Quantity
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                        Price <span className='text-yellow-300'>{defaultCurrency}</span>
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-r-lg">

                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    basket.map(el => <BasketRow el={el}/>)
                }
                </tbody>
                <tfoot>
                <tr className="font-semibold text-gray-900 bg-gray-600 dark:text-white">
                    <th scope="row" className="px-6 py-3 text-base text-white">Total</th>
                    <td className="px-6 py-3"></td>
                    <td className="px-14 py-3 text-gray-400 ">{basket.length}</td>
                    <td className="px-6 py-3 text-gray-400">{totalPrice }</td>
                    <td className="px-6 py-3 text-gray-400"></td>
                </tr>
                </tfoot>
            </table>

        </>
    );
};

export default BasketTable;