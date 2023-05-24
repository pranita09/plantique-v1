import axios from "axios";

const addToCartService = async (product, encodedToken) =>
  await axios.post(
    "/api/user/cart",
    { product },
    {
      headers: { authorization: encodedToken },
    }
  );

export default addToCartService;
