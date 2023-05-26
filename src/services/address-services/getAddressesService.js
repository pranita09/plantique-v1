import axios from "axios";

const getAddressesService = async(encodedToken) => await axios.get('/api/user/addresses',{
    headers: { authorization: encodedToken}
})

export default getAddressesService;