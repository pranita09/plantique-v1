import axios from "axios";

const getWishlistService = async ( encodedToken ) =>
  await axios.get("/api/user/wishlist", {
    headers: { authorization: encodedToken },
  });

export default getWishlistService;
