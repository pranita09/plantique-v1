import axios from "axios";
import { API_URL } from "../utils/constants";

const getCartService = async (encodedToken) =>
  await axios.get(`${API_URL}/user/cart`, {
    headers: {
      authorization: encodedToken,
    },
  });

const addToCartService = async (product, encodedToken) =>
  await axios.post(
    `${API_URL}/user/cart`,
    { product },
    {
      headers: { authorization: encodedToken },
    }
  );

const removeFromCartService = async (productId, encodedToken) =>
  await axios.delete(`${API_URL}/user/cart/${productId}`, {
    headers: { authorization: encodedToken },
  });

const updateQuantityService = async (productId, type, encodedToken) =>
  await axios.post(
    `${API_URL}/user/cart/${productId}`,
    { action: { type } },
    { headers: { authorization: encodedToken } }
  );

export {
  getCartService,
  addToCartService,
  removeFromCartService,
  updateQuantityService,
};
