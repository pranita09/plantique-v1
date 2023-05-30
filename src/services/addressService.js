import axios from "axios";

const getAddressesService = async (encodedToken) =>
  await axios.get("/api/user/addresses", {
    headers: { authorization: encodedToken },
  });

const addAddressService = async (address, encodedToken) =>
  await axios.post(
    "/api/user/address",
    {
      address: address,
    },
    { headers: { authorization: encodedToken } }
  );

const editAddressService = async (address, addressId, encodedToken) =>
  await axios.post(
    `/api/user/address/${addressId}`,
    { address: address },
    { headers: { authorization: encodedToken } }
  );

const removeAddressService = async (addressId, encodedToken) =>
  await axios.delete(`/api/user/address/${addressId}`, {
    headers: { authorization: encodedToken },
  });

export {
  getAddressesService,
  addAddressService,
  editAddressService,
  removeAddressService,
};
