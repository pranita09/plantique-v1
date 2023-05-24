import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import cartReducer, { initialCartState } from "../reducers/cartReducer";
import { useState } from "react";
import getCartService from "../services/cart-services/getCartService";
import removeFromCartService from '../services/cart-services/removeFromCartService';
import updateQuantityService from '../services/cart-services/updateQuantityService';
import { useAuth } from "./auth-context";
import { useEffect } from "react";
import cartTypes from "../constants/cartTypes";
import addToCartService from "../services/cart-services/addToCartService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const navigate= useNavigate();
    const {token} = useAuth();
    const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
    const [isLoading, setIsLoading] = useState(false);

    const {DISPLAY_CART, ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY_IN_CART} = cartTypes;

    const getCart = async() => {
        setIsLoading(true);
        try {
            const response = await getCartService(token);
            const {status, data: {cart}} = response;
            if(status === 200){
                cartDispatch({type: DISPLAY_CART, payload: cart});
            }
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoading(false);
        }
    }

    const addToCart = async(product) => {
        try {
            const response = await addToCartService(product, token);
            const {status, data: {cart}} = response;
            if(status === 201){
                cartDispatch({type: ADD_TO_CART, payload: cart});
                toast.success(`${product.title} added to cart successfully!`);
            }
        } catch (error) {
            console.log(error);
            toast.error("Not able to add to cart.")
        }
    }

    const removeFromCart = async({_id: productId, title}) => {
        try {
            const response = await removeFromCartService(productId, token);
            const {status, data: {cart}} = response;
            if(status === 200){
                cartDispatch({type: REMOVE_FROM_CART, payload: cart})
                toast.success(`${title} removed from cart successfully!`);
            }
        } catch (error) {
            console.log(error);
            toast.error("Unable to remove from cart.")
        }
    }

    const updateQuantityInCart = async({_id: productId, title}, actionType) => {
        try {
            const response = await updateQuantityService(productId, actionType, token);
            const {status, data: {cart}} = response;
            if(status === 200){
                cartDispatch({type: UPDATE_QUANTITY_IN_CART, payload: cart});
                toast.success( actionType === "increment" ? `Added one more ${title} to the cart sucessfully!` : `Removed one ${title} from cart successfully!`);    
            }
        } catch (error) {
            console.log(error);
            toast.error("Unable to update quantity.");
        }
    }

    const isPresentInCart = (product) => cartState.cart.findIndex(({_id})=> _id === product._id);

    const isQuantityZeroInCart = (product) => product.qty === 0;

    useEffect(()=>{
        getCart();
    },[token])

    return(
        <CartContext.Provider value={{cartState, cartDispatch, isLoading, addToCart, isPresentInCart, navigate, removeFromCart, updateQuantityInCart, isQuantityZeroInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);