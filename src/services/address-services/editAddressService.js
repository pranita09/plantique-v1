import axios from "axios";

const editAddressService = async ( address, addressId, encodedToken) =>
  await axios.post(
    `/api/user/address/${addressId}`,
    { address: address },
    { headers: { authorization: encodedToken } }
  );

export default editAddressService;
