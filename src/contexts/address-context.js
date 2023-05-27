import { useEffect, useReducer, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import addressReducer, {
  initialAddressState, initialAddressInput
} from "../reducers/addressReducer";
import { useAuth } from "./auth-context";
import getAddressesService from "../services/address-services/getAddressesService";
import {addressActionTypes} from "../constants/constants";
import addAddressService from "../services/address-services/addAddressService";
import removeAddressService from '../services/address-services/removeAddressService';
import editAddressService from '../services/address-services/editAddressService';
import { toast } from "react-hot-toast";

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {

  const {token} = useAuth();
  const [addressState, addressDispatch] = useReducer(
    addressReducer,
    initialAddressState
  );
  const [isLoading, setIsLoading] = useState(false);

  const {DISPLAY_ADDRESSES, ADD_NEW_ADDRESS, REMOVE_ADDRESS} = addressActionTypes;

  const getAddresses = async() =>{
    setIsLoading(true);
    try {
        const response = await getAddressesService(token);
        const {status, data: {address}} = response;
        if(status === 200){
            addressDispatch({type: DISPLAY_ADDRESSES, payload: address});
        }
    } catch (error) {
        console.log(error);
    } finally{
        setIsLoading(false);
    }
  }

  const addAddress = async(addressInput) => {
    try {
        const response = await addAddressService(addressInput, token);
        const {status, data: {address}} = response;
        if(status === 201){
            addressDispatch({type: ADD_NEW_ADDRESS, payload: address});
            toast.success("Added new address successfully!");
        }
    } catch (error) {
        console.log(error)
    }
  }

  const removeAddress = async(addressId) => {
    try {
        const response = await removeAddressService(addressId, token)
        const {status, data: {address}} = response;
        if(status === 200){
            addressDispatch({type: REMOVE_ADDRESS, payload: address});
            toast.success("Removed address succesfully!");
        }
    } catch (error) {
        console.log(error);
    }
  }

  const editAddress = async(addressInput, addressId) => {
    try {
        const response = await editAddressService(addressInput, addressId, token);
        console.log(response);
        const {status, data: {address}} = response;
        if(status === 201){
            console.log(address);
            addressDispatch({type: DISPLAY_ADDRESSES, payload: address});
            toast.success("Updated the address successfully!")
        }
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=>{
    if(token){
      getAddresses();
    }
  },[token])

  return (
    <AddressContext.Provider
      value={{ isLoading, addressState, addressDispatch, addAddress, removeAddress, editAddress, initialAddressInput }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
