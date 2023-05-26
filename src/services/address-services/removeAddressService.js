import axios from "axios";

const removeAddressService = async (addressId, encodedToken) =>
  await axios.delete(`/api/user/address/${addressId}`, {
    headers: { authorization: encodedToken },
  });

export default removeAddressService;
