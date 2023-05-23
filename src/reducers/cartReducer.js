import cartTypes from "../constants/cartTypes";

const {DISPLAY_CART, ADD_TO_CART, REMOVE_FROM_CART} = cartTypes;

export const initialCartState = {
    cart: [],
}

const cartReducer = (state, {type, payload}) => {
    switch(type){
        case DISPLAY_CART:
            return {...state, cart: payload}
        case ADD_TO_CART:
            return {...state, cart: [...payload]}
        case REMOVE_FROM_CART: 
            return {...state, cart: [...payload]}
        default:
            return state;
    }
}

export default cartReducer; 