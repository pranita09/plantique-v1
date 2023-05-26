import { v4 as uuid } from "uuid";
import { useEffect } from "react";
import addressActionTypes from "../../constants/addressActionTypes";
import { useAddress } from "../../contexts/address-context";
import "./AddressModal.css";

const dummyAddress = {
  name: "Aditi Shah",
  street: "7, G. N. Road",
  city: "Mumbai",
  zipcode: "986435",
  state: "Maharashtra",
  country: "India",
  mobile: "2568751239",
};

const AddressModal = () => {
  const {
    addressState: { addresses, addressFormData },
    addressDispatch,
    addAddress,
    editAddress,
    initialAddressInput,
  } = useAddress();
  const {
    SHOW_ADDRESS_MODAL,
    SET_ADDRESS_DETAILS,
    RESET_ADDRESS_FORM,
    SET_DUMMY_ADDRESS,
  } = addressActionTypes;

  const addressFormInputHandler = (event) => {
    const { name, value } = event.target;
    addressDispatch({ type: SET_ADDRESS_DETAILS, payload: { name, value } });
  };

  const fillDummyAddressHandler = () => {
    addressDispatch({ type: SET_DUMMY_ADDRESS, payload: dummyAddress });
  };

  const addAddressHandler = (event) => {
    event.preventDefault();
    const addressExist = addresses.find(
      (address) => address._id === addressFormData._id
    );
    if (addressExist) {
      editAddress(addressFormData, addressExist._id);
    } else {
      addAddress({ ...addressFormData, _id: uuid() });
    }
    addressDispatch({ type: SHOW_ADDRESS_MODAL, payload: false });
  };

  useEffect(() => {
    return () =>
      addressDispatch({
        type: RESET_ADDRESS_FORM,
        payload: initialAddressInput,
      });
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
            value={addressFormData.name || ""}
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
            value={addressFormData.street || ""}
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
            value={addressFormData.city || ""}
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
            value={addressFormData.zipcode || ""}
            className="input"
            onChange={addressFormInputHandler}
            required
          />
        </div>
        <div className="field input-field">
          <input
            type="text"
            placeholder="State"
            name="state"
            value={addressFormData.state || ""}
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
            value={addressFormData.country || ""}
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
            value={addressFormData.mobile || ""}
            className="input"
            onChange={addressFormInputHandler}
            required
          />
        </div>
        <div className="address-form-action-btns">
          <div className="field input-field">
            <button className="add-btn" type="submit">
              Add
            </button>
          </div>
          <div className="field input-field">
            <button
              className="cancel-btn"
              type="button"
              onClick={() =>
                addressDispatch({ type: SHOW_ADDRESS_MODAL, payload: false })
              }
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="field input-field">
          <button
            className="fill-dummy-values-btn"
            type="button"
            onClick={fillDummyAddressHandler}
          >
            Fill with Dummy Values
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressModal;
