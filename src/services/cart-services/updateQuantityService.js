import axios from "axios";

const updateQuantityService = async (productId, type, encodedToken) =>
  await axios.post(
    `/api/user/cart/${productId}`,
    { action: { type } },
    { headers: { authorization: encodedToken } }
  );

  export default updateQuantityService;
