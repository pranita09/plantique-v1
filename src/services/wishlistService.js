import axios from "axios";

const getWishlistService = async (encodedToken) =>
  await axios.get(
    "https://plantique-e-commerce-backend.onrender.com/user/wishlist",
    {
      headers: { authorization: encodedToken },
    }
  );

const addToWishlistService = async (product, encodedToken) =>
  await axios.post(
    "https://plantique-e-commerce-backend.onrender.com/user/wishlist",
    { product },
    { headers: { authorization: encodedToken } }
  );

const removeFromWishlistService = async (productId, encodedToken) =>
  await axios.delete(
    `https://plantique-e-commerce-backend.onrender.com/user/wishlist/${productId}`,
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export { getWishlistService, addToWishlistService, removeFromWishlistService };
