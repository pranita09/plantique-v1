import axios from "axios";

const getProductByIdService = async (productId) =>
  await axios.get(`/api/products/${productId}`);

export default getProductByIdService;
