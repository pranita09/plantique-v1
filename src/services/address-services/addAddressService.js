import axios from "axios";

const addAddressService = async (address, encodedToken) =>
  await axios.post(
    "/api/user/address",
    {
      address: address,
    },
    { headers: { authorization: encodedToken } }
  );

  export default addAddressService;
