import axios from "axios";
import { API_URL } from "../utils/constants";

const getWishlistService = async (encodedToken) =>
  await axios.get(`${API_URL}/user/wishlist`, {
    headers: { authorization: encodedToken },
  });

const addToWishlistService = async (product, encodedToken) =>
  await axios.post(
    `${API_URL}/user/wishlist`,
    { product },
    { headers: { authorization: encodedToken } }
  );

const removeFromWishlistService = async (productId, encodedToken) =>
  await axios.delete(`${API_URL}/user/wishlist/${productId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

export { getWishlistService, addToWishlistService, removeFromWishlistService };
