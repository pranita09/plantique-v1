import wishlistTypes from "../constants/wishlistTypes";

const {DISPLAY_WISHLIST, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} = wishlistTypes;

export const initialWishlistState = {
    wishlist: [],
}

const wishlistReducer = (state, {type, payload}) => {
    switch(type){
        case DISPLAY_WISHLIST:
            return{...state, wishlist: payload}
        case ADD_TO_WISHLIST:
            const uniqueWishlistArray = payload.reduce((acc, curr)=> acc.includes(curr) ? acc : [...acc, curr],[])
            return{...state, wishlist: [...uniqueWishlistArray]}
        case REMOVE_FROM_WISHLIST:
            return {...state, wishlist: payload}
        default:
            console.log('default');
            return state;
    }
}

export default wishlistReducer;