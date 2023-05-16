import { createContext, useContext, useState } from "react";
import { products } from "../backend/db/products";

export const ProductsContext = createContext()

export const ProductsProvider = ({children}) =>{

    const [showFilter, setShowFilter] = useState(false);

    const toggleFilter = () =>{
        setShowFilter((showFilter)=> !showFilter)
    }

    return(
        <ProductsContext.Provider value={{ products , showFilter, toggleFilter}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext);