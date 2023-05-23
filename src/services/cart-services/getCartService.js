import axios from "axios";

const getCartService = async( encodedToken ) => await axios.get('/api/user/cart',{
    headers: {
        authorization: encodedToken
    },
})

export default getCartService;