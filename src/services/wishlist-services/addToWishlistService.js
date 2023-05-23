import axios from "axios";

const addToWishlistService = async (product, encodedToken) =>
  await axios.post(
    "/api/user/wishlist",
    { product },
    { headers: { authorization: encodedToken } }
  );

export default addToWishlistService;
