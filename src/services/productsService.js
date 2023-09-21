import axios from "axios";

const getProductsService = async () =>
  await axios.get("https://plantique-e-commerce-backend.onrender.com/products");

const getCategoriesService = async () =>
  await axios.get(
    "https://plantique-e-commerce-backend.onrender.com/categories"
  );

const getProductByIdService = async (productId) =>
  await axios.get(
    `https://plantique-e-commerce-backend.onrender.com/products/${productId}`
  );

export { getProductsService, getCategoriesService, getProductByIdService };
