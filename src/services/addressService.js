import axios from "axios";

const getAddressesService = async (encodedToken) =>
  await axios.get(
    "https://plantique-e-commerce-backend.onrender.com/user/address",
    {
      headers: { authorization: encodedToken },
    }
  );

const addAddressService = async (address, encodedToken) =>
  await axios.post(
    "https://plantique-e-commerce-backend.onrender.com/user/address",
    {
      address: address,
    },
    { headers: { authorization: encodedToken } }
  );

const editAddressService = async (address, addressId, encodedToken) =>
  await axios.post(
    `https://plantique-e-commerce-backend.onrender.com/user/address/${addressId}`,
    { address: address },
    { headers: { authorization: encodedToken } }
  );

const removeAddressService = async (addressId, encodedToken) =>
  await axios.delete(
    `https://plantique-e-commerce-backend.onrender.com/user/address/${addressId}`,
    {
      headers: { authorization: encodedToken },
    }
  );

export {
  getAddressesService,
  addAddressService,
  editAddressService,
  removeAddressService,
};
