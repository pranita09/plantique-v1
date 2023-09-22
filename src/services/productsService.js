import axios from "axios";
import { API_URL } from "../utils/constants";

const getProductsService = async () => await axios.get(`${API_URL}/products`);

const getCategoriesService = async () =>
  await axios.get(`${API_URL}/categories`);

const getProductByIdService = async (productId) =>
  await axios.get(`${API_URL}/products/${productId}`);

export { getProductsService, getCategoriesService, getProductByIdService };
