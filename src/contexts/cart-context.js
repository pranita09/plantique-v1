import {
  useReducer,
  useContext,
  createContext,
  useState,
  useEffect,
} from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "./auth-context";
import {
  getCartService,
  addToCartService,
  removeFromCartService,
  updateQuantityService,
} from "../services/cartService";
import cartReducer, { initialCartState } from "../reducers/cartReducer";
import { cartActionTypes } from "../utils/constants";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { token } = useAuth();
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
  const [isLoading, setIsLoading] = useState(false);

  const {
    DISPLAY_CART,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_QUANTITY_IN_CART,
  } = cartActionTypes;
  const fixedDiscount = 50;
  const deliveryCharges = 49;

  const getCart = async () => {
    setIsLoading(true);
    try {
      const response = await getCartService(token);
      const {
        status,
        data: { cart },
      } = response;
      if (status === 200) {
        cartDispatch({ type: DISPLAY_CART, payload: cart });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addToCart = async (product) => {
    try {
      const response = await addToCartService(product, token);
      const {
        status,
        data: { cart },
      } = response;
      if (status === 201) {
        cartDispatch({ type: ADD_TO_CART, payload: cart });
        toast.success(`${product.title} added to cart successfully!`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Not able to add to cart.");
    }
  };

  const removeFromCart = async ({ _id: productId, title }) => {
    try {
      const response = await removeFromCartService(productId, token);
      const {
        status,
        data: { cart },
      } = response;
      if (status === 200) {
        cartDispatch({ type: REMOVE_FROM_CART, payload: cart });
        toast.success(`${title} removed from cart successfully!`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Unable to remove from cart.");
    }
  };

  const updateQuantityInCart = async (
    { _id: productId, title },
    actionType
  ) => {
    try {
      const response = await updateQuantityService(
        productId,
        actionType,
        token
      );
      const {
        status,
        data: { cart },
      } = response;
      if (status === 200) {
        cartDispatch({ type: UPDATE_QUANTITY_IN_CART, payload: cart });
        toast.success(
          actionType === "increment"
            ? `Added one more ${title} to the cart sucessfully!`
            : `Removed one ${title} from cart successfully!`
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("Unable to update quantity.");
    }
  };

  const itemInCart = (productId) =>
    cartState.cart.find((product) => product._id === productId);

  const isQuantityZeroInCart = (product) => product.qty === 0;

  const clearCart = () => {
    cartState.cart.forEach((product) => {
      removeFromCart(product);
    });
  };

  const totalPriceWithoutDiscount = cartState.cart.reduce(
    (acc, curr) => acc + curr.updatedPrice * curr.qty,
    0
  );
  const totalDiscount = cartState.cart.reduce(
    (acc, curr) => acc + curr.qty * fixedDiscount,
    0
  );
  const totalCheckoutAmount =
    totalPriceWithoutDiscount + deliveryCharges - totalDiscount;

  useEffect(() => {
    if (token) {
      getCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        isLoading,
        addToCart,
        removeFromCart,
        updateQuantityInCart,
        itemInCart,
        isQuantityZeroInCart,
        deliveryCharges,
        totalPriceWithoutDiscount,
        totalDiscount,
        totalCheckoutAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
