import { createContext, useContext, useEffect, useState } from "react";
import getProductsService from "../services/products-services/getProductsService";
import { useReducer } from "react";
import { initialProductState, productReducer } from "../reducers/productReducer";
import filterTypes from "../constants/filterTypes";


export const ProductsContext = createContext()

export const ProductsProvider = ({children}) =>{

    const [productState, productDispatch] = useReducer(productReducer, initialProductState);
    const [isLoading, setIsLoading]  = useState(false);
    const [showFilter, setShowFilter] = useState(false);

    const {DISPLAY_PRODUCTS} = filterTypes;

    const getProducts = async() =>{
        setIsLoading(true);
        try {
            const response = await getProductsService();
            if(response.status === 200){
                productDispatch({ type: DISPLAY_PRODUCTS, payload: response.data.products});
            }
        } catch (error) {
            console.error(error);
        } finally{
            setIsLoading(false);
        }
      }

    const toggleFilter = () =>{
        setShowFilter((showFilter)=> !showFilter)
    }

    useEffect(()=>{
        getProducts();
    },[])

    return(
        <ProductsContext.Provider value={{ productState, isLoading, showFilter, toggleFilter}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext);