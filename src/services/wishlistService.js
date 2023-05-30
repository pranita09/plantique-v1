import axios from "axios";

const getWishlistService = async (encodedToken) =>
  await axios.get("/api/user/wishlist", {
    headers: { authorization: encodedToken },
  });

const addToWishlistService = async (product, encodedToken) =>
  await axios.post(
    "/api/user/wishlist",
    { product },
    { headers: { authorization: encodedToken } }
  );

const removeFromWishlistService = async (productId, encodedToken) =>
  await axios.delete(`/api/user/wishlist/${productId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

export { getWishlistService, addToWishlistService, removeFromWishlistService };
