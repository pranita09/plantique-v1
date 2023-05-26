import addressTypes from "../constants/addressTypes";

const {
  DISPLAY_ADDRESSES,
  SET_ADDRESS_DETAILS,
  EDIT_ADDRESS_DETAILS,
  ADD_NEW_ADDRESS,
  SET_DUMMY_ADDRESS,
  SHOW_ADDRESS_MODAL,
  REMOVE_ADDRESS,
  RESET_ADDRESS_FORM,
} = addressTypes;

export const initialAddressInput = {
  _id: "",
  name: "",
  street: "",
  city: "",
  state: "",
  zipcode: "",
  country: "",
  mobile: "",
};

export const initialAddressState = {
  addresses: [],
  showAddressModal: false,
  addressFormData: initialAddressInput,
  selectedAddressId: null,
};

const addressReducer = (state, { type, payload }) => {
  switch (type) {
    case DISPLAY_ADDRESSES:
      return {
        ...state,
        addresses: payload,
        selectedAddressId: payload ? payload._id : null,
      };
    case SHOW_ADDRESS_MODAL:
      return { ...state, showAddressModal: payload };
    case SET_ADDRESS_DETAILS:
      return {
        ...state,
        addressFormData: {
          ...state.addressFormData,
          [payload.name]: payload.value,
        },
      };
    case EDIT_ADDRESS_DETAILS:
      return { ...state, addressFormData: payload.addressToEdit };
    case ADD_NEW_ADDRESS:
      return { ...state, addresses: payload };
    case SET_DUMMY_ADDRESS:
      return { ...state, addressFormData: payload };
    case REMOVE_ADDRESS:
      return { ...state, addresses: payload };
    case RESET_ADDRESS_FORM:
      return { ...state, addressFormData: payload };
    default:
      return state;
  }
};

export default addressReducer;
