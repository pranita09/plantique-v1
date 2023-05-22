import axios from "axios";

const getCategoriesService = async() => await axios.get('/api/categories');

export default getCategoriesService;