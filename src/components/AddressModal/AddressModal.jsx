import "./AddressModal.css";
import { v4 as uuid } from "uuid";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { addressActionTypes } from "../../utils/constants";
import { useAddress } from "../../contexts/address-context";

const dummyAddress = {
  name: "Aditi Shah",
  street: "7, G.N. Road",
  city: "Mumbai",
  zipcode: "986435",
  state: "Maharashtra",
  country: "India",
  mobile: "9568751239",
};

const AddressModal = () => {
  const {
    addressState: {
      addresses,
      addressFormData,
      addressFormError: { zipcodeError, mobileError },
    },
    addressDispatch,
    addAddress,
    editAddress,
    initialAddressInput,
    isEditBtn,
    setIsEditBtn,
  } = useAddress();

  const {
    SHOW_ADDRESS_MODAL,
    SET_ADDRESS_DETAILS,
    RESET_ADDRESS_FORM,
    SET_DUMMY_ADDRESS,
    ZIPCODE_ERROR,
    MOBILE_ERROR,
  } = addressActionTypes;

  const addressFormInputHandler = (event) => {
    const { name, value } = event.target;
    addressDispatch({ type: SET_ADDRESS_DETAILS, payload: { name, value } });
    if (name === "zipcode") {
      const zipcodeError =
        value.length > 0 && !/^([1-9]{1}[0-9]{3}|[1-9]{1}[0-9]{5})$/.test(value)
          ? true
          : false;
      addressDispatch({ type: ZIPCODE_ERROR, payload: { zipcodeError } });
    }
    if (name === "mobile") {
      const mobileError =
        value.length > 0 && !/^[6-9]{1}[0-9]{9}$/.test(value) ? true : false;
      addressDispatch({ type: MOBILE_ERROR, payload: { mobileError } });
    }
  };

  const fillDummyAddressHandler = (id) => {
    addressDispatch({
      type: SET_DUMMY_ADDRESS,
      payload: id
        ? { ...dummyAddress, _id: id }
        : { ...dummyAddress, _id: uuid() },
    });
  };

  const addAddressHandler = (event) => {
    event.preventDefault();
    if (zipcodeError || mobileError) {
      toast.error("Please enter valid inputs.");
    } else {
      const addressExist = addresses.find(
        (address) => address._id === addressFormData._id
      );
      if (addressExist) {
        editAddress(addressFormData, addressExist._id);
      } else {
        addAddress({ ...addressFormData, _id: uuid() });
      }
      addressDispatch({ type: SHOW_ADDRESS_MODAL, payload: false });
    }
    setIsEditBtn(false);
  };

  useEffect(() => {
    return () =>
      addressDispatch({
        type: RESET_ADDRESS_FORM,
        payload: initialAddressInput,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="address-form-wrapper">
      <h3>Add New Address</h3>
      <form className="address-form-fields-group" onSubmit={addAddressHandler}>
        <div className="field input-field">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={addressFormData.name}
            className="input"
            onChange={addressFormInputHandler}
            required
          />
        </div>
        <div className="field input-field">
          <input
            type="text"
            placeholder="Street"
            name="street"
            value={addressFormData.street}
            className="input"
            onChange={addressFormInputHandler}
            required
          />
        </div>
        <div className="field input-field">
          <input
            type="text"
            placeholder="City"
            name="city"
            value={addressFormData.city}
            className="input"
            onChange={addressFormInputHandler}
            required
          />
        </div>
        <div className="field input-field">
          <input
            type="text"
            placeholder="Zipcode"
            name="zipcode"
            value={addressFormData.zipcode}
            className="input"
            onChange={addressFormInputHandler}
            required
          />
        </div>
        {zipcodeError ? (
          <div className="address-input-error-msg">Invalid zipcode</div>
        ) : null}
        <div className="field input-field">
          <input
            type="text"
            placeholder="State"
            name="state"
            value={addressFormData.state}
            className="input"
            onChange={addressFormInputHandler}
            required
          />
        </div>
        <div className="field input-field">
          <input
            type="input"
            placeholder="Country"
            name="country"
            value={addressFormData.country}
            className="input"
            onChange={addressFormInputHandler}
            required
          />
        </div>
        <div className="field input-field">
          <input
            type="text"
            placeholder="Mobile No."
            name="mobile"
            value={addressFormData.mobile}
            className="input"
            onChange={addressFormInputHandler}
            required
          />
        </div>
        {mobileError ? (
          <div className="address-input-error-msg">Invalid mobile number</div>
        ) : null}
        <div className="address-form-action-btns">
          <div className="field input-field">
            <button
              className={
                zipcodeError || mobileError ? "add-btn-disabled" : "add-btn"
              }
              type="submit"
            >
              {isEditBtn ? "Save" : "Add"}
            </button>
          </div>
          <div className="field input-field">
            <button
              className="cancel-btn"
              type="button"
              onClick={() => {
                addressDispatch({ type: SHOW_ADDRESS_MODAL, payload: false });
                setIsEditBtn(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="address-form-action-btns">
          <div className="field input-field">
            <button
              className="fill-dummy-values-btn"
              type="button"
              onClick={() => fillDummyAddressHandler(addressFormData._id)}
            >
              Dummy Inputs
            </button>
          </div>
          <div className="field input-field">
            <button
              className="fill-dummy-values-btn"
              onClick={() =>
                addressDispatch({
                  type: RESET_ADDRESS_FORM,
                  payload: initialAddressInput,
                })
              }
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddressModal;
