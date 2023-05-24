import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import addressReducer, { initialAddressState } from "../reducers/addressReducer";

export const AddressContext  = createContext();

export const AddressProvider = ({children}) =>{
    const [addressState, addressDispatch] = useReducer(addressReducer, initialAddressState);

    return(
        <AddressContext.Provider value={{addressState, addressDispatch}}>
            {children}
        </AddressContext.Provider>
    )
}

export const useAddress = () => useContext(AddressContext);