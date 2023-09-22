import axios from "axios";
import { API_URL } from "../utils/constants";

const getAddressesService = async (encodedToken) =>
  await axios.get(`${API_URL}/user/address`, {
    headers: { authorization: encodedToken },
  });

const addAddressService = async (address, encodedToken) =>
  await axios.post(
    `${API_URL}/user/address`,
    {
      address: address,
    },
    { headers: { authorization: encodedToken } }
  );

const editAddressService = async (address, addressId, encodedToken) =>
  await axios.post(
    `${API_URL}/user/address/${addressId}`,
    { address: address },
    { headers: { authorization: encodedToken } }
  );

const removeAddressService = async (addressId, encodedToken) =>
  await axios.delete(`${API_URL}/user/address/${addressId}`, {
    headers: { authorization: encodedToken },
  });

export {
  getAddressesService,
  addAddressService,
  editAddressService,
  removeAddressService,
};
