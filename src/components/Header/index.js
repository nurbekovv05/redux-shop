import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {chooseCurrency} from "../redux/ActionCreator";

const Header = () => {
    const dispatch = useDispatch()

    return (
        <header>
            <nav className="bg-gray-800 text-white border-gray-200 px-4 lg:px-6 py-5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9"
                             alt="Flowbite Logo"/>
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MOTION STORE</span>
                    </a>
                    <div className="flex items-center lg:order-2 ">
                        <select onChange={ () => dispatch(chooseCurrency)} id="countries"
                                className="bg-gray-700  border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="$">USA</option>
                            <option value="RUB">RUB</option>
                            <option value="TENGE">KZT</option>
                            <option value="SUM">UZB</option>
                            <option value="SOM" selected>KGZ</option>
                        </select>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                         id="mobile-menu-2">
                        <div className="header-menu flex flex-col text-xl mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <NavLink to='/'
                                     className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Home</NavLink>

                            <NavLink to='/favorites'
                               className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Favorite</NavLink>

                            <NavLink to='/basket'
                                     className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Basket</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;