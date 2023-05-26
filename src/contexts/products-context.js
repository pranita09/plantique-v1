import { createContext, useContext, useEffect, useState } from "react";
import getProductsService from "../services/products-services/getProductsService";
import { useReducer } from "react";
import {
  initialProductState,
  productReducer,
} from "../reducers/productReducer";
import filterActionTypes from "../constants/filterActionTypes";
import getCategoriesService from "../services/products-services/getCategoriesService";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProductState
  );
  const [isLoading, setIsLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const { DISPLAY_PRODUCTS, DISPLAY_CATEGORIES } = filterActionTypes;

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const response = await getProductsService();
      const {
        status,
        data: { products },
      } = response;
      if (status === 200) {
        productDispatch({
          type: DISPLAY_PRODUCTS,
          payload: products,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getCategories = async () => {
    setIsLoading(true);
    try {
      const response = await getCategoriesService();
      const {
        status,
        data: { categories },
      } = response;
      if (status === 200) {
        productDispatch({ type: DISPLAY_CATEGORIES, payload: categories });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFilter = () => {
    setShowFilter((showFilter) => !showFilter);
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const filteredBySearch = productState.searchInput
    ? productState.products.filter((product) =>
        product.title
          .toLowerCase()
          .includes(productState.searchInput.toLowerCase())
      )
    : productState.products;

  const filteredByCategories =
    productState.categoryInput.length > 0
      ? filteredBySearch.filter((product) =>
          productState.categoryInput.some(
            (catType) => product.category === catType
          )
        )
      : filteredBySearch;

  const filteredByAvailability =
    productState.availabilityInput.length > 0
      ? filteredByCategories.filter((product) =>
          productState.availabilityInput.every((type) => product[type])
        )
      : filteredByCategories;

  const filteredByPrice = productState.sortPriceRadioInput
    ? filteredByAvailability.sort((product1, product2) =>
        productState.sortPriceRadioInput === "hightolow"
          ? product2.discount - product1.discount
          : product1.discount - product2.discount
      )
    : filteredByAvailability;

  const filteredByRating = filteredByPrice.filter(
    (product) => product.starRating >= productState.ratingRange
  );

  const filteredBySize =
    productState.sizeInput.length > 0
      ? filteredByRating.filter((product) =>
          productState.sizeInput.some((sizeType) => product.size === sizeType)
        )
      : filteredByRating;

  return (
    <ProductsContext.Provider
      value={{
        productState,
        productDispatch,
        isLoading,
        showFilter,
        toggleFilter,
        filteredBySize,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
