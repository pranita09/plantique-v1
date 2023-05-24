import {v4 as uuid} from "uuid";
import { useState } from "react";
import addressTypes from "../../constants/addressTypes";
import { useAddress } from "../../contexts/address-context";
import "./AddressModal.css";

const AddressModal = () => {
  
  const {addressDispatch} = useAddress();
  const {SHOW_ADDRESS_MODAL, ADD_NEW_ADDRESS} = addressTypes;
  const [addressDetails, setAddressDetails] = useState({
    _id: "",
    name: "",
    street: "",
    city: "",
    zipcode: "",
    state: "",
    country: "",
    mobile: "",
  });

  const addressFormInputHandler = (event) => {
    const {name, value} = event.target;
    setAddressDetails({...addressDetails, [name]: value});
  }

  const addAddressHandler = (event) =>{
    event.preventDefault();
    const addressId = uuid();
    addressDispatch({type: ADD_NEW_ADDRESS, payload: {...addressDetails, _id: addressId}});
    addressDispatch({type: SHOW_ADDRESS_MODAL, payload: false});
  }

  return (
    <div className="address-form-wrapper">
      <h3>Add New Address</h3>
      <form className="address-form-fields-group" onSubmit={addAddressHandler}>
        <div className="field input-field">
          <input type="text" placeholder="Name" name="name" value={addressDetails.name} className="input" onChange={addressFormInputHandler} required/>
        </div>
        <div className="field input-field">
          <input type="text" placeholder="Street" name="street" value={addressDetails.street} className="input" onChange={addressFormInputHandler} required/>
        </div>
        <div className="field input-field">
          <input type="text" placeholder="City" name="city" value={addressDetails.city} className="input" onChange={addressFormInputHandler} required/>
        </div>
        <div className="field input-field">
          <input type="text" placeholder="Zipcode" name="zipcode" value={addressDetails.zipcode} className="input" onChange={addressFormInputHandler} required/>
        </div>
        <div className="field input-field">
          <input type="text" placeholder="State" name="state" value={addressDetails.state} className="input" onChange={addressFormInputHandler} required/>
        </div>
        <div className="field input-field">
          <input type="input" placeholder="Country" name="country" value={addressDetails.country} className="input" onChange={addressFormInputHandler} required/>
        </div>
        <div className="field input-field">
          <input type="text" placeholder="Mobile No." name="mobile" value={addressDetails.mobile} className="input" onChange={addressFormInputHandler} required/>
        </div>
        <div className="address-form-action-btns">
          <div className="field input-field">
            <button className="add-btn" type='submit'>Add</button>
          </div>
          <div className="field input-field">
            <button className="cancel-btn" type='button' onClick={()=> 
              addressDispatch({type: SHOW_ADDRESS_MODAL, payload: false})}>Cancel</button>
          </div>
        </div>
        <div className="field input-field">
          <button className="fill-dummy-values-btn" type='submit'>Fill with Dummy Values</button>
        </div>
      </form>
    </div>
  );
};

export default AddressModal;
