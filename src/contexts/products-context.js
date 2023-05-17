import { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext()

export const ProductsProvider = ({children}) =>{

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading]  = useState(false);
    const [showFilter, setShowFilter] = useState(false);

    const getProducts = async() =>{
        setIsLoading(true);
        try {
            const res = await fetch('/api/products');
            if(res.status === 200){
                const response = await res.json();
                setProducts(response.products);
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
        <ProductsContext.Provider value={{ products, isLoading, showFilter, toggleFilter}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext);