import axios from "axios";

const getProductsService = async() => await axios.get('/api/products');

export default getProductsService;