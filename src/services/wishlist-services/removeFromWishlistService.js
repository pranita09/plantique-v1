import axios from "axios";

const removeFromWishlistService = async ( productId, encodedToken ) =>
  await axios.delete(`/api/user/wishlist/${productId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

export default removeFromWishlistService;
