import axios from "axios";

const getCartService = async (encodedToken) =>
  await axios.get(
    "https://plantique-e-commerce-backend.onrender.com/user/cart",
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

const addToCartService = async (product, encodedToken) =>
  await axios.post(
    "https://plantique-e-commerce-backend.onrender.com/user/cart",
    { product },
    {
      headers: { authorization: encodedToken },
    }
  );

const removeFromCartService = async (productId, encodedToken) =>
  await axios.delete(
    `https://plantique-e-commerce-backend.onrender.com/user/cart/${productId}`,
    {
      headers: { authorization: encodedToken },
    }
  );

const updateQuantityService = async (productId, type, encodedToken) =>
  await axios.post(
    `https://plantique-e-commerce-backend.onrender.com/user/cart/${productId}`,
    { action: { type } },
    { headers: { authorization: encodedToken } }
  );

export {
  getCartService,
  addToCartService,
  removeFromCartService,
  updateQuantityService,
};
