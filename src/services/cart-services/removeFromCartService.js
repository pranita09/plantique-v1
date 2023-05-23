import axios from "axios";

const removeFromCartService = async (productId, encodedToken) =>
  await axios.delete(`api/user/cart/${productId}`, {
    headers: { authorization: encodedToken },
  });

export default removeFromCartService;
