import axios from "axios";

const getProductsService = async () => await axios.get("/api/products");

const getCategoriesService = async () => await axios.get("/api/categories");

const getProductByIdService = async (productId) =>
  await axios.get(`/api/products/${productId}`);

export { getProductsService, getCategoriesService, getProductByIdService };
