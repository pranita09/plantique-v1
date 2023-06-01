import {
  useEffect,
  useReducer,
  useState,
  useContext,
  createContext,
} from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "./auth-context";
import addressReducer, {
  initialAddressState,
  initialAddressInput,
} from "../reducers/addressReducer";
import {
  getAddressesService,
  addAddressService,
  removeAddressService,
  editAddressService,
} from "../services/addressService";
import { addressActionTypes } from "../utils/constants";

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const { token } = useAuth();
  const [addressState, addressDispatch] = useReducer(
    addressReducer,
    initialAddressState
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isEditBtn, setIsEditBtn] = useState(false);

  const { DISPLAY_ADDRESSES, ADD_NEW_ADDRESS, REMOVE_ADDRESS } =
    addressActionTypes;

  const getAddresses = async () => {
    setIsLoading(true);
    try {
      const response = await getAddressesService(token);
      const {
        status,
        data: { address },
      } = response;
      if (status === 200) {
        addressDispatch({ type: DISPLAY_ADDRESSES, payload: address });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addAddress = async (addressInput) => {
    try {
      const response = await addAddressService(addressInput, token);
      const {
        status,
        data: { address },
      } = response;
      if (status === 201) {
        addressDispatch({ type: ADD_NEW_ADDRESS, payload: address });
        toast.success("Added new address successfully!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeAddress = async (addressId) => {
    try {
      const response = await removeAddressService(addressId, token);
      const {
        status,
        data: { address },
      } = response;
      if (status === 200) {
        addressDispatch({ type: REMOVE_ADDRESS, payload: address });
        toast.success("Removed address succesfully!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editAddress = async (addressInput, addressId) => {
    try {
      const response = await editAddressService(addressInput, addressId, token);
      const {
        status,
        data: { address },
      } = response;
      if (status === 201) {
        addressDispatch({ type: DISPLAY_ADDRESSES, payload: address });
        toast.success("Updated the address successfully!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (token) {
      getAddresses();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <AddressContext.Provider
      value={{
        isLoading,
        addressState,
        addressDispatch,
        addAddress,
        removeAddress,
        editAddress,
        initialAddressInput,
        isEditBtn,
        setIsEditBtn,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
