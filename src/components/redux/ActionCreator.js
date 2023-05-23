import {
    ADD_AND_DELETE_FAVORITE,
    ADD_TO_BASKET,
    ADD_TO_FAVORITES,
    CHOOSE_THE_CURRENCY,
    DELETE_BASKET, GET_PRODUCT,
    INCREASE_QUANTITY
} from "./ActionTypes";

export const getProduct = (data) => {
   return  {type: GET_PRODUCT, payload: data}
}



export const deleteFromBasket = (id) => {
    return ({type:DELETE_BASKET, payload: id})
}
export const increaseQuantity = (id) => {
    return ({type:INCREASE_QUANTITY, payload: id})
}

export const chooseCurrency = (e) => {
    return ({type: CHOOSE_THE_CURRENCY, payload: e})
}

export const likedToBasket = (item) => {
    return ({type: ADD_TO_FAVORITES, payload: item})
}

export const addToBasket = (product) => {

    return ({type: ADD_TO_BASKET, payload: product})
}

export const addToFavorites = (item) => {
    return({type: ADD_AND_DELETE_FAVORITE, payload: item})
}
