import filterTypes from "../constants/filterTypes";

const {DISPLAY_PRODUCTS} =  filterTypes;

export const initialProductState = {
    products: [],
    category: [],
}

export const productReducer = (state, action) =>{
    switch(action.type){
        case DISPLAY_PRODUCTS:
            return{...state, products: action.payload}
        default:
            return state;
    }
}